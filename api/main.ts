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

const CACHE_TTL_MS = 3600000;
const cache = new Map<string, { data: any; expires: number }>();

const app = express();
app.use((compression as any)());

function getCached(key: string): any | null {
  const cached = cache.get(key);
  if (cached && cached.expires > Date.now()) {
    return cached.data;
  }
  cache.delete(key);
  return null;
}

function setCache(key: string, data: any): void {
  cache.set(key, { data, expires: Date.now() + CACHE_TTL_MS });
  if (cache.size > 100) {
    const oldestKey = cache.keys().next().value;
    if (oldestKey) {
      cache.delete(oldestKey);
    }
  }
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
  } catch (err: any) {
    return res.send(renderError(err.message, err.secondaryMessage));
  }
});

const port = 9999;

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
