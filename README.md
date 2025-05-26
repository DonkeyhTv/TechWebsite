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
- **Isotope Layout** - Filtrage et arrangement de grille dynamique
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
│   │   │   ├── bg-hero.jpg
│   │   │   ├── portfolio-placeholder.jpg
│   │   │   ├── client-logo-placeholder.png (1-6)
│   │   │   ├── testimonials-bg.jpg
│   │   │   └── google-logo.png
│   │   └── main.css
│   ├── components/
│   │   ├── AppHeader.vue
│   │   ├── HeroSection.vue
│   │   ├── PageLoader.vue
│   │   ├── StructuredData.vue
│   │   ├── ServicesSection.vue
│   │   ├── PortfolioSection.vue
│   │   ├── ClientsSection.vue        # Section carousel logos
│   │   ├── TestimonialsSection.vue   # Section témoignages
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
│   │   ├── services.json
│   │   └── portfolio.json            # Données du portfolio
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

Exemple pour la section Portfolio :

```json
{
  "portfolio": {
    "badge": "Our Portfolio",
    "title": "Latest Projects",
    "seeMore": "See All Projects",
    "filters": {
      "all": "All",
      "web-development": "Web Development",
      "web-design": "Web Design",
      "graphic": "Graphic Design"
    },
    "categories": {
      "web-development": "Development",
      "web-design": "Design",
      "graphic": "Graphic"
    }
  }
}
```

Exemple pour la section Testimonials :

```json
{
  "testimonials": {
    "badge": "Témoignages",
    "title": "Ce Que Disent Nos Clients",
    "basedOn": "Basé sur",
    "reviews": "avis"
  }
}
```

Exemple pour la section Clients :

```json
{
  "clients": {
    "title": "Ils nous ont fait confiance"
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

### 5. Section Portfolio

- **Grille dynamique avec Isotope.js** : arrangement automatique des éléments
- **Système de filtrage** par catégorie :
  - All (tous les projets)
  - Web Development
  - Web Design
  - Graphic Design
- **Animations sophistiquées** :
  - Header et filtres : apparition progressive au scroll
  - Items : apparition initiale fluide
  - Filtrage : transitions smooth avec scale et opacité
  - Réarrangement sans rebond grâce à l'optimisation CSS
- **Effets hover sur les vignettes** :
  - Scale de 1.05 sur le contenu uniquement
  - Barre d'information qui glisse du bas
  - Badge de catégorie qui apparaît
  - Icône de flèche animée
- **Design moderne** :
  - Vignettes avec coins arrondis
  - Overlay sombre avec backdrop blur
  - Badge de catégorie flottant
  - Aspect ratio 16:12 pour les images
- **Responsive** :
  - Desktop : grille 3 colonnes
  - Tablette : grille 2 colonnes
  - Mobile : grille 1 colonne
  - Espacement adaptatif entre les éléments
- **Performance optimisée** :
  - Lazy loading des images
  - Animations CSS uniquement
  - Pas de conflits entre Isotope et les transitions CSS

### 6. Section Clients

- **Carousel infini de logos** : rotation automatique des logos clients
- **Grille responsive** : 6 colonnes sur desktop, 3 sur tablette, 2 sur mobile
- **Effet carousel circulaire** :
  - Rotation complète toutes les 3.5 secondes
  - Le premier logo devient le deuxième, etc.
  - Pas de glissement horizontal, transitions en place
- **Effet de vague** :
  - Chaque logo apparaît avec un délai de 80ms
  - Animation progressive de gauche à droite
  - Transitions fluides avec scale et fade
- **Design des logos** :
  - Cartes blanches de 125px de hauteur
  - Logos zoomés à 125% pour meilleure visibilité
  - Coins arrondis et ombres portées
  - Fond bleu OOZAMI
- **Effets interactifs** :
  - Logos en grayscale par défaut
  - Couleur au hover avec transition fluide
  - Élévation de la carte au survol
  - Overlay subtil au hover
- **Animations optimisées** :
  - Mode "out-in" pour éviter les chevauchements
  - Transitions : 0.6s entrée, 0.4s sortie
  - Scale + translateY pour effet moderne
- **Titre simple** : "Ils nous ont fait confiance" (28px, centré)

### 7. Section Testimonials

- **Fond avec image fixe** : effet parallaxe avec overlay sombre (85% opacité)
- **En-tête avec notation Google** :
  - Note moyenne affichée (4.8/5 étoiles)
  - Nombre total d'avis (127)
  - Logo Google pour l'authenticité
  - Badge "Témoignages" avec style cohérent
- **Carousel de témoignages** :
  - 5 témoignages avec rotation automatique
  - Auto-play toutes les 5 secondes
  - Navigation manuelle avec flèches
  - Indicateurs de position (dots)
- **Design des cartes témoignages** :
  - Effet glassmorphism (fond blanc 10% + backdrop blur)
  - Avatar avec initiale du client
  - Système de notation par étoiles (1-5)
  - Citation mise en valeur avec guillemets
  - Informations client : nom, entreprise, date
- **Animations fluides** :
  - Slide horizontal entre témoignages
  - Fade-in progressif au scroll
  - Transitions douces de 0.5s
- **Responsive design** :
  - Avatar caché sur mobile
  - Adaptation des tailles de texte
  - Navigation tactile optimisée
- **Données en dur** : Lorem ipsum temporaire en attendant l'intégration API Google Places

### 8. Section Contact

- **Formulaire centré** avec layout simple et épuré
- **En-tête minimaliste** :
  - Badge "Contact" avec style cohérent
  - Titre et description centrés
  - Support dark mode complet
- **Champs du formulaire** :
  - 5 champs : prénom, nom, email, téléphone, message
  - Email et téléphone sur la même ligne (responsive)
  - Fonds transparents avec bordures grises
  - Bordure bleue et ring au focus
- **Interactions dynamiques** :
  - Labels qui changent de couleur au focus du champ
  - Variable activeField pour tracker le champ sélectionné
  - Transitions fluides de 300ms sur tous les éléments
- **Animations au scroll** :
  - Header : fade-in depuis le haut (100ms)
  - Formulaire : fade-in depuis le bas (300ms)
  - Champs : apparition en cascade (400ms + 100ms par champ)
- **Bouton d'envoi** :
  - Centré avec coins arrondis personnalisés
  - État de chargement avec spinner animé
  - Désactivé pendant l'envoi
- **Message de succès** :
  - Apparition avec transition fade
  - Auto-disparition après 5 secondes
  - Reset automatique du formulaire
- **Styles optimisés** :
  - Override des styles navigateur par défaut
  - Placeholders visibles sur fond transparent
  - Support complet du dark mode

### 9. Dashboard Analytics

- Visualisation de données en temps réel
- Profils de personnalisation Sitecore
- Métriques et KPIs interactifs
- Export de rapports

### 8. Système de Navigation

- Header sticky avec changement de style au scroll
- Menu mobile hamburger animé
- Sélecteur de langue intégré
- Mode sombre/clair

### 9. Loader de Page

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
