/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/analyse-appels-offres',
        destination: '/analyseur-ia-marches-publics',
        permanent: true,
      },
      {
        source: '/analyse-documents',
        destination: '/recherche-documents-appels-offres',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
