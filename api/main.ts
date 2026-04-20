import 'dotenv/config';
import { renderContributorStatsCard } from '@/cards/stats-card';
import {
  clampValue,
  CONSTANTS,
  parseArray,
  parseBoolean,
  renderError,
} from '@/common/utils';
import { fetchContributorStats } from '@/fetchContributorStats';
import { fetchAllContributorStats } from '@/fetchAllContributorStats';
import { isLocaleAvailable } from '@/translations';
import express from 'express';
import compression from 'compression';
import { LRUCache } from 'lru-cache';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const CACHE_TTL_MS = 3600000;
const cache = new LRUCache<string, string>({
  max: 100,
  ttl: CACHE_TTL_MS,
});

const app = express();
app.use(compression() as express.RequestHandler);
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api', limiter);

function getCached(key: string): string | null {
  return cache.get(key) ?? null;
}

function setCache(key: string, data: string): void {
  cache.set(key, data);
}

// Create GET request
app.get('/api', async (req, res) => {
  const {
    username,
    hide,
    hide_title,
    hide_border,
    hide_contributor_rank,
    order_by,
    line_height,
    title_color,
    icon_color,
    text_color,
    bg_color,
    custom_title,
    border_radius,
    border_color,
    theme,
    cache_seconds,
    locale,
    combine_all_yearly_contributions,
    limit,
  } = req.query;
  res.set('Content-Type', 'image/svg+xml');

  if (locale && !isLocaleAvailable(locale)) {
    return res.send(renderError('Something went wrong', 'Language not found'));
  }

  const cacheKey = `${username}-${combine_all_yearly_contributions}-${limit}`;

  const cached = getCached(cacheKey);
  if (cached) {
    res.setHeader('X-Cache', 'HIT');
    res.send(cached);
    return;
  }

  try {
    const result = await (combine_all_yearly_contributions
      ? fetchAllContributorStats(username as string)
      : fetchContributorStats(username as string));

    const name = result.name || username;
    const contributorStats = result.repositoriesContributedTo?.nodes || [];

    const cacheSeconds = clampValue(
      parseInt((cache_seconds as string) || CONSTANTS.FOUR_HOURS, 10),
      CONSTANTS.FOUR_HOURS,
      CONSTANTS.ONE_DAY,
    );

    res.setHeader('Cache-Control', `public, max-age=${cacheSeconds}`);

    const svg = await renderContributorStatsCard(username, name, contributorStats, {
      hide: parseArray(hide),
      hide_title: parseBoolean(hide_title),
      hide_border: parseBoolean(hide_border),
      hide_contributor_rank: parseBoolean(hide_contributor_rank),
      order_by,
      line_height,
      title_color,
      icon_color,
      text_color,
      bg_color,
      custom_title,
      border_radius,
      border_color,
      theme,
      locale: locale ? (locale as string).toLowerCase() : null,
      limit,
    });

    setCache(cacheKey, svg);
    res.setHeader('X-Cache', 'MISS');
    res.send(svg);
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error(String(err));
    const secondaryMessage =
      err instanceof Error && 'secondaryMessage' in err
        ? (err as Error & { secondaryMessage: string }).secondaryMessage
        : undefined;
    return res.send(renderError(error.message, secondaryMessage));
  }
});

// Export for Vercel serverless — @vercel/node uses this as the handler
export default app;

// Start server only in local development (Vercel ignores this in serverless)
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  const port = 9999;
  app.listen(port, () => {
    console.log(`Express app listening on port ${port}`);
  });
}
