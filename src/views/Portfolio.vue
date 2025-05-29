<template>
  <div class="portfolio-page">
    <PageHeader
      :title="$t('portfolio.pageTitle')"
      :description="$t('portfolio.pageDescription')"
      :badge="$t('portfolio.badge')"
      :stats="headerStats"
      :breadcrumbs="breadcrumbs"
    />

    <section class="portfolio-section py-16 md:py-20 transition-all duration-300">
      <div class="container mx-auto px-4 max-w-7xl lg:px-0">
        <div ref="filtersRef" class="fade-in-down opacity-0 mb-12">
          <div class="flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              v-for="filter in filters"
              :key="filter.key"
              @click="filterItems(filter.key)"
              :class="[
                'px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105',
                activeFilter === filter.key
                  ? 'bg-oozami-lightblue text-white shadow-lg'
                  : ' hover:bg-oozami-lightblue text-oozami-lightblue hover:text-white border border-oozami-lightblue/50 hover:border-oozami-lightblue transition-all duration-300',
              ]"
            >
              {{ $t(`portfolio.filters.${filter.key}`) }}
              <span v-if="filter.key === 'all'" class="ml-2 text-xs opacity-75"
                >({{ totalProjects }})</span
              >
              <span v-else class="ml-2 text-xs opacity-75"
                >({{ getCategoryCount(filter.key) }})</span
              >
            </button>
          </div>
        </div>

        <div class="text-center mb-8">
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            {{ filteredCount }} {{ $t('portfolio.resultsText') }}
            <span class="font-semibold text-oozami-lightblue">
              "{{
                activeFilter === 'all'
                  ? $t('portfolio.filters.all')
                  : $t(`portfolio.filters.${activeFilter}`)
              }}"
            </span>
          </p>
        </div>

        <div ref="gridRef" class="portfolio-grid">
          <div class="grid-sizer"></div>
          <div
            v-for="item in portfolioItems"
            :key="item.id"
            :class="['portfolio-item', item.category]"
            :data-category="item.category"
          >
            <div
              class="portfolio-item-content relative group overflow-hidden rounded-xl cursor-pointer bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div
                class="image-container group-hover:scale-110 transition-transform duration-700"
                :style="{ backgroundImage: `url(${item.image})` }"
              ></div>

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <div
                class="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <div
                  class="absolute top-4 right-4 px-3 py-1.5 bg-oozami-lightblue/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
                >
                  <span class="text-white text-xs font-medium">
                    {{ $t(`portfolio.categories.${item.category}`) }}
                  </span>
                </div>

                <div
                  class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                >
                  <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                  <p class="text-sm text-white/90 mb-3 line-clamp-2">{{ item.description }}</p>

                  <div class="flex flex-wrap gap-1.5 mb-4">
                    <span
                      v-for="tech in item.technologies"
                      :key="tech"
                      class="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <router-link
                        :to="`/portfolio/${item.id}`"
                        class="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
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
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span class="text-sm">{{ $t('portfolio.view') }}</span>
                      </router-link>
                      <a
                        v-if="item.liveUrl"
                        :href="item.liveUrl"
                        target="_blank"
                        class="flex items-center gap-2 px-4 py-2 bg-oozami-lightblue hover:bg-oozami-lightblue/80 rounded-lg transition-colors duration-200"
                      >
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
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                        <span class="text-sm">{{ $t('portfolio.live') }}</span>
                      </a>
                    </div>

                    <div class="flex items-center gap-2 text-sm text-white/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"
                        />
                      </svg>
                      {{ item.date }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="hasMoreItems" class="text-center mt-12">
          <button
            @click="loadMoreItems"
            :disabled="isLoading"
            class="group inline-flex items-center px-8 py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">{{ $t('portfolio.loadMore') }}</span>
            <span v-else class="flex items-center gap-2">
              <svg
                class="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {{ $t('portfolio.loading') }}
            </span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Isotope from 'isotope-layout'
import portfolioImage from '@/assets/images/portfolio-placeholder.jpg'
import PageHeader from '@/components/PageHeader.vue'

const { t } = useI18n()

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  date: string
  liveUrl?: string
  githubUrl?: string
  imageError?: boolean
}

const heroRef = ref<HTMLElement>()
const filtersRef = ref<HTMLElement>()
const gridRef = ref<HTMLElement>()

const activeFilter = ref('all')
const isLoading = ref(false)
const itemsPerPage = 12
const currentPage = ref(1)

let isotope: Isotope | null = null

