# Codebase Structure

## Directory Layout

```
github-contribution-card/
├── action/                   # Docker-based GitHub Action
│   ├── src/
│   │   └── index.ts          # Action entry point (rate-limited fetcher, SVG generation)
│   ├── dist/                 # Built action bundle
│   ├── Dockerfile            # Multi-stage Docker build
│   ├── action.yml            # Action metadata, inputs, outputs
│   ├── README.md             # Action-specific documentation
│   └── example-workflow.yml  # Example GitHub Actions workflow
├── api/
│   └── demo/                 # Demo page source files
│       ├── template.html     # HTML template with placeholders
│       ├── styles.css        # Demo page styles
│       └── client.script     # Demo page client-side JS
├── images/
│   ├── demo.gif              # Animated demo for README
│   └── logo.svg              # Project logo
├── scripts/
│   ├── gen-demo.ts           # Generates src/demo-content.ts from api/demo/
│   └── vercel-build.sh       # Vercel Build Output API v3 build script
├── src/
│   ├── cards/
│   │   ├── stats-card.ts     # Main card renderer (data → SVG orchestration)
│   │   └── types.d.ts        # TypeScript type definitions for card options
│   ├── common/
│   │   ├── Card.ts           # SVG card skeleton class (title, gradient, render)
│   │   ├── I18n.ts           # Internationalization class (locale lookup)
│   │   └── utils.ts          # Shared utilities (encode, measure, color, layout, errors)
│   ├── server.ts             # Express HTTP server (routes, caching, middleware)
│   ├── fetchContributorStats.ts   # GitHub GraphQL: current-year contributions
│   ├── fetchAllContributorStats.ts # GitHub GraphQL: all-years with time-range splitting
│   ├── calculateRank.ts      # Star-based rank computation (S+ → B)
│   ├── calculateContributionRank.ts # Contribution percentile rank computation
│   ├── getStyles.ts          # CSS/animation generation for SVG
│   └── translations.ts       # Locale string dictionaries (20+ languages)
├── svg/                      # Static SVG assets (GitHub, star, PR icons)
├── themes/
│   └── index.ts              # 60+ color theme definitions
├── types/
│   └── compression.d.ts      # Ambient type declaration for compression module
├── .env.example              # Environment variable template (safe to commit)
├── .github/
│   └── workflows/
│       ├── merge-branch.yml  # Branch merge workflow
│       └── release.yml       # Release workflow
├── getContributors.ts        # REST API: fetch repo contributor list
├── package.json              # Dependencies and build scripts
├── tsconfig.json             # TypeScript config (paths: @* → ./src*)
├── tsconfig.action.json      # TypeScript config for GitHub Action build
├── vercel.json               # Vercel deployment config
├── server.js                 # esbuild output (bundled server, generated)
├── CHANGELOG.md              # Version history
├── README.md                 # Project documentation
├── LICENSE                   # MIT License
├── SECURITY.md               # Security policy
└── CODEOWNERS                # GitHub code ownership
```

## Directory Purposes

**`action/`:**
- Purpose: Self-contained GitHub Action with Docker packaging
- Contains: Action entry point, Dockerfile, action metadata, build output
- Key files: `action/src/index.ts` (rate-limited fetcher + SVG generation), `action/action.yml` (inputs/outputs definition), `action/Dockerfile` (multi-stage build cloning full repo)

**`api/demo/`:**
- Purpose: Raw demo page source files (HTML, CSS, JS) that get bundled into the server
- Contains: Template HTML with `/*PLACEHOLDER_CSS*/` / `<!--PLACEHOLDER_JS-->` markers, styles, client script
- Key files: `api/demo/template.html`, `api/demo/styles.css`, `api/demo/client.script`

**`scripts/`:**
- Purpose: Build-time tooling scripts
- Contains: Demo content generator, Vercel build script
- Key files: `scripts/gen-demo.ts` (reads `api/demo/` → generates `src/demo-content.ts`), `scripts/vercel-build.sh` (creates Vercel Build Output API v3 structure)

