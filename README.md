# Personal Website

My personal site, built with Next.js, TypeScript, and Tailwind CSS.

Live at **https://ryjchen24.github.io/**

## Running it

```bash
npm install
npm run dev     # development server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Files

- `app/page.tsx` — all page content: the intro card, the `projects` array, and the `experience` array
- `app/photo-gallery.tsx` — client component for the multi-image project galleries
- `app/layout.tsx` — page shell and metadata
- `app/globals.css` — Tailwind entry point and base styles
- `public/` — icons and project images

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. `next.config.ts` sets `output: "export"`, so
`npm run build` emits a fully static site into `out/` — that folder is what gets
served, and it is gitignored rather than committed.

## Adding a project

Append an entry to the `projects` array in `app/page.tsx`. Each section's
background flows into the next, so a project's `color` should match the
previous section's ending color (`gradientTo` if set, otherwise `color`).
Set `gallery: true` for entries with more than one image.

## Images

The project screenshots in `public/` are placeholders (`amo1.svg`, `nn1.svg`,
and so on). Replace them with real screenshots and update the `images` paths.
