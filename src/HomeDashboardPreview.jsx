'use client';

import { Sparkles } from 'lucide-react';

const views = {
  hero: { src:'/product/opportunities.webp', position:'center top' },
  discovery: { src:'/product/opportunity-grid.webp', position:'center center' },
  documents: { src:'/product/opportunity-details.webp', position:'center center' },
};

const labels = {
  fr:{ hero:'Opportunités en direct', discovery:'Pipeline d’opportunités', documents:'Dossier et analyse IA' },
  en:{ hero:'Live opportunities', discovery:'Opportunity pipeline', documents:'Tender file and AI analysis' },
  ar:{ hero:'الفرص المباشرة', discovery:'محفظة الفرص', documents:'ملف الصفقة وتحليل الذكاء الاصطناعي' }
};

export default function HomeDashboardPreview({ variant, locale='fr' }) {
  const view=views[variant]; const label=labels[locale][variant];
  return <figure className={`home-dashboard-shot shot-${variant}`}><div className="shot-toolbar"><div><i/><i/><i/></div><span>app.bido.ma</span><b><Sparkles/>{label}</b></div><div className="shot-viewport"><img src={view.src} alt={label} style={{objectPosition:view.position}}/></div></figure>;
}
