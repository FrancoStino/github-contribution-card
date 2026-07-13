# Architecture

## Pattern Overview

**Overall:** Express-based HTTP API with serverless deployment, generating dynamic SVG cards from GitHub GraphQL/REST API data.

**Key Characteristics:**
- Single-endpoint REST API (`/api`) serving SVG images or an HTML demo page
- Two data-fetching strategies: current-year only (`fetchContributorStats`) vs. all-years with recursive time-range splitting (`fetchAllContributorStats`)
- Template-based SVG rendering via string concatenation (no DOM library)
- Dual deployment targets: Vercel serverless function and Docker-based GitHub Action sharing the same core rendering pipeline
- LRU in-memory cache for generated SVGs (server mode only)

## Layers

**HTTP Layer (Express Server):**
- Purpose: Accepts HTTP requests, validates parameters, manages caching, delegates to data-fetching and rendering
- Location: `src/server.ts`
- Contains: Express app setup, route handlers (`GET /api`), middleware (helmet, compression, rate limiting), LRU cache, demo page rendering
- Depends on: `@/cards/stats-card`, `@/common/utils`, `@/fetchContributorStats`, `@/fetchAllContributorStats`, `@/translations`, `themes`, `@/demo-content`
- Used by: Vercel serverless runtime, local dev server

**Data Fetching Layer:**
- Purpose: Retrieves GitHub user contribution data via GitHub GraphQL API (and REST API for contributor lists)
- Location: `src/fetchContributorStats.ts`, `src/fetchAllContributorStats.ts`, `getContributors.ts`
- Contains: GraphQL queries, REST API calls, recursive time-range splitting for large contributor sets, rate-limit-aware contributor fetching
- Depends on: `axios`, `process.env.GITHUB_PERSONAL_ACCESS_TOKEN`
- Used by: `src/server.ts`, `action/src/index.ts`, `src/cards/stats-card.ts`

**Ranking Layer:**
- Purpose: Computes star-based and contribution-based rank labels (S+, S, A+, A, B+, B)
- Location: `src/calculateRank.ts`, `src/calculateContributionRank.ts`
- Contains: Pure functions mapping numeric values to rank strings using threshold-based tiers
- Depends on: nothing external
- Used by: `src/cards/stats-card.ts`

**Rendering Layer (SVG Generation):**
- Purpose: Assembles SVG markup from data, applying themes, colors, styles, i18n, and layout
- Location: `src/cards/stats-card.ts`, `src/common/Card.ts`, `src/getStyles.ts`
- Contains: `Card` class (SVG skeleton, title rendering, gradient support, accessibility labels), `renderContributorStatsCard` (data → SVG orchestration), CSS/animation generation
- Depends on: `@/calculateRank`, `@/calculateContributionRank`, `@/common/utils`, `@/getStyles`, `@/translations`, `getContributors`
- Used by: `src/server.ts`, `action/src/index.ts`

**Theme & Styling Layer:**
- Purpose: Provides 60+ color theme definitions and CSS generation for card styling
- Location: `themes/index.ts`, `src/getStyles.ts`
- Contains: `themes` object (all built-in theme color sets), `getStyles` (CSS string generation with animations), `getAnimations`, `getProgressAnimation`, `calculateCircleProgress`
- Depends on: nothing external
- Used by: `src/common/Card.ts`, `src/cards/stats-card.ts`, `src/server.ts`

**Internationalization Layer:**
- Purpose: Translates card title strings into 20+ languages
- Location: `src/common/I18n.ts`, `src/translations.ts`
- Contains: `I18n` class (locale-aware translation lookup with fallback), locale string dictionaries for stat/repo/lang/wakatime cards
- Depends on: nothing external
- Used by: `src/cards/stats-card.ts`, `src/server.ts`

**Utility Layer:**
- Purpose: Shared helper functions for HTML encoding, text measurement, color parsing, flex layout, error rendering, and type validation
- Location: `src/common/utils.ts`
- Contains: `encodeHTML`, `measureText`, `kFormatter`, `parseBoolean`, `parseArray`, `clampValue`, `getCardColors`, `flexLayout`, `renderError`, `getImageBase64FromURL`, `CustomError`, `CONSTANTS`, `SECONDARY_ERROR_MESSAGES`
- Depends on: `themes`
- Used by: All layers

**Type Definitions:**
- Purpose: TypeScript type definitions for card options and GitHub Actions
- Location: `src/cards/types.d.ts`, `types/compression.d.ts`
- Contains: `CommonOptions`, `StatCardOptions`, `RepoCardOptions`, `TopLangOptions`, `WakaTimeOptions`, ambient type declarations
- Depends on: `themes` (for `ThemeNames`)
- Used by: `src/cards/stats-card.ts`

