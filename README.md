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

### Développement

- **Architecture Vue 3** avec Composition API et TypeScript
- **Routing dynamique** avec Vue Router
- **Internationalisation (i18n)** FR/EN complète
- **Composants réutilisables** et modulaires
- **Dashboard analytics** avec visualisations de données
- **Intersection Observer** pour animations au scroll

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
- **Flaticon** - Icônes professionnelles

### Fonctionnalités

- **Vue i18n** - Internationalisation
- **Particles.js** - Animations de particules
- **Lucide Vue Next** - Icônes modernes
- **@vueuse/head** - Gestion des meta tags
- **@flaticon/flaticon-uicons** - Bibliothèque d'icônes

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
│   │   ├── ServicesSection.vue      # Nouvelle section
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
│   ├── data/
│   │   └── services.json            # Données des services
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

# Installer les icônes Flaticon
npm i @flaticon/flaticon-uicons

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

Les fichiers de traduction sont dans `/src/locales/`:

- `fr.json` - Français
- `en.json` - Anglais

Exemple pour la section Services :

```json
{
  "services": {
    "badge": "Digital Marketing",
    "title": "Services We Offer",
    "subtitle": "Lorem ipsum dolor sit amet...",
    "techButton": "Techs We Use",
    "readMore": "Read More"
  }
}
```

Exemple pour la section Why Choose Us :

```json
{
  "whyChooseUs": {
    "badge": "Why Choose Us",
    "title": "Lorem Dolore Sit Amet",
    "description": "Lorem ipsum dolor sit amet...",
    "items": {
      "item1": {
        "title": "Lorem Dolore",
        "description": "Lorem ipsum dolor sit amet..."
      }
    },
    "ctaButton": "Get In Touch"
  }
}
```

### SEO

Meta tags à configurer dans `/src/composables/useSEO.ts`

## 📱 Fonctionnalités Principales

### 1. Hero Section Interactive

- Image avec effet parallaxe 3D au survol
- Particules animées en arrière-plan
- Responsive avec versions mobile/desktop

### 2. Section Services

- **Grille responsive** de 6 cartes de services (3x2 sur desktop, 2x3 sur tablette, 1x6 sur mobile)
- **Effet hover unique** : fond bleu qui glisse de gauche à droite
- **Animation au scroll** : apparition progressive des cartes avec effet de vague
- **Icônes Flaticon** personnalisables
- **Support i18n** pour tous les textes
- **Dark mode** compatible

#### Animations de la section Services :

- **Header et bouton** : apparition avec délai progressif
- **Cartes** : apparition en vague (gauche vers droite) par rangée
- **Hover effects** :
  - Fond bleu glissant avec scale X
  - Textes devenant blancs
  - Icône SVG qui grandit
  - Bordure de l'icône qui change

### 3. Section About Us

- **Grille 2 colonnes** : contenu à gauche, image à droite
- **Image avec effet parallaxe 3D** au survol (comme HeroSection)
- **4 items avec icônes Flaticon** dans une grille 2x2
- **Animations au scroll** :
  - Header : fade-in du bas (100ms)
  - Colonne gauche : slide depuis la gauche (400ms)
  - Colonne droite : slide depuis la droite (600ms)
- **Effets hover sur les items** :
  - Élévation avec translate Y
  - Fond de l'icône qui devient plein bleu
  - Ombre portée bleue sur l'icône
  - Transitions fluides de 300ms
- **Support complet i18n** avec structure Lorem Ipsum
- **Responsive** : passe en 1 colonne sur mobile

### 4. Section Why Choose Us

- **Grille 2 colonnes** : image avec effet parallaxe à gauche, contenu à droite
- **Fond sombre** : utilise `bg-oozami-darkblue` pour créer une section contrastée
- **Effet parallaxe 3D** sur l'image (identique aux autres sections)
- **3 points numérotés** avec design moderne :
  - Numéros en grand (01., 02., 03.) en couleur `oozami-lightblue`
  - Titre et description pour chaque point
  - Espacement vertical généreux
- **Animations au scroll** :
  - Image : slide depuis la gauche (200ms)
  - Contenu : slide depuis la droite (400ms)
- **Badge et titre** avec le même style que les autres sections
- **Bouton CTA** "Get In Touch" avec style cohérent
- **Responsive** :
  - Mobile : image en haut, contenu en bas
  - Desktop : image à gauche, contenu à droite
  - Adaptation des tailles de texte et espacements

### 5. Dashboard Analytics

- Visualisation de données en temps réel
- Profils de personnalisation Sitecore
- Métriques et KPIs interactifs
- Export de rapports

### 4. Système de Navigation

- Header sticky avec changement de style au scroll
- Menu mobile hamburger animé
- Sélecteur de langue intégré
- Mode sombre/clair

### 5. Loader de Page

- Animation de chargement personnalisée
- Progression de 0 à 100%
- Durée minimale de 2 secondes
- Effet d'ouverture du centre

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

**INFO**

- Location: Tournai, Belgique

---

Développé avec ❤️ par Steve Amissi
