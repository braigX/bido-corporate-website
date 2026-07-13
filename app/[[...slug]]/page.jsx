import { notFound } from 'next/navigation';
import App from '../../src/App';
import { faq, legalPages, productPages, solutionPages } from '../../src/config';

const staticPages = {
  '/': ['Analyseur IA des marchés publics au Maroc — Bido', 'Bido centralise les appels d’offres et bons de commande, recherche dans les dossiers et aide les entreprises marocaines à qualifier chaque marché public.'],
  '/tarifs': ['Tarifs', 'Des offres adaptées aux équipes qui structurent leur veille et leurs réponses aux marchés publics.'],
  '/a-propos': ['À propos', 'Découvrez la vision de Bido pour une commande publique plus lisible et mieux structurée.'],
  '/contact': ['Contact', 'Contactez l’équipe Bido pour toute question produit, partenariat ou sécurité.'],
  '/demo': ['Demander une démo', 'Présentez votre processus et découvrez comment Bido peut accompagner votre équipe.'],
  '/faq': ['Questions fréquentes', 'Réponses aux questions sur Bido, ses données, son intelligence artificielle et son déploiement.'],
  '/ressources': ['Ressources', 'Guides et méthodes pour mieux détecter, décider et répondre aux opportunités publiques.'],
  '/blog': ['Blog', 'Analyses, méthodes et actualités autour de la commande publique au Maroc.'],
  '/ressources/veille-structuree': ['Structurer une veille marchés publics en 6 étapes', 'Une méthode pragmatique pour construire une veille marchés publics exploitable.'],
};

for (const [path, data] of Object.entries(productPages)) staticPages[path] = [data.seoTitle || data.title, data.text];
for (const [path, data] of Object.entries(solutionPages)) staticPages[path] = [data[1], data[2]];
for (const [path, data] of Object.entries(legalPages)) staticPages[path] = [data[0], data[1]];

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(staticPages).map((path) => ({ slug: path === '/' ? [] : path.slice(1).split('/') }));
}

function resolvePath(slug = []) {
  return slug.length ? `/${slug.join('/')}` : '/';
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const pathname = resolvePath(slug);
  const entry = staticPages[pathname];
  if (!entry) return {};
  const [title, description] = entry;
  return {
    title: pathname === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: pathname },
    openGraph: { title, description, url: pathname },
  };
}

export default async function Page({ params }) {
  const { slug = [] } = await params;
  const pathname = resolvePath(slug);
  if (!staticPages[pathname]) notFound();
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: pathname === '/' ? [] : [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://bido.ma/' },
      { '@type': 'ListItem', position: 2, name: staticPages[pathname][0], item: `https://bido.ma${pathname}` },
    ],
  };
  const faqSchema = pathname === '/faq' ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  } : null;
  return <>
    {pathname !== '/' && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <App initialPath={pathname} />
  </>;
}
