<template>
  <div class="project-detail-page">
    <section
      class="hero-project py-16 md:py-24 bg-gradient-to-br from-oozami-darkblue to-oozami-lightblue"
    >
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="fade-in-down opacity-0" ref="heroRef">
          <nav class="text-white/80 text-sm mb-8">
            <router-link to="/" class="hover:text-white transition-colors">{{
              $t('breadcrumb.home')
            }}</router-link>
            <span class="mx-2">/</span>
            <router-link to="/portfolio" class="hover:text-white transition-colors"
              >Portfolio</router-link
            >
            <span class="mx-2">/</span>
            <span class="text-white">{{ project.title }}</span>
          </nav>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center gap-2 mb-4">
                <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                <span class="uppercase text-white text-sm font-medium tracking-wider">
                  {{ $t(`portfolio.categories.${project.category}`) }}
                </span>
                <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {{ project.title }}
              </h1>

              <p class="text-xl text-white/90 mb-8 leading-relaxed">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-3 mb-8">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex flex-wrap gap-4">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-white text-oozami-darkblue font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  {{ $t('portfolio.viewLive') }}
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="w-5 h-5"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                  Code Source
                </a>
              </div>
            </div>

            <div class="relative">
              <div class="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden shadow-2xl">
                <div
                  class="w-full h-full bg-cover bg-center"
                  :style="{ backgroundImage: `url(${project.image})` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <div ref="contentRef" class="fade-in-up opacity-0">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {{ $t('portfolio.projectOverview') }}
              </h2>

              <div class="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-12">
                <p>{{ project.fullDescription }}</p>

                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  {{ $t('portfolio.challenges') }}
                </h3>
                <ul>
                  <li v-for="challenge in project.challenges" :key="challenge">{{ challenge }}</li>
                </ul>

                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                  {{ $t('portfolio.solutions') }}
                </h3>
                <ul>
                  <li v-for="solution in project.solutions" :key="solution">{{ solution }}</li>
                </ul>
              </div>

              <div v-if="project.gallery && project.gallery.length > 0" class="mb-12">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {{ $t('portfolio.gallery') }}
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div
                    v-for="(image, index) in project.gallery"
                    :key="index"
                    class="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                    @click="openGallery(index)"
                  >
                    <div
                      class="w-full h-full bg-cover bg-center"
                      :style="{ backgroundImage: `url(${image})` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div ref="sidebarRef" class="fade-in-up opacity-0 sticky top-8">
              <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {{ $t('portfolio.projectDetails') }}
                </h3>

                <div class="space-y-4">
                  <div>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                      {{ $t('portfolio.client') }}
                    </span>
                    <span class="text-gray-900 dark:text-white">{{
                      project.client || 'Confidentiel'
                    }}</span>
                  </div>

                  <div>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                      {{ $t('portfolio.duration') }}
                    </span>
                    <span class="text-gray-900 dark:text-white">{{
                      project.duration || '2-3 mois'
                    }}</span>
                  </div>

                  <div>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                      {{ $t('portfolio.year') }}
                    </span>
                    <span class="text-gray-900 dark:text-white">{{ project.date }}</span>
                  </div>

                  <div>
                    <span class="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-2">
                      {{ $t('portfolio.technologies') }}
                    </span>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in project.technologies"
                        :key="tech"
                        class="px-3 py-1 bg-oozami-lightblue/10 text-oozami-lightblue text-sm rounded-full"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-oozami-lightblue to-oozami-darkblue rounded-xl p-6 text-white"
              >
                <h3 class="text-lg font-semibold mb-4">{{ $t('portfolio.interestedProject') }}</h3>
                <p class="text-white/90 mb-6 text-sm">
                  {{ $t('portfolio.interestedDescription') }}
                </p>
                <router-link
                  to="/contact"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-white text-oozami-darkblue font-semibold rounded-lg hover:bg-white/90 transition-colors duration-200 w-full justify-center"
                >
                  {{ $t('contact.badge') }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {{ $t('portfolio.relatedProjects') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t('portfolio.relatedDescription') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="relatedProject in relatedProjects"
            :key="relatedProject.id"
            class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            @click="goToProject(relatedProject.id)"
          >
            <div class="aspect-w-16 aspect-h-12 overflow-hidden">
              <div
                class="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                :style="{ backgroundImage: `url(${relatedProject.image})` }"
              ></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {{ relatedProject.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {{ relatedProject.description }}
              </p>
              <div class="flex justify-between items-center">
                <span class="text-oozami-lightblue text-sm font-medium">
                  {{ $t(`portfolio.categories.${relatedProject.category}`) }}
                </span>
                <span class="text-gray-500 text-sm">{{ relatedProject.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import portfolioImage from '@/assets/images/portfolio-placeholder.jpg'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
  fullDescription: string
  technologies: string[]
  date: string
  liveUrl?: string
  githubUrl?: string
  client?: string
  duration?: string
  challenges: string[]
  solutions: string[]
  gallery?: string[]
}

const route = useRoute()
const router = useRouter()

const heroRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const sidebarRef = ref<HTMLElement>()

const allProjects: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web-development',
    image: portfolioImage,
    description:
      "Plateforme e-commerce moderne avec Vue.js et Laravel, intégrant paiement Stripe et gestion d'inventaire.",
    fullDescription:
      "Ce projet consistait à développer une plateforme e-commerce complète pour une entreprise de mode. L'objectif était de créer une expérience utilisateur fluide avec un back-office puissant pour la gestion des produits, commandes et clients. La solution intègre des fonctionnalités avancées comme la personnalisation des produits, un système de recommandations et des outils d'analyse détaillés.",
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'Redis', 'Docker'],
    date: '2024',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    client: 'Fashion Store Inc.',
    duration: '4 mois',
    challenges: [
      "Gestion en temps réel de l'inventaire multi-entrepôts",
      'Intégration complexe avec plusieurs moyens de paiement',
      'Performance avec un catalogue de 10000+ produits',
      'Système de recommandations personnalisées',
    ],
    solutions: [
      'Architecture microservices avec cache Redis',
      'API unifiée pour les paiements avec Stripe Connect',
      'Optimisation base de données et lazy loading',
      'Machine learning pour les recommandations',
    ],
    gallery: [portfolioImage, portfolioImage, portfolioImage, portfolioImage],
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'graphic',
    image: portfolioImage,
    description:
      "Création complète d'identité visuelle pour une startup tech, incluant logo, charte graphique et supports.",
    fullDescription:
      "Projet de création d'identité visuelle complète pour une startup spécialisée dans l'IA. Le défi était de créer une image moderne et professionnelle tout en restant accessible. Le travail a inclus la recherche créative, la conception du logo, la définition de la charte graphique et la déclinaison sur tous les supports de communication.",
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'After Effects'],
    date: '2024',
    client: 'AI Startup',
    duration: '2 mois',
    challenges: [
      'Traduire des concepts techniques complexes en visuel',
      'Créer une identité distinctive dans un marché saturé',
      'Assurer la cohérence sur tous les supports digitaux et print',
    ],
    solutions: [
      "Workshops créatifs avec l'équipe pour définir les valeurs",
      "Système d'identité modulaire et évolutif",
      'Guidelines détaillées et templates réutilisables',
    ],
  },
]

const projectId = computed(() => parseInt(route.params.id as string))
const project = computed(() => allProjects.find((p) => p.id === projectId.value) || allProjects[0])

const relatedProjects = computed(() => {
  return allProjects
    .filter((p) => p.id !== project.value.id && p.category === project.value.category)
    .slice(0, 3)
})

const goToProject = (id: number) => {
  router.push(`/portfolio/${id}`)
}

const openGallery = (index: number) => {
  console.log('Ouvrir galerie image', index)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          setTimeout(() => element.classList.add('animate-in'), 100)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  if (heroRef.value) observer.observe(heroRef.value)
  if (contentRef.value) observer.observe(contentRef.value)
  if (sidebarRef.value) observer.observe(sidebarRef.value)
})
</script>

<style scoped>
.fade-in-down {
  transform: translateY(-40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-up {
  transform: translateY(40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-down.animate-in,
.fade-in-up.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.aspect-w-16 > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.prose li {
  margin: 0.5rem 0;
}

.prose h3 {
  color: inherit;
}
</style>
