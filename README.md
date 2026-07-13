# Bido.ma — Corporate website

Production-oriented public website prototype for Bido, a Moroccan public-procurement intelligence platform.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`). No database, API key, environment variable, or backend is required.

## Production build

```bash
npm run build
npm run preview
```

The static production output is written to `dist/`. Configure your web server or static host to fall back to `index.html` for application routes.

## Included

- responsive homepage and product UI mockups;
- product, solution, sector, pricing, about, contact, demo, FAQ, resource, article, legal and error routes;
- French core content with English and Arabic hero/local navigation support;
- RTL layout direction switching;
- accessible navigation, semantic sections, keyboard-friendly controls and visible focus states;
- local-only form success states (no fake data submission);
- granular cookie-consent demonstration stored in `localStorage`;
- independent-platform and official-source verification disclaimers.

## Configuration before launch

Update `src/config.js` with the final company identity, email addresses, telephone number, authentication URLs, status URL, prices and approved product claims. The legal text is a structured pre-launch draft and requires professional validation.

Connect contact/demo/newsletter forms to a secure backend endpoint with server-side validation, spam protection, rate limiting, consent logging and an appropriate privacy notice. Add analytics only after consent and only through a centralized adapter.

## Important product disclaimer

Bido.ma is an independent technology platform and is not affiliated with or endorsed by any public authority. Users remain responsible for verifying official tender documents, deadlines, eligibility conditions, and submission requirements through the relevant official sources.