const filters = [
  { key: 'all' },
  { key: 'web-development' },
  { key: 'web-design' },
  { key: 'graphic' },
  { key: 'mobile' },
]

const breadcrumbs = computed(() => [
  {
    label: t('breadcrumb.home'),
    path: '/',
  },
  {
    label: t('breadcrumb.portfolio'),
    path: '/portfolio',
    active: true,
  },
])

const headerStats = computed(() => [
  { value: `${totalProjects.value}+`, label: t('portfolio.stats.projects') },
  { value: totalCategories.value, label: t('portfolio.stats.categories') },
  { value: '100%', label: t('portfolio.stats.satisfaction') },
])

const allPortfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web-development',
    image: portfolioImage,
    description:
      "Plateforme e-commerce moderne avec Vue.js et Laravel, intégrant paiement Stripe et gestion d'inventaire.",
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
    date: '2024',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'graphic',
    image: portfolioImage,
    description:
      "Création complète d'identité visuelle pour une startup tech, incluant logo, charte graphique et supports.",
    technologies: ['Figma', 'Illustrator', 'Photoshop'],
    date: '2024',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'web-development',
    image: portfolioImage,
    description:
      "Interface d'administration pour SaaS avec analytics temps réel et gestion multi-tenant.",
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    date: '2024',
    liveUrl: 'https://example.com',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'mobile',
    image: portfolioImage,
    description:
      'Application mobile bancaire avec authentification biométrique et transactions sécurisées.',
    technologies: ['React Native', 'Firebase', 'Biometrics'],
    date: '2023',
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'web-design',
    image: portfolioImage,
    description:
      'Site vitrine corporate responsive avec CMS personnalisé et optimisations SEO avancées.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    date: '2024',
    liveUrl: 'https://example.com',
  },
  {
    id: 6,
    title: 'Logo Collection',
    category: 'graphic',
    image: portfolioImage,
    description:
      'Collection de logos pour diverses industries, alliant créativité et fonctionnalité.',
    technologies: ['Illustrator', 'Figma'],
    date: '2024',
  },
  {
    id: 7,
    title: 'Food Delivery App',
    category: 'mobile',
    image: portfolioImage,
    description: 'Application de livraison de nourriture avec géolocalisation et paiement intégré.',
    technologies: ['Flutter', 'Firebase', 'Google Maps'],
    date: '2023',
    liveUrl: 'https://example.com',
  },
  {
    id: 8,
    title: 'Portfolio Website',
    category: 'web-design',
    image: portfolioImage,
    description:
      'Site portfolio créatif avec animations CSS avancées et optimisations performance.',
    technologies: ['Vue.js', 'GSAP', 'Tailwind'],
    date: '2024',
  },
  ...Array.from({ length: 16 }, (_, i) => ({
    id: i + 9,
    title: `Project ${i + 9}`,
    category: ['web-development', 'web-design', 'graphic', 'mobile'][i % 4],
    image: portfolioImage,
    description: `Description détaillée du projet ${i + 9} avec ses spécificités techniques et créatives.`,
    technologies: ['Vue.js', 'TypeScript', 'Tailwind'][Math.floor(Math.random() * 3)]
      ? ['Vue.js', 'TypeScript']
      : ['React', 'Node.js'],
    date: '2024',
    liveUrl: Math.random() > 0.5 ? 'https://example.com' : undefined,
  })),
]

const portfolioItems = ref<PortfolioItem[]>([])

const totalProjects = computed(() => allPortfolioItems.length)
const totalCategories = computed(() => filters.length - 1)

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') {
    return allPortfolioItems
  }
  return allPortfolioItems.filter((item) => item.category === activeFilter.value)
})

const filteredCount = computed(() => filteredItems.value.length)

const hasMoreItems = computed(() => {
  return portfolioItems.value.length < filteredItems.value.length
})

const getCategoryCount = (category: string) => {
  return allPortfolioItems.filter((item) => item.category === category).length
}

const handleImageLoad = () => {
  if (isotope) {
    setTimeout(() => {
      isotope?.layout()
    }, 50)
  }
}

const handleImageError = (event: Event, item: PortfolioItem) => {
  console.warn(`Erreur chargement image pour ${item.title}`)
  item.imageError = true
}

