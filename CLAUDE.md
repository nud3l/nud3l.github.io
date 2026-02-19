# CLAUDE.md

## Project

Personal website and blog at harz.dev, built with Docusaurus 3.

## Tech Stack

- **Framework**: Docusaurus 3.9.2
- **Language**: TypeScript, MDX
- **React**: 18
- **Package manager**: pnpm
- **Deployment**: GitHub Pages via GitHub Actions (push to `master` triggers deploy)

## Structure

```
src/
  components/    # React components (HomepageHeader)
  pages/         # Site pages (index.mdx, contact.md, publications.md)
  css/           # Global styles (custom.css with Infima overrides)
blog/            # Blog posts (YYYY-MM-DD-slug.md or YYYY-MM-DD-slug/index.md)
static/img/      # Static assets
.github/workflows/  # CI/CD (deploy.yml, test-deploy.yml)
```

## Commands

- `pnpm start` — dev server
- `pnpm run build` — production build
- `pnpm run serve` — serve production build locally
- `pnpm run typecheck` — TypeScript check

## Conventions

- Blog posts use MDX v3 syntax — no `<url>` autolinks, no `{` in non-math contexts
- Math uses remark-math + rehype-katex (KaTeX)
- Code highlighting supports Solidity and Rust via prism-react-renderer
- Dark mode is default; theme uses purple/magenta color scheme
- External links in markdown must include `https://` protocol
- Config uses async function export for ESM plugin imports (remark-math, rehype-katex)