**GitHub Action Layer:**
- Purpose: Runs as a Docker-based GitHub Action with rate-limit-aware contributor fetching and SVG file output
- Location: `action/src/index.ts`, `action/action.yml`, `action/Dockerfile`
- Contains: `run()` entry point, `createRateLimitedFetcher()` (secondary rate limit protection with configurable delay), reads action inputs, writes SVG to file
- Depends on: `@actions/core`, `@/fetchAllContributorStats`, `@/fetchContributorStats`, `@/cards/stats-card`, `getContributors`
- Used by: GitHub Actions workflows

## Data Flow

**API Request → SVG Response (server mode):**

1. `GET /api?username=X` arrives — `src/server.ts`
2. Cache lookup (LRU key = sorted query params) — `src/server.ts`
3. If cache miss, fetch contribution data:
   - Current year only: `fetchContributorStats(username)` → GraphQL `repositoriesContributedTo` — `src/fetchContributorStats.ts`
   - All years: `fetchAllContributorStats(username)` → GraphQL per-year `contributionsCollection` with recursive time-range splitting — `src/fetchAllContributorStats.ts`
4. Transform data: map repositories to rank objects using `calculateRank` (star-based) and optionally `calculateContributionRank` (contribution percentile) — `src/cards/stats-card.ts`
5. Optionally fetch contributor lists per repo (for contribution rank display) via `getContributors` — `getContributors.ts`
6. Convert repo owner avatars to base64 data URLs — `src/common/utils.ts` (`getImageBase64FromURL`)
7. Resolve i18n title string — `src/common/I18n.ts` + `src/translations.ts`
8. Resolve theme colors with user overrides — `src/common/utils.ts` (`getCardColors`)
9. Build SVG markup: `Card.render()` → title, subtitle, stat rows with rank circles, CSS animations — `src/common/Card.ts`
10. Cache SVG, respond with `Content-Type: image/svg+xml` — `src/server.ts`

**Demo Page (no username query param):**

1. `GET /api` (no `username`) — `src/server.ts`
2. Build theme/locale option dropdowns from `themes` and `availableLocales` — `src/server.ts`
3. Inject CSS, JS, and options into `demoTemplate` via string replacement — `src/server.ts`
4. Respond with `Content-Type: text/html`

**GitHub Action → SVG File:**

1. Action starts in Docker container — `action/src/index.ts`
2. Read inputs via `@actions/core.getInput()` — `action/src/index.ts`
3. Fetch contribution data (same two strategies as API) — `action/src/index.ts`
4. Create rate-limited contributor fetcher (100ms min interval, handles 403/429 with backoff) — `action/src/index.ts`
5. Render SVG via `renderContributorStatsCard()` — `src/cards/stats-card.ts`
6. Write SVG to file at `output-file` path — `action/src/index.ts`
7. Set `svg-path` output — `action/src/index.ts`

**Recursive Time-Range Splitting (fetchAllContributorStats):**

1. Fetch contribution years for user — `src/fetchAllContributorStats.ts`
2. For each year, call `fetchContributionsWithSplitting()` — `src/fetchAllContributorStats.ts`
3. If result hits 100-repo API limit and depth < 4:
   - Ranges ≥6 months: split into two halves — `splitTimeRange()`
   - Ranges 2–5 months: split into individual months
   - Ranges <2 months: cannot split further, return as-is
4. Merge sub-range results, deduplicate by `nameWithOwner`, sum contributions — `src/fetchAllContributorStats.ts`

## Key Abstractions

**Card Class:**
- Purpose: SVG card skeleton with title, subtitle, gradient, border, accessibility labels, and animation control
- Location: `src/common/Card.ts`
- Pattern: Builder — methods like `setHideBorder()`, `setHideTitle()`, `setCSS()`, `setAccessibilityLabel()` configure before `render(body)` produces final SVG

**I18n Class:**
- Purpose: Locale-aware translation lookup with fallback to English
- Location: `src/common/I18n.ts`
- Pattern: Strategy — constructor receives locale + translation map, `t(key)` resolves at runtime

**getCardColors:**
- Purpose: Resolves final card colors by merging user overrides → selected theme → default theme
- Location: `src/common/utils.ts`
- Pattern: Chain of responsibility / fallback cascade — each color (title, text, icon, bg, border) follows: user param → theme value → default theme value

