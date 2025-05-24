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

### Développement

- **Architecture Vue 3** avec Composition API et TypeScript
- **Routing dynamique** avec Vue Router
- **Internationalisation (i18n)** FR/EN complète
- **Composants réutilisables** et modulaires
- **Dashboard analytics** avec visualisations de données

### SEO & Performance

- **SEO optimisé** avec meta tags dynamiques
- **Données structurées** Schema.org
- **Sitemap XML** multilingue
- **Performance optimisée** avec lazy loading

## 📦 Stack Technique

### Core

- **Vue.js 3.4** - Framework JavaScript progressif
- **TypeScript 5.0** - Typage statique
- **Vite 5.0** - Build tool ultra-rapide
- **Vue Router 4** - Routing SPA

### Styling

- **Tailwind CSS 3.4** - Framework CSS utility-first
- **PostCSS** - Transformations CSS
- **Police Jost** - Typography personnalisée

### Fonctionnalités

- **Vue i18n** - Internationalisation
- **Particles.js** - Animations de particules
- **Lucide Vue Next** - Icônes modernes
- **@vueuse/head** - Gestion des meta tags

### Développement

- **ESLint** - Linting du code
- **Prettier** - Formatage du code
- **Pinia** - State management
- **TypeScript ESLint** - Linting TypeScript

## 🏗️ Structure du Projet

```
oozami/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-trans.png
│   │   │   └── bg-hero.jpg
│   │   └── main.css
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── HeroSection.vue
│   │   ├── PageLoader.vue
│   │   ├── StructuredData.vue
│   │   ├── header/
│   │   │   ├── HeaderActions.vue
│   │   │   ├── HeaderLanguagesSelector.vue
│   │   │   ├── HeaderLogo.vue
│   │   │   ├── HeaderMobile.vue
│   │   │   └── HeaderNavigation.vue
│   │   └── sections/
│   │       └── SitecoreAnalyticsSection.vue
│   ├── composables/
│   │   ├── useLoader.ts
│   │   ├── useSEO.ts
│   │   ├── useSitecoreAnalytics.ts
│   │   └── useI18n.ts
│   ├── layouts/
│   │   └── DashboardLayout.vue
│   ├── locales/
│   │   ├── fr.json
│   │   ├── en.json
│   │   └── index.ts
│   ├── router/
│   │   └── index.ts
│   ├── views/
│   │   ├── Home.vue
│   │   └── dashboard/
│   │       ├── DashboardHome.vue
│   │       ├── DashboardVisitors.vue
│   │       ├── DashboardGoals.vue
│   │       ├── DashboardPersonalization.vue
│   │       ├── DashboardReports.vue
│   │       └── DashboardSettings.vue
│   ├── App.vue
│   └── main.ts
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Installation

```bash
# Cloner le repository
git clone https://github.com/DonkeyhTv/TechWebsite.git
cd oozami

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

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

Les fichiers de traduction sont dans `/src/locales/`:

- `fr.json` - Français
- `en.json` - Anglais

### SEO

Meta tags à configurer dans `/src/composables/useSEO.ts`

## 📱 Fonctionnalités Principales

### 1. Hero Section Interactive

- Image avec effet parallaxe 3D au survol
- Particules animées en arrière-plan
- Responsive avec versions mobile/desktop

### 2. Dashboard Analytics

- Visualisation de données en temps réel
- Profils de personnalisation Sitecore
- Métriques et KPIs interactifs
- Export de rapports

### 3. Système de Navigation

- Header sticky avec changement de style au scroll
- Menu mobile hamburger animé
- Sélecteur de langue intégré
- Mode sombre/clair

### 4. Loader de Page

- Animation de chargement personnalisée
- Progression de 0 à 100%
- Durée minimale de 2 secondes
- Effet d'ouverture du centre

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite",
  "build": "vite build",
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

## 📝 Licence

Ce projet est sous licence privée - Copyright © 2025 Steve Amissi

## 👥 Auteur

**INFO**

- Location: Tournai, Belgique

---

Développé avec ❤️ par Steve Amissi
