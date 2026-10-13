# Fourward Website

Landing page for Fourward, recovered from the Emergent preview build and moved to
Vite + React + Tailwind CSS.

## Run locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Where things live

| What | File |
| --- | --- |
| All copy (lanes, case studies, metrics, process, contact info) | `src/data/content.js` |
| Page section order | `src/App.jsx` |
| Individual sections | `src/components/*.jsx` |
| Global styles, animations | `src/index.css` |
| Brand colours and fonts | `tailwind.config.js` |
| Images | `public/images/` |
| SEO title, description, schema | `index.html` |

## Backend (not built yet)

The contact form (`src/components/ContactModal.jsx`) posts to `POST /api/leads`, and
`/admin` (`src/pages/Admin.jsx`) uses `POST /api/auth/login` and `GET /api/briefs`.
Copy `.env.example` to `.env` and set `VITE_BACKEND_URL` once the backend exists.
Until then, submitting the contact form will show an error.

## Shareable preview (GitHub Pages)

Live at https://misrisharang.github.io/fourward-website/

```bash
npm run deploy   # builds and publishes to the gh-pages branch
```

Pushing to `main` does not update the live site — run `npm run deploy` after pushing.

## Deploy (Netlify via GitHub)

`netlify.toml` is already set up: build command `npm run build`, publish directory `dist`,
with a redirect so `/admin` works. Push this folder to a GitHub repo, then import the repo
in Netlify. Add `VITE_BACKEND_URL` under Netlify's environment variables when needed.
