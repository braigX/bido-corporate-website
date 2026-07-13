import {
  BellRing, Binoculars, Bot, BriefcaseBusiness, Building2, ChartNoAxesCombined,
  CheckCheck, CircleGauge, FileCheck2, FileStack, Fingerprint, GitCompareArrows,
  Landmark, Layers3, LockKeyhole, MessagesSquare, Radar, ScrollText, SearchCheck,
  ShieldCheck, Sparkles, UsersRound, Workflow,
} from 'lucide-react';
import { productPages } from './editorial-content';

export { productPages };

export const company = {
  name: 'Bido', domain: 'bido.ma', email: 'contact@bido.ma', support: 'support@bido.ma',
  phone: '+212 5 XX XX XX XX', city: 'Agadir, Maroc',
  loginUrl: '#', signupUrl: '/demo', statusUrl: '#',
};

export const solutionPages = {
  '/solutions/pme': ['PME', 'Transformez une petite équipe en cellule de veille structurée', 'Réduisez la charge de recherche et concentrez vos ressources sur les dossiers réellement alignés.', BriefcaseBusiness],
  '/solutions/entreprises': ['Grandes entreprises', 'Unifiez la veille de plusieurs métiers et entités', 'Donnez aux directions une vision consolidée sans effacer l’autonomie opérationnelle.', Building2],
  '/solutions/bid-managers': ['Responsables appels d’offres', 'Pilotez chaque candidature avec plus de continuité', 'Rassemblez les exigences, responsabilités, risques et décisions dans un dossier vivant.', FileCheck2],
  '/solutions/developpement-commercial': ['Développement commercial', 'Alimentez un pipeline d’opportunités publiques qualifié', 'Détectez plus tôt les signaux utiles et préparez des arbitrages commerciaux plus nets.', Binoculars],
  '/solutions/consultants': ['Consultants', 'Industrialisez l’analyse sans banaliser votre expertise', 'Gagnez en cohérence dans vos livrables tout en maintenant votre jugement au centre.', Landmark],
  '/secteurs/btp': ['BTP & ingénierie', 'Lisez les projets avec une logique de capacité et de risque', 'Territoires, qualifications, moyens, délais et pièces : structurez les éléments qui font la différence.', Layers3],
  '/secteurs/it': ['Informatique & numérique', 'Repérez les besoins numériques adaptés à votre offre', 'Suivez les consultations en logiciels, infrastructure, services et transformation numérique.', Sparkles],
  '/secteurs/services': ['Services aux entreprises', 'Donnez de la précision à votre veille multisectorielle', 'Nettoyage, maintenance, formation, conseil : filtrez les opportunités selon vos expertises.', GitCompareArrows],
  '/secteurs/fournitures': ['Fournitures & équipements', 'Mieux cibler les consultations à forte adéquation', 'Croisez familles d’achats, zones de livraison, volumes et contraintes administratives.', BriefcaseBusiness],
};

export const nav = [
  ['Produit', [['Vue d’ensemble','/plateforme'],['Marchés publics','/opportunites'],['Recherche IA','/recherche-intelligente-marches-publics'],['Analyseur IA','/analyseur-ia-marches-publics'],['Recherche documentaire','/recherche-documents-appels-offres'],['Agents IA','/agents-ia'],['Collaboration','/collaboration'],['Alertes','/alertes'],['Sécurité','/securite']]],
  ['Solutions', [['PME','/solutions/pme'],['Entreprises','/solutions/entreprises'],['Bid managers','/solutions/bid-managers'],['Consultants','/solutions/consultants'],['BTP & ingénierie','/secteurs/btp']]],
  ['Tarifs','/tarifs'], ['Ressources','/ressources'], ['Entreprise','/a-propos'],
];

export const legalPages = {
  '/confidentialite': ['Politique de confidentialité', 'Cette page présente la structure de confidentialité prévue pour Bido. Elle devra être validée et complétée avant mise en production.', [['Données traitées','Les données de compte, d’usage et de contact sont limitées à ce qui est nécessaire au service.'],['Finalités et bases','Chaque traitement doit être rattaché à une finalité claire, une base appropriée et une durée définie.'],['Vos droits','Les modalités d’accès, de rectification, d’opposition et de suppression seront précisées avec le contact confidentialité.'],['Sous-traitants','La liste des prestataires et lieux de traitement sera documentée avant lancement.']]],
  '/conditions': ['Conditions d’utilisation', 'Ces conditions constituent une trame produit à faire relire par un conseil qualifié avant toute ouverture commerciale.', [['Objet du service','Bido fournit des outils de veille, d’organisation et d’assistance à l’analyse.'],['Responsabilités','L’utilisateur reste responsable de vérifier les sources officielles, critères, dates et modalités de dépôt.'],['Disponibilité','Les objectifs de service et modalités de support seront définis dans l’offre contractuelle.'],['Propriété intellectuelle','Les règles applicables aux contenus, données et résultats devront être précisées contractuellement.']]],
  '/cookies': ['Politique de cookies', 'Bido prévoit un mécanisme de consentement granulaire. Les cookies non essentiels restent désactivés avant votre choix.', [['Nécessaires','Ils assurent les fonctions essentielles et la mémorisation de vos préférences.'],['Mesure d’audience','Cette catégorie facultative aide à comprendre l’usage global du site.'],['Préférences','Elle mémorise des réglages complémentaires lorsque vous l’autorisez.'],['Gestion','Vous pouvez modifier votre choix depuis le lien Cookies en pied de page.']]],
  '/mentions-legales': ['Mentions légales', 'Les informations légales définitives doivent être fournies avant publication commerciale.', [['Éditeur','Raison sociale, forme juridique, capital et identifiants à compléter.'],['Siège social','Adresse officielle à compléter.'],['Directeur de publication','Identité à compléter.'],['Hébergement','Prestataire et coordonnées à compléter.']]],
  '/ia-responsable': ['Déclaration pour une IA responsable', 'L’IA de Bido est conçue comme une assistance opérationnelle soumise au jugement professionnel.', [['Supervision humaine','Les résultats importants doivent être revus avant toute décision ou soumission.'],['Transparence','L’interface distingue les contenus sources, les extractions et les synthèses générées.'],['Limites connues','Une réponse peut être incomplète ou erronée ; le document officiel reste la référence.'],['Amélioration','Les retours et incidents alimentent un processus de contrôle et d’amélioration.']]],
  '/sources': ['Sources et attribution', 'Bido organise des informations publiquement accessibles sans se substituer aux plateformes officielles.', [['Indépendance','Bido n’est affilié à aucune autorité publique et ne revendique aucune approbation institutionnelle.'],['Vérification','Les utilisateurs doivent contrôler les avis, pièces et délais auprès des sources officielles.'],['Actualisation','Une information agrégée peut évoluer ; l’horodatage et la source doivent guider la vérification.'],['Signalement','Un canal permettra de signaler une donnée inexacte ou obsolète.']]],
};

