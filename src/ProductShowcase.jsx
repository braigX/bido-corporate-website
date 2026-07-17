'use client';

import { CheckCircle2, Sparkles } from 'lucide-react';

const media = {
  '/plateforme': ['/product/opportunities.webp','/product/opportunity-details.webp'],
  '/opportunites': ['/product/opportunities.webp','/product/opportunity-grid.webp'],
  '/analyse-appels-offres': ['/product/ai-analysis.webp','/product/opportunity-details.webp'],
  '/analyse-documents': ['/product/opportunity-details.webp','/product/ai-analysis.webp'],
  '/agents-ia': ['/product/ai-analysis.webp','/product/opportunities.webp'],
  '/alertes': ['/product/opportunity-grid.webp','/product/opportunities.webp'],
};

const copy = {
  fr: { label:'INTERFACE PRODUIT', title:'Voyez le travail, pas une promesse abstraite.', text:'Ces vues réelles montrent comment Bido rassemble la détection, la qualification et l’analyse dans un espace lisible.', points:['Opportunités centralisées et filtrables','Analyse guidée par votre profil d’entreprise','Documents, échéances et décisions au même endroit'], note:'Interface en cours d’évolution · Données de démonstration', primary:'Vue principale', secondary:'Vue détaillée', alt:'Aperçu réel de l’interface Bido' },
  en: { label:'PRODUCT INTERFACE', title:'See the workflow, not an abstract promise.', text:'These real product views show how Bido brings discovery, qualification and analysis into one readable workspace.', points:['Centralised, filterable opportunities','Analysis guided by your company profile','Documents, deadlines and decisions in one place'], note:'Interface under active development · Demonstration data', primary:'Main view', secondary:'Detailed view', alt:'Real preview of the Bido interface' },
  ar: { label:'واجهة المنتج', title:'شاهدوا طريقة العمل، لا مجرد وعود.', text:'توضح هذه الواجهات الحقيقية كيف تجمع Bido بين اكتشاف الفرص وتأهيلها وتحليلها في مساحة واضحة.', points:['فرص مركزية قابلة للبحث والتصفية','تحليل موجّه بملف مقاولتكم','الوثائق والآجال والقرارات في مكان واحد'], note:'الواجهة قيد التطوير · بيانات للعرض فقط', primary:'الواجهة الرئيسية', secondary:'العرض التفصيلي', alt:'عرض حقيقي لواجهة Bido' }
};

export default function ProductShowcase({ path, locale='fr' }) {
  const images=media[path]; if(!images)return null; const t=copy[locale];
  return <section className="product-showcase"><div className="container"><div className="showcase-heading"><div><div className="section-label">{t.label}</div><h2>{t.title}</h2></div><div><p>{t.text}</p><ul>{t.points.map(x=><li key={x}><CheckCircle2/>{x}</li>)}</ul></div></div><div className="product-browser"><div className="browser-bar"><div><i/><i/><i/></div><span>bido.ma / app</span><b><Sparkles/>{t.primary}</b></div><img src={images[0]} alt={t.alt}/></div><div className="showcase-secondary"><figure><img src={images[1]} alt={t.alt}/><figcaption>{t.secondary}</figcaption></figure><p>{t.note}</p></div></div></section>;
}
