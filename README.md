# CardioDiet Evidence Finder

A self-contained, static cardiovascular nutrition reference with searchable foods,
beverages, nutrients and dietary patterns, category filters, expandable evidence,
and a relative-risk evidence plot.

## Local development

Use Node.js 22 or later. No packages, API keys or backend services are required.

```sh
npm run dev
```

Open http://localhost:3000. After editing `diet-cvd-evidence-app.html`, restart
`npm run dev` to rebuild. `npm run build` generates the deployable `public/` directory.

## Vercel

Import `shivesh2334-ai/Diet-cvd` and use the repository root as Root Directory.
`vercel.json` selects the static build (`npm run build`) and output (`public`).
Use Framework Preset **Other** if selecting it manually. No environment variables
or install step are needed. Both `/` and `/diet-cvd-evidence-app.html` serve the app.

The original HTML remains the source of truth; its content and functionality
are preserved. Clinical content and guideline claims have not been independently
reviewed as part of deployment preparation.
