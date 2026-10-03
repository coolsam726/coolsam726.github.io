# coolsam726.github.io

Personal developer portfolio for **Sam Maosa** — ecosystem work first, with a clear path to collaborate.

Live: [https://coolsam726.github.io/](https://coolsam726.github.io/)

## Stack

- [Astro](https://astro.build/) (static)
- Tailwind CSS v4
- GitHub Pages via Actions

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Edit content

Project copy and links live in [`src/data/site.ts`](src/data/site.ts). Update ecosystems, open-source entries, socials, sponsors, or contact links there — no CMS required.

Theme tokens use Filament honey (`--filament-honey: #efaf5d`) as primary and `#286291` as accent in [`src/styles/global.css`](src/styles/global.css).

## Deploy

Pushes to `main` build and deploy through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Manual runs are available from the Actions tab (`workflow_dispatch`).

In the GitHub repo settings, Pages must use **GitHub Actions** as the source.
