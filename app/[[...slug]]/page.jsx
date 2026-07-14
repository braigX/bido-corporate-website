import { notFound, redirect } from 'next/navigation';
import App from '../../src/App';
import { legalPages, productPages, solutionPages } from '../../src/config';
import { localizedContent, localizedHref } from '../../src/localized-content';

const staticPages = {
  '/': ['Bido — Intelligence des marchés publics au Maroc', 'Détectez, qualifiez et analysez les opportunités de la commande publique avec méthode.'],
  '/tarifs': ['Tarifs', 'Des offres adaptées aux équipes qui structurent leur veille et leurs réponses aux marchés publics.'],
  '/a-propos': ['À propos', 'Découvrez la vision de Bido pour une commande publique plus lisible et mieux structurée.'],
  '/contact': ['Contact', 'Contactez l’équipe Bido pour toute question produit, partenariat ou sécurité.'],
  '/demo': ['Demander une démo', 'Présentez votre processus et découvrez comment Bido peut accompagner votre équipe.'],
  '/faq': ['Questions fréquentes', 'Réponses aux questions sur Bido, ses données, son intelligence artificielle et son déploiement.'],
  '/ressources': ['Ressources', 'Guides et méthodes pour mieux détecter, décider et répondre aux opportunités publiques.'],
  '/blog': ['Blog', 'Analyses, méthodes et actualités autour de la commande publique au Maroc.'],
  '/ressources/veille-structuree': ['Structurer une veille marchés publics en 6 étapes', 'Une méthode pragmatique pour construire une veille marchés publics exploitable.'],
  '/ressources/article': ['Guide Bido', 'Méthodes opérationnelles pour les équipes de réponse aux marchés publics.'],
};

for (const [path, data] of Object.entries(productPages)) staticPages[path] = [data.title, data.text];
for (const [path, data] of Object.entries(solutionPages)) staticPages[path] = [data[1], data[2]];
for (const [path, data] of Object.entries(legalPages)) staticPages[path] = [data[0], data[1]];

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  const paths = Object.keys(staticPages);
  return [
    ...paths.map((path) => ({ slug: path === '/' ? [] : path.slice(1).split('/') })),
    ...['en', 'ar'].flatMap((locale) => paths.map((path) => ({ slug: path === '/' ? [locale] : [locale, ...path.slice(1).split('/')] }))),
  ];
}

function resolvePath(slug = []) {
  return slug.length ? `/${slug.join('/')}` : '/';
}

function resolveLocale(slug = []) {
  if (slug[0] === 'en' || slug[0] === 'ar') return { locale: slug[0], pathname: resolvePath(slug.slice(1)) };
  return { locale: 'fr', pathname: resolvePath(slug) };
}

function localizedEntry(locale, pathname) {
  if (locale === 'fr') return staticPages[pathname];
  const content = localizedContent[locale];
  if (content.products[pathname]) return [content.products[pathname][1], content.products[pathname][2]];
  if (content.solutions[pathname]) return [content.solutions[pathname][1], content.solutions[pathname][2]];
  if (content.legal[pathname]) return [content.legal[pathname][0], content.legal[pathname][1]];
  const core = {
    '/': [content.home.hero, content.home.sub], '/tarifs': [content.pricing.title, content.pricing.text],
    '/a-propos': [content.about.title, content.about.text], '/contact': [content.contact.contactTitle, content.contact.contactText],
    '/demo': [content.contact.demoTitle, content.contact.demoText],
    '/faq': [content.common.faq, locale === 'ar' ? 'أجوبة واضحة عن المنتج والبيانات والذكاء الاصطناعي.' : 'Clear answers about the product, data and artificial intelligence.'],
    '/ressources': [content.resources.title, content.resources.text], '/blog': [content.resources.title, content.resources.text],
    '/ressources/veille-structuree': [content.resources.cards[0][1], content.resources.cards[0][2]],
    '/ressources/article': [content.resources.cards[0][1], content.resources.cards[0][2]],
  };
  return core[pathname];
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const { locale, pathname } = resolveLocale(slug);
  const entry = localizedEntry(locale, pathname);
  if (!entry) return {};
  const [title, description] = entry;
  const canonical = localizedHref(locale, pathname);
  return {
    title: pathname === '/' ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: { 'fr-MA': localizedHref('fr', pathname), 'en-MA': localizedHref('en', pathname), 'ar-MA': localizedHref('ar', pathname), 'x-default': localizedHref('fr', pathname) },
    },
    openGraph: { title, description, url: canonical, locale: locale === 'ar' ? 'ar_MA' : locale === 'en' ? 'en_MA' : 'fr_MA' },
  };
}

export default async function Page({ params }) {
  const { slug = [] } = await params;
  const { locale, pathname } = resolveLocale(slug);
  if (!staticPages[pathname]) notFound();
  if (pathname === '/demo') redirect('https://app.bido.ma/');
  return <App initialPath={pathname} initialLocale={locale} />;
}
