import { legalPages, productPages, solutionPages } from '../../src/config';
import { localizedHref } from '../../src/localized-content';
import { blogSlugs } from '../../src/blog-content';

export const dynamic = 'force-static';

const baseUrl = 'https://bido.ma';
const lastModified = '2026-07-14';
const corePaths = ['/', '/tarifs', '/a-propos', '/contact', '/faq', '/ressources', '/blog', '/ressources/veille-structuree', ...blogSlugs.map((slug)=>`/blog/${slug}`)];

function escapeXml(value) {
  return value.replace(/[<>&"']/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[character]);
}

function absolute(locale, path) {
  const localized = localizedHref(locale, path);
  return `${baseUrl}${localized === '/' ? '' : localized}`;
}

function urlEntry(locale, path) {
  const frequency = path === '/' ? 'weekly' : 'monthly';
  const priority = path === '/' ? '1.0' : path === '/demo' ? '0.9' : '0.7';
  const alternates = [
    ['fr-MA', absolute('fr', path)], ['en-MA', absolute('en', path)],
    ['ar-MA', absolute('ar', path)], ['x-default', absolute('fr', path)],
  ].map(([language, url]) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${escapeXml(url)}" />`).join('\n');

  return `  <url>\n    <loc>${escapeXml(absolute(locale, path))}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${frequency}</changefreq>\n    <priority>${priority}</priority>\n${alternates}\n  </url>`;
}

export async function GET() {
  const paths = [...new Set([...corePaths, ...Object.keys(productPages), ...Object.keys(solutionPages), ...Object.keys(legalPages)])];
  const entries = paths.flatMap((path) => ['fr', 'en', 'ar'].map((locale) => urlEntry(locale, path))).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
