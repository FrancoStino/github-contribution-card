<div align="center">
  <img width="300" src="images/logo.svg" alt="GitHub Contribution Card Logo" />
  <h1>GitHub Contribution Card</h1>
  <p>Dynamic SVG cards showing your GitHub repository contribution stats</p>

[![Release](https://img.shields.io/github/v/release/FrancoStino/github-contribution-card?style=for-the-badge)](https://github.com/FrancoStino/github-contribution-card/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![zread](https://img.shields.io/badge/Documentation-_.svg?style=for-the-badge&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/FrancoStino/github-contribution-card)
<br />
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FFrancoStino%2Fgithub-contribution-card&env=GITHUB_PERSONAL_ACCESS_TOKEN)

</div>

---

## 🚀 Quick Start

Paste this into your Markdown — that's it:

```md
![My GitHub Contribution Stats](https://github-contribution-card.vercel.app/api?username=YOUR_USERNAME)
```

<div align="center">

![Demo](https://github-contribution-card.vercel.app/api?username=anuraghazra)

</div>

> **Star Ranks**: S+ (10 000+) · S (1 000+) · A+ (500+) · A (100+) · B+ (50+) · B (1+)
> **Contributor Ranks**: S+ (90+) · S (80+) · A+ (70+) · A (60+) · B+ (50+) · B (1+)

---

## ✨ Features

- 📊 **Repository contribution stats** — stars, contributions, and ranks per repo
- 🎨 **40+ built-in themes** — or fully custom colors
- 🌍 **20+ locales** — auto-translated stat card titles
- 🐳 **Docker GitHub Action** — no timeout limits, built-in rate limiting
- ⚡ **Vercel API** — instant SVG generation via HTTP
- 🛡️ **Security-first** — helmet headers, rate limiting, LRU cache
- 📐 **Customizable** — colors, borders, titles, hidden fields, sorting, limits

---

## 📊 API Reference

```
GET https://github-contribution-card.vercel.app/api?username=YOUR_USERNAME
```

| Parameter                          | Type    | Default     | Description                                   |
|------------------------------------|---------|-------------|-----------------------------------------------|
| `username`                         | string  | —           | **(required)** GitHub username                |
| `hide`                             | string  | `""`        | Comma-separated ranks to hide (e.g. `B,B%2B`) |
| `hide_title`                       | boolean | `false`     | Hide the card title                           |
| `hide_border`                      | boolean | `false`     | Hide the card border                          |
| `hide_contributor_rank`            | boolean | `true`      | Hide contributor rank column                  |
| `order_by`                         | string  | `"stars"`   | Sort by `stars` or `contributions`            |
| `limit`                            | number  | `-1`        | Max repos to show (`-1` = all)                |
| `theme`                            | string  | `"default"` | Theme name (see [Themes](#-themes))           |
| `custom_title`                     | string  | —           | Override the card title text                  |
| `title_color`                      | hex     | —           | Title text color (e.g. `ff6b6b`)              |
| `text_color`                       | hex     | —           | Body text color                               |
| `icon_color`                       | hex     | —           | Icon color                                    |
| `bg_color`                         | hex     | —           | Background color                              |
| `border_color`                     | hex     | —           | Border color                                  |
| `border_radius`                    | number  | —           | Border radius in pixels                       |
| `line_height`                      | number  | —           | Line height between rows                      |
| `cache_seconds`                    | number  | —           | Override cache TTL in seconds                 |
| `locale`                           | string  | `"en"`      | Language code (see [Locales](#-locales))      |
| `combine_all_yearly_contributions` | boolean | `false`     | Include contributions from all years          |

### Examples

**Limit to 5 repos, sorted by contributions:**

```md
![Stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&limit=5&order_by=contributions)
```

**Show contributor rank, hide B repos:**

```md
![Stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&hide=B&hide_contributor_rank=false)
```

**All-time contributions:**

```md
![Stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&combine_all_yearly_contributions=true)
```

**Custom theme:**

```md
![Stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&theme=tokyonight)
```

---

## 🎨 Themes

Use `&theme=THEME_NAME` to apply a built-in theme:

```md
![Stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&theme=dracula)
```

<details>
<summary><strong>View all 40+ themes</strong></summary>

|                        |                  |                      |                       |                    |
|------------------------|------------------|----------------------|-----------------------|--------------------|
| `default`              | `transparent`    | `shadow_red`         | `shadow_green`        | `shadow_blue`      |
| `dark`                 | `radical`        | `merko`              | `gruvbox`             | `gruvbox_light`    |
| `tokyonight`           | `onedark`        | `cobalt`             | `synthwave`           | `highcontrast`     |
| `dracula`              | `prussian`       | `monokai`            | `vue`                 | `vue-dark`         |
| `shades-of-purple`     | `nightowl`       | `buefy`              | `blue-green`          | `algolia`          |
| `great-gatsby`         | `darcula`        | `bear`               | `solarized-dark`      | `solarized-light`  |
| `chartreuse-dark`      | `nord`           | `gotham`             | `material-palenight`  | `graywhite`        |
| `vision-friendly-dark` | `ayu-mirage`     | `midnight-purple`    | `calm`                | `flag-india`       |
| `omni`                 | `react`          | `jolly`              | `maroongold`          | `yeblu`            |
| `blueberry`            | `slateorange`    | `kacho_ga`           | `outrun`              | `ocean_dark`       |
| `city_lights`          | `github_dark`    | `github_dark_dimmed` | `discord_old_blurple` | `aura_dark`        |
| `panda`                | `noctis_minimus` | `cobalt2`            | `swift`               | `aura`             |
| `apprentice`           | `moltack`        | `codeSTACKr`         | `rose_pine`           | `catppuccin_latte` |
| `catppuccin_mocha`     | `date_night`     | `one_dark_pro`       | `rose`                | `holi`             |
| `neon`                 | `blue_navy`      | `calm_pink`          | `ambient_gradient`    |                    |

</details>

You can also customize individual colors with `&title_color=`, `&text_color=`, `&icon_color=`, `&bg_color=`, and
`&border_color=`.

---

## 🌍 Locales

Set `&locale=CODE` to translate the card title:

```md
![Stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&locale=it)
```

<details>
<summary><strong>View all supported locales</strong></summary>

| Code    | Language         | Code    | Language       |
|---------|------------------|---------|----------------|
| `ar`    | العربية          | `cn`    | 中文 (简体)        |
| `zh-tw` | 中文 (繁體)          | `cs`    | Čeština        |
| `de`    | Deutsch          | `en`    | English        |
| `bn`    | বাংলা            | `es`    | Español        |
| `fr`    | Français         | `hu`    | Magyar         |
| `it`    | Italiano         | `ja`    | 日本語            |
| `kr`    | 한국어              | `nl`    | Nederlands     |
| `pt-pt` | Português (PT)   | `pt-br` | Português (BR) |
| `np`    | नेपाली           | `el`    | Ελληνικά       |
| `ru`    | Русский          | `uk-ua` | Українська     |
| `id`    | Bahasa Indonesia | `ml`    | മലയാളം         |
| `my`    | Bahasa Melayu    | `sk`    | Slovenčina     |

</details>

---

## 🐳 GitHub Action

Use the Docker-based GitHub Action when you need:

- **No Vercel timeout** — processes hundreds of repos across many years
- **Rate limit awareness** — built-in delay between API calls
- **SVG file output** — commit the generated card to your repo

### Why Docker Action?

The Vercel-hosted API has a timeout limit. For users with 15+ years of contributions across 300+ repositories,
combinations like `combine_all_yearly_contributions=true` + `hide_contributor_rank=false` trigger hundreds of API calls
that exceed Vercel's timeout. The Docker Action runs in GitHub Actions with **no timeout constraints** and includes
built-in rate limiting.

### Usage

```yaml
name: Update Contribution Card
on:
  schedule:
    - cron: '0 0 * * *' # Daily at midnight
  workflow_dispatch:

jobs:
  update-stats:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - uses: actions/checkout@v4

      - name: Generate Contribution Card SVG
        uses: FrancoStino/github-contribution-card/action@main
        env:
          GITHUB_PERSONAL_ACCESS_TOKEN: ${{ secrets.GITHUB_PERSONAL_ACCESS_TOKEN }}
        with:
          username: YOUR_USERNAME
          output-file: github-contribution-card.svg
          combine-all-yearly-contributions: 'true'
          theme: default
          rate-limit-delay-ms: '100'

      - uses: actions4git/add-commit-push@v1
        continue-on-error: true
```

### Action Inputs

| Input                              | Description                    | Required | Default                        |
|------------------------------------|--------------------------------|----------|--------------------------------|
| `username`                         | GitHub username                | **Yes**  | —                              |
| `output-file`                      | SVG output file path           | No       | `github-contribution-card.svg` |
| `combine-all-yearly-contributions` | Include all years              | No       | `true`                         |
| `hide-contributor-rank`            | Hide contributor rank          | No       | `true`                         |
| `hide`                             | Comma-separated ranks to hide  | No       | `""`                           |
| `order-by`                         | `stars` or `contributions`     | No       | `stars`                        |
| `limit`                            | Max repos to show (`-1` = all) | No       | `-1`                           |
| `theme`                            | Theme name                     | No       | `default`                      |
| `title-color`                      | Title hex color                | No       | —                              |
| `text-color`                       | Text hex color                 | No       | —                              |
| `icon-color`                       | Icon hex color                 | No       | —                              |
| `bg-color`                         | Background hex color           | No       | —                              |
| `border-color`                     | Border hex color               | No       | —                              |
| `border-radius`                    | Border radius (px)             | No       | —                              |
| `hide-title`                       | Hide the card title            | No       | `false`                        |
| `hide-border`                      | Hide the card border           | No       | `false`                        |
| `custom-title`                     | Custom title text              | No       | —                              |
| `locale`                           | Language code                  | No       | —                              |
| `rate-limit-delay-ms`              | Delay between API calls        | No       | `100`                          |

### Action Output

| Output     | Description                    |
|------------|--------------------------------|
| `svg-path` | Path to the generated SVG file |

> For more details, see [action/README.md](./action/README.md).

---

## 🛡️ Self-Hosting

### Vercel (recommended)

1. Fork this repository
2. Import in [Vercel](https://vercel.com/)
3. Set the `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable in **Settings → Environment Variables**
4. Deploy — your API is live at `https://<project>.vercel.app/api`

### Local Development

```bash
# Install dependencies
yarn install

# Copy environment template
cp .env.example .env
# Edit .env and add your GitHub PAT

# Build and run
yarn build:prod
yarn start
```

The server starts at `http://localhost:9999`.

### Build Scripts

| Script              | Description                             |
|---------------------|-----------------------------------------|
| `yarn build`        | Development build                       |
| `yarn build:prod`   | Production build (minified, to `dist/`) |
| `yarn build:action` | Production build for the GitHub Action  |
| `yarn start`        | Build + run production server           |

---

## 🔑 Environment Variables

| Variable                       | Description               | Required                       |
|--------------------------------|---------------------------|--------------------------------|
| `GITHUB_PERSONAL_ACCESS_TOKEN` | GitHub PAT for API access | Yes (API) / via `env` (Action) |

> **Security**: Tokens are loaded at **runtime**, never baked into builds.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## Credits

Based on [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
by [@anuraghazra](https://github.com/anuraghazra). Original TypeScript implementation
by [@HwangTaehyun](https://github.com/HwangTaehyun).
