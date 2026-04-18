<div align="center">
<img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Contribution Card" />
<h2 align="center">GitHub Contribution Card</h2>
<p align="center">Get dynamically generated GitHub contribution stats for your READMEs!</p>
</div>

# Features

- [GitHub Contribution Card](#github-contribution-card)
- [Themes](#themes)

# GitHub Contribution Card

Copy and paste this into your markdown content, and that's it. Simple!

This project, based on [github-readme-stats](https://github.com/anuraghazra/github-readme-stats), shows GitHub
repository contribution stats. Original TypeScript implementation by [@HwangTaehyun](https://github.com/HwangTaehyun).
Refer to [ISSUE#2027](https://github.com/anuraghazra/github-readme-stats/issues/2027).

Change the `?username=` value to your GitHub username.

```md
![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino)
```

### Demo

![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&hide=B)

\_Note: Available ranks are S+ (over 10000), S (over 1000), A+ (over 500), A (over 100), B+ (over 50) and B (over 1).

### Limiting contribution repos to show

To limit contribution repos to show, pass a query parameter `&limit=` with number value.

```md
![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&limit=5)
```

### Hiding rank stats

To hide specific ranks, pass `&hide=` with comma-separated rank values. Use %2B for plus ranks (ex. B+).

```md
![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&hide=B,B%2B)
```

### Showing contributor rank stats

To show contributor ranks, pass `&hide_contributor_rank=false`.

```md
![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&hide=B,B%2B&hide_contributor_rank=false&limit=5)
```

### Configuring the sorting order

Use `&order_by=` with `stars` or `contributions` to specify sorting.

```md
![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&hide=B,B%2B&hide_contributor_rank=false&limit=5&order_by=contributions)
```

### Including all contributions

By default, only recent contributions are shown. Add `&combine_all_yearly_contributions=true` to include all
contributions.

```md
![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&combine_all_yearly_contributions=true)
```

### Themes

Use `&theme=THEME_NAME` parameter to customize the card look.

```md
![FrancoStino's GitHub Contribution stats](https://github-contribution-card.vercel.app/api?username=FrancoStino&hide=B&theme=default)
```

#### All inbuilt themes

dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

## Environment Variables

The API requires a GitHub Personal Access Token (PAT) to fetch contribution data. Environment variables are loaded at **runtime** (not build time) for security.

### Local Development

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your GitHub PAT:

   ```
   GITHUB_PERSONAL_ACCESS_TOKEN=ghp_your_token_here
   ```

3. Build and run:
   ```bash
   npm run build
   npm start
   ```

### Vercel Deployment

Set the `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable in your Vercel project settings:

- Go to your project → Settings → Environment Variables
- Add `GITHUB_PERSONAL_ACCESS_TOKEN` with your token value
- Select all environments (Production, Preview, Development)

### GitHub Action

The GitHub Action receives the token via the `GITHUB_PERSONAL_ACCESS_TOKEN` environment variable set in the workflow. See [action/README.md](./action/README.md) for details.

## Contribution

Contributions are welcome!

Made with :fire: and TypeScript.