export const faq = [
  ['Bido est-il un portail public officiel ?', 'Non. Bido est une plateforme technologique indépendante et n’est affilié ou approuvé par aucune autorité publique.'],
  ['Quels types d’opportunités Bido peut-il présenter ?', 'Bido vise les appels d’offres, bons de commande et autres opportunités publiques utiles aux entreprises marocaines. Le périmètre des sources et la fréquence d’actualisation seront documentés au lancement.'],
  ['D’où proviennent les informations sur les marchés publics ?', 'Bido structure des informations publiquement accessibles provenant de sources marocaines. Chaque information importante doit être vérifiée dans la publication et les documents officiels concernés.'],
  ['Bido remplace-t-il la consultation du portail officiel ?', 'Non. Bido facilite la découverte, la recherche et l’analyse, mais les documents officiels restent la référence pour les conditions, délais, modifications et modalités de soumission.'],
  ['Puis-je rechercher des appels d’offres en langage naturel ?', 'Oui. Vous pouvez formuler un besoin comme « marchés de maintenance informatique à Casablanca », puis vérifier et ajuster les critères interprétés par Bido.'],
  ['La recherche couvre-t-elle le contenu des documents ?', 'Lorsqu’une pièce est disponible dans un format exploitable, Bido peut aider à retrouver une exigence ou un passage au-delà du seul titre de l’opportunité.'],
  ['Comment fonctionne le classement par pertinence ?', 'Bido rapproche l’opportunité de votre profil métier, de vos secteurs, régions, mots-clés, préférences et exclusions. Les signaux du classement doivent rester compréhensibles.'],
  ['Un score élevé garantit-il notre éligibilité ?', 'Non. La pertinence aide à prioriser une lecture. Elle ne constitue ni une validation administrative, ni un avis juridique, ni une garantie d’éligibilité ou de succès.'],
  ['Puis-je sauvegarder une recherche de marchés publics ?', 'Oui. Une combinaison de mots-clés et de filtres peut devenir une recherche sauvegardée ou une liste de veille organisée par secteur, région, client ou équipe.'],
  ['Que fait l’analyseur IA de marchés publics ?', 'Il aide à interroger les pièces disponibles, résumer le contexte, repérer les critères, documents, dates et risques, puis préparer une synthèse ou une note Go / No-Go à vérifier.'],
  ['L’IA peut-elle décider à la place de mon équipe ?', 'Non. Elle accélère la lecture et la structuration ; vos experts gardent la vérification, la validation et la décision.'],
  ['Les réponses IA indiquent-elles leurs sources ?', 'Bido est conçu pour rattacher les réponses aux documents ou passages disponibles lorsque le contexte le permet et pour signaler l’incertitude lorsqu’une réponse ne peut pas être établie.'],
  ['Quels agents IA seront disponibles ?', 'Les rôles envisagés couvrent l’analyse d’appel d’offres, la qualification, la vérification documentaire, la conformité, les rapports, les e-mails, les délais et la préparation de réponse. Leur disponibilité exacte dépendra de l’offre.'],
  ['Peut-on travailler à plusieurs sur une opportunité ?', 'Oui. L’espace de travail permet de partager une opportunité, attribuer une responsabilité, ajouter des notes, suivre un statut et conserver l’historique des décisions.'],
  ['Comment sont traités les documents de mon entreprise ?', 'Les règles d’hébergement, d’accès, de conservation, d’export et de suppression seront précisées dans la documentation de sécurité et les conditions contractuelles avant l’ouverture commerciale.'],
  ['Les tarifs sont-ils disponibles ?', 'Les offres Starter, Professional, Business et Enterprise sont préparées sans prix fictif. Les tarifs, limites d’usage et services inclus seront annoncés avant tout engagement.'],
  ['Existe-t-il une offre pour plusieurs équipes ou entités ?', 'Oui. L’offre Enterprise est prévue pour étudier les besoins multi-entités, les rôles avancés, les intégrations et un cadre contractuel adapté.'],
  ['Comment signaler une information incorrecte ?', 'La page Contact permet de sélectionner un problème de données et de transmettre la référence concernée. Évitez d’y joindre des informations sensibles non nécessaires.'],
];
