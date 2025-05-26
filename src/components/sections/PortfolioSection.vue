<template>
  <section
    class="portfolio-section py-10 md:py-16 lg:py-20 bg-gray-100 dark:bg-oozami-lightblue/5 transition-all duration-300"
  >
    <div class="container mx-auto px-4 max-w-7xl lg:px-0">
      <div ref="headerRef" class="fade-in-down opacity-0 mb-10 md:mb-16">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <div class="flex items-center gap-2 mb-3 md:mb-4">
              <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
              <span
                class="uppercase text-oozami-lightblue text-xs sm:text-sm md:text-base font-medium tracking-wider"
              >
                {{ $t('portfolio.badge') }}
              </span>
              <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
            </div>

            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-oozami-black dark:text-white mb-3 md:mb-4 transition-all duration-300"
            >
              {{ $t('portfolio.title') }}
            </h2>
          </div>

          <button
            class="group inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl text-sm sm:text-base"
          >
            {{ $t('portfolio.seeMore') }}
          </button>
        </div>

        <div ref="filtersRef" class="fade-in-down opacity-0 mt-8 flex flex-wrap gap-3 md:gap-4">
          <button
            v-for="filter in filters"
            :key="filter.key"
            @click="filterItems(filter.key)"
            :class="[
              'px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300',
              activeFilter === filter.key
                ? 'bg-oozami-lightblue text-white'
                : 'bg-transparent hover:bg-oozami-lightblue text-oozami-lightblue hover:text-white border border-oozami-lightblue hover:border-oozami-lightblue transition-all duration-300',
            ]"
          >
            {{ $t(`portfolio.filters.${filter.key}`) }}
          </button>
        </div>
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
            class="portfolio-item-content relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <div class="aspect-w-16 aspect-h-12 overflow-hidden">
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
            </div>

            <div
              class="absolute inset-x-0 bottom-0 h-0 group-hover:h-12 bg-oozami-lightblue/70 backdrop-blur-sm transition-all duration-300 ease-out flex items-center justify-between px-6"
            >
              <h3
                class="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"
              >
                {{ item.title }}
              </h3>
              <div
                class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>

            <div
              class="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span class="text-white text-sm">
                {{ $t(`portfolio.categories.${item.category}`) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Isotope from 'isotope-layout'
import portfolioImage from '@/assets/images/portfolio-placeholder.jpg'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
}

const headerRef = ref<HTMLElement>()
const filtersRef = ref<HTMLElement>()
const gridRef = ref<HTMLElement>()

const activeFilter = ref('all')
let isotope: Isotope | null = null

const filters = [
  { key: 'all' },
  { key: 'web-development' },
  { key: 'web-design' },
  { key: 'graphic' },
]

const portfolioItems = ref<PortfolioItem[]>([
  {
    id: 1,
    title: 'Project Alpha',
    category: 'web-development',
    image: portfolioImage,
  },
  {
    id: 2,
    title: 'Brand Design',
    category: 'graphic',
    image: portfolioImage,
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'web-development',
    image: portfolioImage,
  },
  {
    id: 4,
    title: 'UI/UX Dashboard',
    category: 'web-design',
    image: portfolioImage,
  },
  {
    id: 5,
    title: 'Mobile App',
    category: 'web-design',
    image: portfolioImage,
  },
  {
    id: 6,
    title: 'Logo Design',
    category: 'graphic',
    image: portfolioImage,
  },
])

const filterItems = (filterKey: string) => {
  activeFilter.value = filterKey

  if (isotope) {
    if (filterKey === 'all') {
      isotope.arrange({ filter: '*' })
    } else {
      isotope.arrange({ filter: `.${filterKey}` })
    }
  }
}

const initIsotope = () => {
  if (gridRef.value) {
    isotope = new Isotope(gridRef.value, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
      percentPosition: true,
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
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          if (element === headerRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 100)
          } else if (element === filtersRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 300)
          } else if (element === gridRef.value) {
            nextTick(() => {
              initIsotope()
            })
          }

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (filtersRef.value) observer.observe(filtersRef.value)
  if (gridRef.value) observer.observe(gridRef.value)
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
}

.grid-sizer,
.portfolio-item {
  width: 100%;
}

@media (min-width: 768px) {
  .grid-sizer,
  .portfolio-item {
    width: 48.5%;
  }
}

@media (min-width: 1024px) {
  .grid-sizer,
  .portfolio-item {
    width: 31.66%;
  }
}

.portfolio-item {
  margin-bottom: 24px;
}

.portfolio-item {
  opacity: 1;
}

.portfolio-item-content {
  transform: scale(1);
  transition: transform 0.3s ease;
}

.portfolio-item-content:hover {
  transform: scale(1.05);
}

.aspect-w-16 {
  position: relative;
  padding-bottom: 75%;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