const filterItems = (filterKey: string) => {
  activeFilter.value = filterKey
  currentPage.value = 1

  const itemsToShow = filteredItems.value.slice(0, itemsPerPage)
  portfolioItems.value = itemsToShow

  nextTick(() => {
    if (isotope) {
      isotope.reloadItems()

      if (filterKey === 'all') {
        isotope.arrange({ filter: '*' })
      } else {
        isotope.arrange({ filter: `.${filterKey}` })
      }

      setTimeout(() => {
        if (isotope) {
          isotope.layout()
        }
      }, 100)
    }
  })
}

const loadMoreItems = async () => {
  isLoading.value = true

  await new Promise((resolve) => setTimeout(resolve, 800))

  const startIndex = currentPage.value * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const newItems = filteredItems.value.slice(startIndex, endIndex)

  portfolioItems.value.push(...newItems)
  currentPage.value++

  await nextTick()

  if (isotope) {
    isotope.reloadItems()

    const newImages = gridRef.value?.querySelectorAll('.portfolio-item:last-child img')
    if (newImages && newImages.length > 0) {
      let loadedCount = 0
      const totalNew = newImages.length

      const onImageLoad = () => {
        loadedCount++
        if (loadedCount === totalNew) {
          if (isotope) {
            isotope.layout()
          }
        }
      }

      newImages.forEach((img) => {
        if (img.complete) {
          onImageLoad()
        } else {
          img.addEventListener('load', onImageLoad)
          img.addEventListener('error', onImageLoad)
        }
      })
    } else {
      setTimeout(() => {
        if (isotope) {
          isotope.layout()
        }
      }, 100)
    }
  }

  isLoading.value = false
}

const initIsotope = () => {
  if (gridRef.value) {
    const images = gridRef.value.querySelectorAll('img')
    let loadedImages = 0
    const totalImages = images.length

    const checkImagesLoaded = () => {
      loadedImages++
      if (loadedImages === totalImages || totalImages === 0) {
        createIsotopeInstance()
      }
    }

    const createIsotopeInstance = () => {
      isotope = new Isotope(gridRef.value, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        fitRows: {
          gutter: 24,
        },
        transitionDuration: '0.6s',
        stagger: 30,
        hiddenStyle: {
          opacity: 0,
          transform: 'scale(0.9)',
        },
        visibleStyle: {
          opacity: 1,
          transform: 'scale(1)',
        },
      })

      setTimeout(() => {
        if (isotope) {
          isotope.layout()
        }
      }, 100)

      setTimeout(() => {
        if (isotope) {
          isotope.layout()
        }
      }, 500)
    }

    if (totalImages === 0) {
      createIsotopeInstance()
    } else {
      images.forEach((img) => {
        if (img.complete) {
          checkImagesLoaded()
        } else {
          img.addEventListener('load', checkImagesLoaded)
          img.addEventListener('error', checkImagesLoaded)
        }
      })
    }
  }
}

onMounted(() => {
  portfolioItems.value = allPortfolioItems.slice(0, itemsPerPage)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          if (element === heroRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 100)
          } else if (element === filtersRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 300)
          } else if (element === gridRef.value) {
            setTimeout(() => {
              nextTick(() => {
                initIsotope()
              })
            }, 200)
          }

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    },
  )

  if (heroRef.value) observer.observe(heroRef.value)
  if (filtersRef.value) observer.observe(filtersRef.value)
  if (gridRef.value) observer.observe(gridRef.value)

  setTimeout(() => {
    if (isotope) {
      isotope.layout()
    }
  }, 1000)
})

onUnmounted(() => {
  if (isotope) {
    isotope.destroy()
  }
})
</script>

<style scoped>
.fade-in-down {
  transform: translateY(-40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-down.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.portfolio-grid {
  position: relative;
  min-height: 200px;
}

.grid-sizer,
.portfolio-item {
  width: 100%;
  min-height: 350px;
}

@media (min-width: 640px) {
  .grid-sizer,
  .portfolio-item {
    width: calc(50% - 12px);
  }
}

@media (min-width: 1024px) {
  .grid-sizer,
  .portfolio-item {
    width: calc(33.333% - 16px);
  }
}

@media (min-width: 1280px) {
  .grid-sizer,
  .portfolio-item {
    width: calc(25% - 18px);
  }
}

.portfolio-item {
  margin-bottom: 24px;
  float: left;
  clear: none;
}

.portfolio-item-content {
  transform: scale(1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 350px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
}

.portfolio-item-content:hover {
  transform: scale(1.02);
}

.image-container {
  position: relative;
  width: 100%;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 250px;
}

.portfolio-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.portfolio-grid::after {
  content: '';
  display: block;
  clear: both;
}
</style>
