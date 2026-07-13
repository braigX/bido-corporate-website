import '../src/styles.css';

const siteUrl = 'https://bido.ma';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Analyseur IA des marchés publics au Maroc — Bido',
    template: '%s | Bido.ma',
  },
  description: 'Bido centralise les appels d’offres et bons de commande, recherche dans les dossiers et aide les entreprises marocaines à qualifier chaque marché public.',
  applicationName: 'Bido',
  authors: [{ name: 'Bido.ma', url: siteUrl }],
  creator: 'Bido.ma',
  publisher: 'Bido.ma',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: siteUrl,
    siteName: 'Bido.ma',
    title: 'Analyseur IA des marchés publics au Maroc — Bido',
    description: 'Recherchez, qualifiez et analysez les appels d’offres et bons de commande avec une IA reliée aux dossiers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Analyseur IA des marchés publics au Maroc — Bido',
    description: 'Une plateforme de veille et d’analyse des opportunités publiques conçue pour les entreprises marocaines.',
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bido',
  url: siteUrl,
  description: 'Plateforme marocaine indépendante d’intelligence des marchés publics.',
  address: { '@type': 'PostalAddress', addressLocality: 'Agadir', addressCountry: 'MA' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Aller au contenu</a>
        {children}
      </body>
    </html>
  );
}
