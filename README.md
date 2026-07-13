# Bido.ma — Corporate website

Server-rendered public website for Bido, a Moroccan public-procurement intelligence platform. Built with the Next.js App Router.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. No database, API key, environment variable, or external backend is required.

## Production build

```bash
npm run build
npm start
```

Next.js pre-renders the marketing routes into complete HTML during the production build and serves them through its standalone Node.js output. Search engines receive page content and route-specific metadata without waiting for client-side JavaScript.

## Included

- responsive homepage and product UI mockups;
- server-rendered HTML for every public route;
- route-specific titles, descriptions, canonical URLs and Open Graph metadata;
- generated `sitemap.xml`, `robots.txt` and Organization structured data;
- product, solution, sector, pricing, about, contact, demo, FAQ, resource, article, legal and error routes;
- French core content with English and Arabic hero/local navigation support;
- RTL layout direction switching;
- accessible navigation, semantic sections, keyboard-friendly controls and visible focus states;
- local-only form success states (no fake data submission);
- granular cookie-consent demonstration stored in `localStorage`;
- independent-platform and official-source verification disclaimers.

## Configuration before launch

Update `src/config.js` with the final company identity, email addresses, telephone number, authentication URLs, status URL, prices and approved product claims. Update the production domain in `app/layout.jsx`, `app/sitemap.js` and `app/robots.js` if it changes. The legal text is a structured pre-launch draft and requires professional validation.

Connect contact/demo/newsletter forms to a secure backend endpoint with server-side validation, spam protection, rate limiting, consent logging and an appropriate privacy notice. Add analytics only after consent and only through a centralized adapter.

## Important product disclaimer

Bido.ma is an independent technology platform and is not affiliated with or endorsed by any public authority. Users remain responsible for verifying official tender documents, deadlines, eligibility conditions, and submission requirements through the relevant official sources.
