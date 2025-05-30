<template>
  <div class="about-page">
    <PageHeader
      :title="$t('aboutPage.pageTitle')"
      :description="$t('aboutPage.pageDescription')"
      :badge="$t('aboutPage.badge')"
      :breadcrumbs="breadcrumbs"
    />

    <section
      class="py-12 md:py-16 lg:py-20 bg-white dark:bg-oozami-darkblue transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div ref="contentRef" class="fade-in-up opacity-0 order-2 lg:order-1">
              <h2
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-center lg:text-left leading-tight"
              >
                {{ $t('aboutPage.hero.title') }}
              </h2>
              <p
                class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
              >
                {{ $t('aboutPage.hero.description') }}
              </p>

              <div class="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
                <div
                  class="text-center bg-oozami-lightblue/5 dark:bg-oozami-lightblue/10 rounded-xl py-4 md:py-6 border border-oozami-lightblue/10"
                >
                  <div
                    class="text-2xl sm:text-3xl md:text-4xl font-bold text-oozami-lightblue mb-1 md:mb-2"
                  >
                    {{ yearsExperience }}+
                  </div>
                  <div
                    class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 px-2 font-medium"
                  >
                    {{ $t('aboutPage.stats.yearsExperience') }}
                  </div>
                </div>
                <div
                  class="text-center bg-oozami-lightblue/5 dark:bg-oozami-lightblue/10 rounded-xl py-4 md:py-6 border border-oozami-lightblue/10"
                >
                  <div
                    class="text-2xl sm:text-3xl md:text-4xl font-bold text-oozami-lightblue mb-1 md:mb-2"
                  >
                    {{ projectsCompleted }}+
                  </div>
                  <div
                    class="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 px-2 font-medium"
                  >
                    {{ $t('aboutPage.stats.projectsCompleted') }}
                  </div>
                </div>
              </div>

              <div class="text-center lg:text-left">
                <router-link
                  to="/contact"
                  class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-oozami-lightblue text-white font-semibold rounded-lg hover:bg-oozami-lightblue/90 transition-colors duration-200 w-full sm:w-auto justify-center text-sm md:text-base"
                >
                  {{ $t('aboutPage.hero.cta') }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </router-link>
              </div>
            </div>

            <div class="fade-in-up opacity-0 delay-200 order-1 lg:order-2">
              <div class="relative">
                <div class="bg-oozami-lightblue/10 rounded-2xl p-4 md:p-6 lg:p-8">
                  <div class="grid grid-cols-2 gap-3 md:gap-4">
                    <div
                      class="bg-transparent dark:bg-transparent border border-oozami-lightblue/20 rounded-lg p-3 md:p-4 lg:p-5 transition-shadow"
                    >
                      <div
                        class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-lg flex items-center justify-center mb-2 md:mb-3"
                      >
                        <i class="fas fa-code text-white text-xs md:text-sm"></i>
                      </div>
                      <h4
                        class="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base"
                      >
                        {{ $t('aboutPage.skills.development') }}
                      </h4>
                      <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        Web & Mobile
                      </p>
                    </div>
                    <div
                      class="bg-transparent dark:bg-transparent border border-oozami-lightblue/20 rounded-lg p-3 md:p-4 lg:p-5 transition-shadow"
                    >
                      <div
                        class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-lg flex items-center justify-center mb-2 md:mb-3"
                      >
                        <i class="fas fa-palette text-white text-xs md:text-sm"></i>
                      </div>
                      <h4
                        class="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base"
                      >
                        {{ $t('aboutPage.skills.design') }}
                      </h4>
                      <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        UI/UX Design
                      </p>
                    </div>
                    <div
                      class="bg-transparent dark:bg-transparent border border-oozami-lightblue/20 rounded-lg p-3 md:p-4 lg:p-5 transition-shadow"
                    >
                      <div
                        class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-lg flex items-center justify-center mb-2 md:mb-3"
                      >
                        <i class="fas fa-chart-line text-white text-xs md:text-sm"></i>
                      </div>
                      <h4
                        class="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base"
                      >
                        {{ $t('aboutPage.skills.marketing') }}
                      </h4>
                      <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        Digital Marketing
                      </p>
                    </div>
                    <div
                      class="bg-transparent dark:bg-transparent border border-oozami-lightblue/20 rounded-lg p-3 md:p-4 lg:p-5 transition-shadow"
                    >
                      <div
                        class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-lg flex items-center justify-center mb-2 md:mb-3"
                      >
                        <i class="fas fa-cloud text-white text-xs md:text-sm"></i>
                      </div>
                      <h4
                        class="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base"
                      >
                        {{ $t('aboutPage.skills.cloud') }}
                      </h4>
                      <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        Cloud Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-oozami-lightblue/5 transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12 md:mb-16">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-oozami-lightblue/10 text-oozami-lightblue rounded-full text-sm font-medium mb-4"
            >
              <i class="fas fa-heart"></i>
              {{ $t('aboutPage.mission.badge') }}
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
            >
              {{ $t('aboutPage.mission.title') }}
            </h2>
            <p
              class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              {{ $t('aboutPage.mission.description') }}
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              v-for="(value, index) in values"
              :key="value.id"
              class="fade-in-up opacity-0 text-center bg-white dark:bg-oozami-lightblue/10 rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div
                class="w-12 h-12 md:w-16 md:h-16 bg-oozami-lightblue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6"
              >
                <i :class="value.icon" class="text-white text-lg md:text-2xl"></i>
              </div>
              <h3
                class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4"
              >
                {{ $t(`aboutPage.values.${value.id}.title`) }}
              </h3>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t(`aboutPage.values.${value.id}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-12 md:py-16 lg:py-20 bg-white dark:bg-oozami-darkblue transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12 md:mb-16">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-oozami-lightblue/10 text-oozami-lightblue rounded-full text-sm font-medium mb-4"
            >
              <i class="fas fa-cogs"></i>
              {{ $t('aboutPage.process.badge') }}
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
            >
              {{ $t('aboutPage.process.title') }}
            </h2>
            <p
              class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              {{ $t('aboutPage.process.description') }}
            </p>
          </div>

          <div class="space-y-6 md:space-y-8">
            <div
              v-for="(step, index) in processSteps"
              :key="step.id"
              class="fade-in-up opacity-0 flex flex-col md:flex-row items-start gap-4 md:gap-6"
              :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
            >
              <div class="flex-shrink-0 mx-auto md:mx-0">
                <div
                  class="w-12 h-12 md:w-16 md:h-16 bg-oozami-lightblue rounded-full flex items-center justify-center shadow-lg"
                >
                  <span class="text-white font-bold text-lg md:text-xl">{{ index + 1 }}</span>
                </div>
              </div>

              <div
                class="flex-1 bg-gray-50 dark:bg-oozami-lightblue/5 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  class="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3 md:mb-4 text-center sm:text-left"
                >
                  <i
                    :class="step.icon"
                    class="text-oozami-lightblue text-lg md:text-xl flex-shrink-0"
                  ></i>
                  <h3
                    class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {{ $t(`aboutPage.process.steps.${step.id}.title`) }}
                  </h3>
                </div>
                <p
                  class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center sm:text-left"
                >
                  {{ $t(`aboutPage.process.steps.${step.id}.description`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-oozami-lightblue/5 transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12 md:mb-16">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-oozami-lightblue/10 text-oozami-lightblue rounded-full text-sm font-medium mb-4"
            >
              <i class="fas fa-users"></i>
              {{ $t('aboutPage.team.badge') }}
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
            >
              {{ $t('aboutPage.team.title') }}
            </h2>
            <p
              class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              {{ $t('aboutPage.team.description') }}
            </p>
          </div>

          <div class="space-y-6 md:space-y-8">
            <div
              class="bg-white dark:bg-oozami-lightblue/5 rounded-2xl p-6 md:p-8 transition-shadow"
            >
              <div class="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <div class="flex-shrink-0">
                  <div
                    class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-oozami-lightblue rounded-full flex items-center justify-center"
                  >
                    <i class="fas fa-user text-white text-2xl md:text-4xl"></i>
                  </div>
                </div>
                <div class="flex-1 text-center sm:text-left">
                  <h3
                    class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {{ $t('aboutPage.founder.name') }}
                  </h3>
                  <p
                    class="text-oozami-lightblue font-medium mb-3 md:mb-4 text-sm md:text-base lg:text-lg"
                  >
                    {{ $t('aboutPage.founder.title') }}
                  </p>
                  <p
                    class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 max-w-2xl mx-auto sm:mx-0"
                  >
                    {{ $t('aboutPage.founder.description') }}
                  </p>
                  <div class="flex justify-center sm:justify-start gap-3 md:gap-4">
                    <a
                      href="#"
                      class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-full flex items-center justify-center text-white hover:bg-oozami-lightblue/90 transition-colors hover:scale-110 transform"
                    >
                      <i class="fab fa-linkedin-in text-xs md:text-sm"></i>
                    </a>
                    <a
                      href="#"
                      class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-full flex items-center justify-center text-white hover:bg-oozami-lightblue/90 transition-colors hover:scale-110 transform"
                    >
                      <i class="fab fa-github text-xs md:text-sm"></i>
                    </a>
                    <a
                      href="#"
                      class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-full flex items-center justify-center text-white hover:bg-oozami-lightblue/90 transition-colors hover:scale-110 transform"
                    >
                      <i class="fab fa-twitter text-xs md:text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-white dark:bg-oozami-lightblue/5 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div class="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <div class="flex-shrink-0">
                  <div
                    class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-oozami-lightblue rounded-full flex items-center justify-center"
                  >
                    <i class="fas fa-user text-white text-2xl md:text-4xl"></i>
                  </div>
                </div>
                <div class="flex-1 text-center sm:text-left">
                  <h3
                    class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    {{ $t('aboutPage.founder.name') }}
                  </h3>
                  <p
                    class="text-oozami-lightblue font-medium mb-3 md:mb-4 text-sm md:text-base lg:text-lg"
                  >
                    {{ $t('aboutPage.founder.title') }}
                  </p>
                  <p
                    class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6 max-w-2xl mx-auto sm:mx-0"
                  >
                    {{ $t('aboutPage.founder.description') }}
                  </p>
                  <div class="flex justify-center sm:justify-start gap-3 md:gap-4">
                    <a
                      href="#"
                      class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-full flex items-center justify-center text-white hover:bg-oozami-lightblue/90 transition-colors hover:scale-110 transform"
                    >
                      <i class="fab fa-linkedin-in text-xs md:text-sm"></i>
                    </a>
                    <a
                      href="#"
                      class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-full flex items-center justify-center text-white hover:bg-oozami-lightblue/90 transition-colors hover:scale-110 transform"
                    >
                      <i class="fab fa-github text-xs md:text-sm"></i>
                    </a>
                    <a
                      href="#"
                      class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-full flex items-center justify-center text-white hover:bg-oozami-lightblue/90 transition-colors hover:scale-110 transform"
                    >
                      <i class="fab fa-twitter text-xs md:text-sm"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16 lg:py-20 bg-oozami-lightblue/10 dark:bg-oozami-darkblue">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
          >
            {{ $t('aboutPage.cta.title') }}
          </h2>
          <p
            class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            {{ $t('aboutPage.cta.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <router-link
              to="/contact"
              class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-oozami-lightblue text-white font-semibold rounded-lg hover:bg-oozami-lightblue/90 transition-all duration-200 justify-center text-sm md:text-base hover:scale-105 transform"
            >
              {{ $t('aboutPage.cta.primary') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 md:w-5 md:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </router-link>
            <router-link
              to="/portfolio"
              class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-transparent text-oozami-lightblue border border-oozami-lightblue font-semibold rounded-lg hover:bg-oozami-lightblue hover:text-white transition-all duration-200 justify-center text-sm md:text-base hover:scale-105 transform"
            >
              {{ $t('aboutPage.cta.secondary') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'

const { t } = useI18n()

const contentRef = ref<HTMLElement>()
const yearsExperience = ref(5)
const projectsCompleted = ref(150)

const breadcrumbs = computed(() => [
  {
    label: t('breadcrumb.home'),
    path: '/',
  },
  {
    label: t('breadcrumb.about'),
    path: '/about',
    active: true,
  },
])

const values = [
  { id: 'innovation', icon: 'fas fa-lightbulb' },
  { id: 'quality', icon: 'fas fa-award' },
  { id: 'support', icon: 'fas fa-headset' },
]

const processSteps = [
  { id: 'discovery', icon: 'fas fa-search' },
  { id: 'strategy', icon: 'fas fa-chess' },
  { id: 'design', icon: 'fas fa-pencil-ruler' },
  { id: 'development', icon: 'fas fa-code' },
  { id: 'launch', icon: 'fas fa-rocket' },
]

onMounted(() => {
  const isMobile = window.innerWidth <= 768

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
    { threshold: isMobile ? 0.05 : 0.1, rootMargin: '50px' },
  )

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    if (isMobile) {
      el.classList.add('animate-in')
    } else {
      observer.observe(el)
    }
  })
})
</script>

<style scoped>
.fade-in-up {
  transform: translateY(40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-up.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.delay-200 {
  transition-delay: 200ms;
}

@media (max-width: 768px) {
  .fade-in-up {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