**`src/`:**
- Purpose: Core application source code
- Contains: Server, data fetching, rendering, utilities, translations
- Key files: See "Key File Locations" below

**`src/cards/`:**
- Purpose: Card type-specific rendering logic
- Contains: Stats card renderer, TypeScript type definitions for all card options
- Key files: `src/cards/stats-card.ts` (main render function), `src/cards/types.d.ts` (option types)

**`src/common/`:**
- Purpose: Shared infrastructure used across the entire codebase
- Contains: Base Card class, I18n class, utility functions
- Key files: `src/common/Card.ts` (SVG skeleton builder), `src/common/I18n.ts` (locale engine), `src/common/utils.ts` (color parsing, text measurement, error rendering, flex layout)

**`themes/`:**
- Purpose: All built-in color theme definitions
- Contains: Single `index.ts` exporting a `themes` object with 60+ named themes
- Key files: `themes/index.ts`

**`types/`:**
- Purpose: Ambient TypeScript type declarations for untyped dependencies
- Contains: Module declarations
- Key files: `types/compression.d.ts`

**`svg/`:**
- Purpose: Static SVG icon assets used in card rendering
- Contains: Icon SVGs for GitHub, pull request, and star symbols
- Key files: `svg/github-svgrepo-com.svg`, `svg/git-pull-request-svgrepo-com.svg`, `svg/star-svgrepo-com.svg`

## Key File Locations

**Entry Points:**
- `src/server.ts`: Express HTTP server — main API entry point (Vercel + local dev)
- `action/src/index.ts`: GitHub Action entry point (Docker runner)
- `scripts/gen-demo.ts`: Build-time script that generates demo content
- `scripts/vercel-build.sh`: Build-time script for Vercel deployment

**Configuration:**
- `package.json`: Dependencies, build scripts (`build`, `build:action`, `vercel-build`, `dev`, `start`)
- `tsconfig.json`: TypeScript config with `@*` path alias to `./src*`
- `tsconfig.action.json`: TypeScript config for Action build
- `vercel.json`: Vercel deployment settings (`yarn vercel-build`)
- `.env.example`: Environment variable template (`GITHUB_PERSONAL_ACCESS_TOKEN`)
- `.eslintrc.json`: ESLint configuration
- `.prettierrc.json`: Prettier configuration

**Core Logic:**
- `src/server.ts`: HTTP routes, caching (LRU), middleware (helmet, compression, rate limiting), demo page rendering
- `src/fetchContributorStats.ts`: GraphQL query for current-year `repositoriesContributedTo`
- `src/fetchAllContributorStats.ts`: GraphQL query for all-years `contributionsCollection` with recursive time-range splitting (max depth 4, splits at 100-repo limit)
- `getContributors.ts`: REST API call for per-repo contributor list (used for contribution rank)
- `src/calculateRank.ts`: Star count → rank string (S+ ≥10000, S ≥1000, A+ ≥500, A ≥100, B+ ≥50, B ≥1)
- `src/calculateContributionRank.ts`: Contribution percentile → rank string (S+ ≥90%, S ≥80%, A+ ≥70%, A ≥60%, B+ ≥50%, B <50%)
- `src/cards/stats-card.ts`: Data transformation, layout, and SVG generation orchestration
- `src/common/Card.ts`: SVG card skeleton — `<svg>`, `<rect>`, title/subtitle rendering, gradient support, accessibility labels, animation control
- `src/common/utils.ts`: `encodeHTML`, `measureText`, `kFormatter`, `getCardColors` (theme → color cascade), `flexLayout` (SVG layout), `renderError` (error SVG), `getImageBase64FromURL`, `parseBoolean`, `parseArray`, `clampValue`
- `src/getStyles.ts`: CSS string generation — animations, rank circles, stat text, Firefox font-size override
- `src/translations.ts`: Locale string dictionaries for stat card, repo card, lang card, and wakatime card titles
- `src/common/I18n.ts`: `I18n` class with `t(key)` lookup, locale → fallback to `en`
- `themes/index.ts`: 60+ theme definitions as `{title_color, icon_color, text_color, bg_color, border_color?}` objects
- `src/cards/types.d.ts`: TypeScript types — `CommonOptions`, `StatCardOptions`, `RepoCardOptions`, `TopLangOptions`, `WakaTimeOptions`