**renderContributorStatsCard:**
- Purpose: Orchestrates data transformation, layout computation, and SVG rendering for the stats card
- Location: `src/cards/stats-card.ts`
- Pattern: Template method — accepts options, performs steps in fixed order (color resolution → i18n → avatar fetching → rank computation → layout → card rendering)

**createRateLimitedFetcher:**
- Purpose: Wraps REST API contributor fetching with secondary rate limit protection and exponential backoff
- Location: `action/src/index.ts`
- Pattern: Decorator / retry wrapper — enforces 100ms minimum request interval, handles 403/429 with retry-after or reset-time waiting

## Entry Points

**Vercel Serverless Function:**
- Location: `src/server.ts` (bundled to `server.js` via esbuild)
- Triggers: HTTP `GET /api` requests from Vercel edge network
- Responsibilities: Route handling, parameter validation, caching, error rendering, demo page

**Local Development Server:**
- Location: `src/server.ts`
- Triggers: `yarn dev` (tsx watch) or `yarn start` (production build + run)
- Responsibilities: Same as Vercel but also starts Express listener on port 9999

**GitHub Action Entry Point:**
- Location: `action/src/index.ts` (bundled to `action/dist/index.js`)
- Triggers: GitHub Actions workflow using `FrancoStino/github-contribution-card/action@main`
- Responsibilities: Read inputs, fetch data, render SVG, write file, set outputs

**Build Script: Demo Content Generator:**
- Location: `scripts/gen-demo.ts`
- Triggers: `yarn build` (runs before esbuild)
- Responsibilities: Reads `api/demo/` HTML/CSS/JS files, generates `src/demo-content.ts` with exported string constants

**Build Script: Vercel Build:**
- Location: `scripts/vercel-build.sh`
- Triggers: `yarn vercel-build`
- Responsibilities: Runs `yarn build`, creates Vercel Build Output API v3 structure (`.vercel/output/functions/index.func/`)

## Error Handling

**Strategy:** Catch-all with friendly error SVG rendering.

- `src/server.ts` wraps the entire API handler in `try/catch`. Errors are caught, normalized (unknown types wrapped in `Error`), and rendered as a styled error SVG via `renderError()`. HTTP status is always 200 (error displayed visually in the card).
- `renderError()` in `src/common/utils.ts` maps known error messages (502, 503, 429, timeout, network error) to user-friendly strings. Unknown errors pass through as-is.
- `CustomError` class in `src/common/utils.ts` supports typed error categories (`MAX_RETRY`, `USER_NOT_FOUND`) with associated secondary messages.
- `src/fetchContributorStats.ts` and `src/fetchAllContributorStats.ts` throw on non-200 GitHub API responses, missing token, or user not found.
- `action/src/index.ts` uses `core.setFailed()` to report failures to GitHub Actions, with detailed rate-limit diagnostic logging.

## Cross-Cutting Concerns

**Caching:**
- In-memory LRU cache (`lru-cache`) in `src/server.ts` with 100-entry max and 1-hour TTL
- Cache key = JSON-serialized sorted query parameters (excluding `_t` cache-buster)
- Response headers: `X-Cache: HIT|MISS`, `Cache-Control: public, max-age=<seconds>` (client-side, 4h–24h configurable via `cache_seconds`)

**Security:**
- `helmet` middleware for Content Security Policy headers (self + inline styles/scripts for SVG)
- `express-rate-limit`: 100 requests per 15-minute window per IP on `/api`
- `trust proxy: 1` for correct IP detection behind reverse proxies
- GitHub PAT loaded from environment at runtime, never baked into builds

**Compression:**
- `compression` middleware for gzip/deflate response compression

**Rate Limiting (GitHub API):**
- Action-level: `createRateLimitedFetcher()` enforces 100ms minimum interval between REST API requests
- Handles GitHub rate limit responses: reads `retry-after`, `x-ratelimit-reset`, `x-ratelimit-remaining` headers
- Proactively waits when primary rate limit remaining ≤ 1
- Logs diagnostic info on first request (remaining count, expected limit based on auth type)

**Logging:**
- `console.log` for server startup (`src/server.ts`)
- `core.info` / `core.warning` for GitHub Action progress and diagnostics (`action/src/index.ts`)

**Build & Bundling:**
- esbuild bundles `src/server.ts` → `server.js` (CJS, Node platform, external packages, loaders for HTML/CSS/JS template strings)
- esbuild bundles `action/src/index.ts` → `action/dist/index.js` (CJS, separate `tsconfig.action.json`)
- TypeScript path alias `@*` → `./src*` for clean imports
