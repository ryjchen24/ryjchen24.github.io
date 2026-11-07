# Personal Website

My personal site, built with Next.js and TypeScript, styled with plain CSS.

Live at **https://ryjchen24.github.io/**

## Running it

```bash
npm install
npm run dev     # development server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Files

- `app/page.tsx` — all page content: the bio, and the `experience`, `projects`, and `hackathons` arrays
- `app/entry-item.tsx` — client component for one list entry, including its expandable screenshots
- `app/layout.tsx` — page shell, metadata, and the IBM Plex Mono font
- `app/globals.css` — all styles
- `public/` — icons and project images

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. `next.config.ts` sets `output: "export"`, so
`npm run build` emits a fully static site into `out/` — that folder is what gets
served, and it is gitignored rather than committed.

## Adding a project

Append an entry to `experience`, `projects`, or `hackathons` in `app/page.tsx`.
`meta` is the small monospace line above the title, `links` render as the
`GitHub · Website` row, and `images` (optional) appear behind an "Images" link.