**Generated:**
- `src/demo-content.ts`: Auto-generated by `scripts/gen-demo.ts` from `api/demo/` files (exports `demoTemplate`, `demoStyles`, `demoScript` as string constants)
- `server.js`: esbuild output bundle (bundled from `src/server.ts`)
- `action/dist/index.js`: esbuild output bundle (bundled from `action/src/index.ts`)

**Tests:**
- No test suite currently exists (see `package.json` `"test": "echo \"Error: no test specified\" && exit 1"`)

## Naming Conventions

**Files:** lowercase with hyphens for multi-word names (e.g., `fetchContributorStats.ts`, `calculateContributionRank.ts`, `stats-card.ts`, `gen-demo.ts`)
**Directories:** lowercase (e.g., `cards/`, `common/`, `action/`, `scripts/`)
**Exports:** camelCase for functions and variables (e.g., `fetchContributorStats`, `calculateRank`), PascalCase for classes (e.g., `Card`, `I18n`, `CustomError`)
**Imports:** `@/` path alias for `src/` imports (e.g., `@/common/utils`, `@/cards/stats-card`), relative paths for cross-boundary imports from root (e.g., `../../themes`, `../../getContributors`)

## Build Pipeline

The build process involves two steps:

1. **`scripts/gen-demo.ts`**: Reads raw HTML/CSS/JS from `api/demo/`, writes `src/demo-content.ts` with exported string constants
2. **esbuild**: Bundles `src/server.ts` → `server.js` (CJS, Node, external packages, HTML/CSS/JS loaders, footer `module.exports = app` for Vercel compatibility)

For the GitHub Action:
1. **`scripts/gen-demo.ts`** (same step, shared with server build)
2. **esbuild**: Bundles `action/src/index.ts` → `action/dist/index.js` (CJS, Node, uses `tsconfig.action.json`)

For Vercel deployment:
1. `yarn vercel-build` → runs `yarn build` + `scripts/vercel-build.sh` → creates `.vercel/output/functions/index.func/` with Node.js 22.x runtime config

## Where to Add New Code

**New card type (e.g., "lang-card"):** `src/cards/lang-card.ts` — follow the pattern in `src/cards/stats-card.ts`; define options in `src/cards/types.d.ts`; register locale strings in `src/translations.ts`

**New data fetcher:** `src/fetch[new-data].ts` — follow the GraphQL pattern in `src/fetchContributorStats.ts`; read token from `process.env.GITHUB_PERSONAL_ACCESS_TOKEN`; throw on missing token or API errors

**New rank calculation:** `src/calculate[new]Rank.ts` — pure function, no external dependencies

**New theme:** Add entry to `themes/index.ts` — provide `title_color`, `icon_color`, `text_color`, `bg_color` (hex strings without `#`); optionally `border_color`

**New locale:** Add entries to all locale dictionaries in `src/translations.ts` — every key must have the new locale code; locale is auto-detected from `availableLocales`

**New API endpoint:** Add route in `src/server.ts` — use existing middleware stack (helmet, compression, rate limiter at `/api`); follow the existing `app.get('/api', ...)` pattern

**New GitHub Action input:** Add to `action/action.yml` inputs section; read with `core.getInput()` in `action/src/index.ts`

**New utility function:** `src/common/utils.ts` — follow existing naming; keep pure where possible

**New shared type:** `src/cards/types.d.ts` — extend `CommonOptions` for common fields

**Tests:** Co-locate as `*.test.ts` next to source files (no test runner currently configured)

**Demo page changes:** Edit raw files in `api/demo/` (`template.html`, `styles.css`, `client.script`); run `yarn build` which auto-generates `src/demo-content.ts`
