# OOZAMI - Solutions Digitales

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite)](https://vitejs.dev/)

Site web moderne pour OOZAMI, une agence digitale offrant des solutions sur mesure en design, développement et marketing digital.

## 🚀 Fonctionnalités

### Design & UX

- **Design moderne et responsive** avec Tailwind CSS
- **Mode sombre/clair** avec persistance locale
- **Animations fluides** et transitions soignées
- **Hero section interactive** avec effet parallaxe 3D sur l'image
- **Système de particules animées** avec particles.js
- **Loader de page personnalisé** avec progression animée
- **Section Services animée** avec effet de vague au scroll
- **Portfolio avec filtrage dynamique** utilisant Isotope.js
- **Carousel de logos clients** avec rotation automatique
- **Testimonials avec fond parallaxe** et carousel d'avis
- **Formulaire de contact** avec animations et validations
- **Footer modulaire** avec animations d'apparition

### Développement

- **Architecture Vue 3** avec Composition API et TypeScript
- **Routing dynamique** avec Vue Router
- **Internationalisation (i18n)** FR/EN complète
- **Composants réutilisables** et modulaires
- **Dashboard analytics** avec visualisations de données
- **Intersection Observer** pour animations au scroll
- **Isotope.js** pour le filtrage et l'arrangement du portfolio

### SEO & Performance

- **SEO optimisé** avec meta tags dynamiques
- **Données structurées** Schema.org
- **Sitemap XML** multilingue
- **Performance optimisée** avec lazy loading

## 🛠️ Technologies Utilisées

### Frontend Core

- **Vue.js 3.4** - Framework JavaScript progressif avec Composition API
- **TypeScript 5.0** - JavaScript avec typage statique pour une meilleure robustesse
- **Vite 5.0** - Build tool ultra-rapide pour le développement moderne
- **Vue Router 4** - Navigation SPA avec routing dynamique

### Styling & UI

- **Tailwind CSS 3.4** - Framework CSS utility-first pour styling rapide et responsive
- **PostCSS** - Transformations CSS avancées
- **Police Jost** - Typography moderne et élégante
- **Lucide Vue Next** - Icônes SVG modernes et optimisées

### Icônes & Assets

- **Devicons** - Police d'icônes spécialisée pour technologies de développement
- **Simple Icons** - Collection SVG d'icônes de marques populaires via CDN
- **Flaticon & @flaticon/flaticon-uicons** - Bibliothèque d'icônes professionnelles

### Fonctionnalités Avancées

- **Vue i18n** - Système d'internationalisation FR/EN complet
- **Particles.js** - Animations de particules pour effets visuels
- **Isotope Layout** - Filtrage et arrangement de grille dynamique pour portfolio
- **@vueuse/head** - Gestion dynamique des meta tags pour SEO
- **Intersection Observer API** - Animations au scroll optimisées

### Outils de Développement

- **ESLint** - Linting du code JavaScript/TypeScript
- **Prettier** - Formatage automatique du code
- **Pinia** - State management moderne pour Vue 3
- **TypeScript ESLint** - Linting spécialisé TypeScript

### Composant Technologies - Fonctionnalités

#### Affichage Multi-Sources Intelligent

```typescript
interface Technology {
  id: number
  name: string
  devicon?: string // Classe Devicon (priorité)
  simpleIcon?: string // Slug Simple Icons
  img?: string // Image locale (fallback)
  color?: string // Couleur personnalisée
}
```

#### Système de Fallback Robuste

1. **Devicons** - Police d'icônes spécialisée (priorité)
2. **Simple Icons** - Icônes SVG via CDN avec couleurs personnalisées
3. **Images locales** - Assets personnalisés stockés localement
4. **Fallback ultime** - Première lettre avec arrière-plan coloré généré

#### Performance & UX

- **Grid responsive** adaptée à tous les écrans (2-6 colonnes)
- **Animations d'entrée** avec IntersectionObserver pour performance optimale
- **Effets de hover** avec transformations CSS fluides
- **Support dark mode** avec inversion automatique des icônes SVG
- **Gestion d'erreurs** pour éviter les éléments cassés
- **Chargement dynamique** via API avec système de cache

## 🛠️ Installation

```bash
# Cloner le repository
git clone https://github.com/DonkeyhTv/TechWebsite.git
cd oozami

# Installer les dépendances
npm install

# Installer les icônes Flaticon
npm i @flaticon/flaticon-uicons

# Installer Isotope Layout pour le portfolio
npm install isotope-layout
npm install --save-dev @types/isotope-layout

# Lancer le serveur de développement
npm run dev

npm run build:production
npm run build:local
npm run build:staging  #Build si pas à la racine du FTP

# Preview du build
npm run preview
```

## 🎨 Personnalisation

### Couleurs (Tailwind)

```javascript
// tailwind.config.js
colors: {
  'oozami': {
    'lightblue': '#4A90E2',
    'darkblue': '#1A237E',
    'black': '#000000'
  }
}
```

### Traductions

Les fichiers de traduction sont dans `/src/locales/` avec support complet FR/EN pour toutes les sections du site.

### SEO

Meta tags configurables dans `/src/composables/useSEO.ts` avec données structurées Schema.org.

## 📱 Fonctionnalités Principales

### 1. Hero Section Interactive

- Image avec effet parallaxe 3D au survol
- Particules animées en arrière-plan
- Responsive avec versions mobile/desktop

### 2. Section Services

- **Grille responsive** de 6 cartes de services
- **Effet hover unique** : fond bleu qui glisse de gauche à droite
- **Animation au scroll** : apparition progressive avec effet de vague
- **Icônes Flaticon** personnalisables
- **Support i18n** complet

### 3. Section About Us

- **Grille 2 colonnes** avec image parallaxe 3D
- **4 items avec icônes** dans une grille responsive
- **Animations au scroll** optimisées
- **Effets hover** avec élévation et transitions fluides

### 4. Section Why Choose Us

- **Design contrasté** avec fond sombre
- **Effet parallaxe 3D** sur l'image
- **3 points numérotés** avec design moderne
- **Animations au scroll** depuis les côtés

### 5. Section Portfolio

- **Grille dynamique avec Isotope.js**
- **Système de filtrage** par catégorie
- **Animations sophistiquées** avec transitions smooth
- **Effets hover** avec overlay et badges
- **Performance optimisée** avec lazy loading

### 6. Section Clients

- **Carousel infini** de logos clients
- **Effet de vague** avec délais progressifs
- **Logos interactifs** avec grayscale/couleur
- **Rotation automatique** toutes les 3.5 secondes

### 7. Section Testimonials

- **Fond parallaxe** avec overlay
- **En-tête avec notation Google** authentique
- **Carousel automatique** de témoignages
- **Design glassmorphism** moderne

### 8. Section Contact

- **Formulaire centré** avec 5 champs
- **Interactions dynamiques** avec focus tracking
- **Animations en cascade** au scroll
- **États de chargement** et validation

### 9. Footer Modulaire

- **5 composants séparés** pour maintenance facile
- **Design avec fond image** et overlay
- **Newsletter intégré** avec validation
- **Animations d'apparition** en cascade

### 10. Dashboard Analytics

- Visualisation de données en temps réel
- Profils de personnalisation Sitecore
- Métriques et KPIs interactifs
- Export de rapports

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite",
  "build": "vite build",
  "build:staging": "node scripts/set-env.js staging && vite build",
  "build:production": "node scripts/set-env.js production && vite build",
  "preview": "vite preview",
  "type-check": "vue-tsc --build --force",
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts",
  "format": "prettier --write src/"
}
```

## 📈 SEO & Analytics

- Meta tags dynamiques par page
- Open Graph & Twitter Cards
- Données structurées Schema.org
- Sitemap XML multilingue
- Support Google Analytics
- robots.txt configuré

## 🌐 Déploiement

Le site est prêt pour le déploiement sur :

- Netlify
- Vercel
- GitHub Pages
- Tout serveur statique

### Configuration par environnement

Le projet supporte plusieurs environnements via `set-env.js` :

- **local** : basePath = '/'
- **staging** : basePath = '/techWebsite/'
- **production** : basePath = '/'

## 📝 Licence

Ce projet est sous licence privée - Copyright © 2025 Steve Amissi

## 👥 Auteur

**Steve Amissi**

- Location: Tournai, Belgique

---

Développé avec ❤️ par Steve Amissi
