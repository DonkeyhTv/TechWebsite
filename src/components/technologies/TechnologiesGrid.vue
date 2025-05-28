<template>
  <section
    class="technologies-section py-16 md:py-20 bg-white dark:bg-oozami-darkblue transition-colors duration-300"
  >
    <div class="container mx-auto px-4 max-w-7xl">
      <div ref="headerRef" class="fade-in-down opacity-0 text-center mb-12 md:mb-16">
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
          <span
            class="uppercase text-oozami-lightblue text-sm md:text-base font-medium tracking-wider"
          >
            {{ $t('technologies.badge') }}
          </span>
          <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
        </div>

        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-oozami-black dark:text-white mb-4"
        >
          {{ $t('technologies.subtitle') }}
        </h2>

        <p class="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
          {{ $t('technologies.description') }}
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.id"
          ref="techRefs"
          class="tech-card opacity-0"
        >
          <div
            class="bg-oozami-lightblue/5 rounded-xl p-6 h-full flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div class="w-20 h-20 mb-4 flex items-center justify-center relative">
              <!-- Option 1: Devicons (priorité) -->
              <i
                v-if="tech.devicon"
                :class="`${tech.devicon} text-5xl group-hover:scale-110 transition-transform duration-300`"
              ></i>

              <!-- Option 2: Simple Icons via CDN -->
              <div
                v-else-if="tech.simpleIcon"
                class="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
              >
                <img
                  :src="`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tech.simpleIcon}.svg`"
                  :alt="tech.name"
                  class="w-full h-full object-contain"
                  :class="{ 'filter-icon': !tech.color }"
                  :style="
                    tech.color
                      ? { filter: `brightness(0) saturate(100%) ${getColorFilter(tech.color)}` }
                      : {}
                  "
                  @error="handleImageError($event, tech)"
                />
              </div>

              <!-- Option 3: Image locale (fallback) -->
              <img
                v-else-if="tech.img"
                :src="`/assets/images/technos/${tech.img}`"
                :alt="tech.name"
                class="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                @error="handleImageError($event, tech)"
              />

              <div
                v-else
                class="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-2xl text-gray-500 dark:text-gray-400">
                  {{ tech.name.charAt(0).toUpperCase() }}
                </span>
              </div>
            </div>

            <h3
              class="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-oozami-lightblue transition-colors"
            >
              {{ tech.name }}
            </h3>
          </div>
        </div>
      </div>

      <div v-if="loading" class="text-center py-12">
        <div class="inline-flex items-center gap-3">
          <svg
            class="animate-spin h-8 w-8 text-oozami-lightblue"
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
          <span class="text-gray-600 dark:text-gray-300">{{ $t('common.loading') }}</span>
        </div>
      </div>

      <div v-if="error" class="text-center py-12">
        <p class="text-red-500">{{ error }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Technology {
  id: number
  name: string
  img?: string
  devicon?: string
  simpleIcon?: string
  color?: string
  hasError?: boolean
}

const headerRef = ref<HTMLElement>()
const techRefs = ref<HTMLElement[]>([])
const loading = ref(true)
const error = ref('')

const getColorFilter = (hexColor: string) => {
  const colorMap: { [key: string]: string } = {
    '#646CFF':
      'invert(42%) sepia(93%) saturate(1352%) hue-rotate(215deg) brightness(119%) contrast(119%)',
    '#00DC82':
      'invert(69%) sepia(78%) saturate(2834%) hue-rotate(116deg) brightness(101%) contrast(101%)',
    '#FF3E00':
      'invert(24%) sepia(95%) saturate(1352%) hue-rotate(354deg) brightness(119%) contrast(119%)',
  }

  return colorMap[hexColor] || ''
}

const handleImageError = (event: Event, tech: Technology) => {
  console.warn(`Erreur de chargement pour ${tech.name}`)
  tech.hasError = true
}

const technologies = ref<Technology[]>([
  // Frontend
  { id: 1, name: 'Vue.js', devicon: 'devicon-vuejs-plain colored' },
  { id: 2, name: 'React', devicon: 'devicon-react-original colored' },
  { id: 3, name: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
  { id: 4, name: 'JavaScript', devicon: 'devicon-javascript-plain colored' },
  { id: 5, name: 'Tailwind CSS', devicon: 'devicon-tailwindcss-plain colored' },
  { id: 6, name: 'Sass', devicon: 'devicon-sass-original colored' },

  // Avec Simple Icons
  { id: 18, name: 'Vite', simpleIcon: 'vite', color: '#646CFF' },
  { id: 19, name: 'Next.js', simpleIcon: 'nextdotjs', color: '#000000' },
  { id: 20, name: 'Svelte', simpleIcon: 'svelte', color: '#FF3E00' },
  { id: 21, name: 'Vercel', simpleIcon: 'vercel', color: '#000000' },

  // Backend
  { id: 7, name: 'PHP', devicon: 'devicon-php-plain colored' },
  { id: 8, name: 'Laravel', devicon: 'devicon-laravel-plain colored' },
  { id: 9, name: 'Node.js', devicon: 'devicon-nodejs-plain colored' },
  { id: 10, name: 'Python', devicon: 'devicon-python-plain colored' },

  // Database
  { id: 11, name: 'MySQL', devicon: 'devicon-mysql-plain colored' },
  { id: 12, name: 'MongoDB', devicon: 'devicon-mongodb-plain colored' },
  { id: 13, name: 'PostgreSQL', devicon: 'devicon-postgresql-plain colored' },

  // Tools
  { id: 14, name: 'Git', devicon: 'devicon-git-plain colored' },
  { id: 15, name: 'Docker', devicon: 'devicon-docker-plain colored' },
  { id: 16, name: 'VS Code', devicon: 'devicon-vscode-plain colored' },
  { id: 17, name: 'Figma', devicon: 'devicon-figma-plain colored' },
])

const fetchTechnologies = async () => {
  try {
    const response = await fetch('https://steve-amissi.be/api/api.php?type=oozami&table=technos')
    if (!response.ok) throw new Error('Erreur de chargement')

    const data = await response.json()
    if (data && data.length > 0) {
      technologies.value = data
    }
  } catch (err) {
    console.error('Erreur:', err)
  } finally {
    loading.value = false
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

  const techObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          setTimeout(() => {
            element.classList.add('animate-tech')
          }, index * 50)

          techObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px',
    },
  )

  if (headerRef.value) observer.observe(headerRef.value)

  techRefs.value.forEach((ref) => {
    if (ref) techObserver.observe(ref)
  })

  // Décommentez pour charger depuis l'API
  // fetchTechnologies()
  loading.value = false
})
</script>

<style scoped>
.fade-in-down {
  transform: translateY(-30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-down.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.tech-card {
  transform: translateY(20px) scale(0.95);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card.animate-tech {
  opacity: 1 !important;
  transform: translateY(0) scale(1);
}

.tech-card:hover {
  transform: translateY(-5px);
}

.filter-icon {
  filter: brightness(0) saturate(100%) invert(50%);
}

.dark .filter-icon {
  filter: brightness(0) saturate(100%) invert(100%);
}

img[src*='simple-icons']:not([src]) {
  display: none;
}
</style>
