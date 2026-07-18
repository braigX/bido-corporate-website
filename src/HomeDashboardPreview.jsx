'use client';

const views = {
  hero: { src:'/product/home-hero.webp' },
  discovery: { src:'/product/home-discovery.webp' },
  documents: { src:'/product/home-documents.webp' },
};

const labels = {
  fr:{ hero:'Opportunités en direct', discovery:'Pipeline d’opportunités', documents:'Dossier et analyse IA' },
  en:{ hero:'Live opportunities', discovery:'Opportunity pipeline', documents:'Tender file and AI analysis' },
  ar:{ hero:'الفرص المباشرة', discovery:'محفظة الفرص', documents:'ملف الصفقة وتحليل الذكاء الاصطناعي' }
};

export default function HomeDashboardPreview({ variant, locale='fr' }) {
  const view=views[variant]; const label=labels[locale][variant];
  return <figure className={`home-dashboard-shot shot-${variant}`}><img src={view.src} alt={label}/></figure>;
}
