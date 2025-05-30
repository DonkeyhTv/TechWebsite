<template>
  <div class="services-page">
    <PageHeader
      :title="$t('servicesPage.pageTitle')"
      :description="$t('servicesPage.pageDescription')"
      :badge="$t('servicesPage.badge')"
      :breadcrumbs="breadcrumbs"
    />

    <section
      class="py-12 md:py-16 lg:py-20 bg-white dark:bg-oozami-darkblue transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12 md:mb-16">
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
            >
              {{ $t('servicesPage.hero.title') }}
            </h2>
            <p
              class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              {{ $t('servicesPage.hero.description') }}
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              v-for="(service, index) in mainServices"
              :key="service.id"
              class="fade-in-up opacity-0 bg-gray-50 dark:bg-oozami-lightblue/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-oozami-lightblue/10"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div
                class="w-12 h-12 md:w-16 md:h-16 bg-oozami-lightblue rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6"
              >
                <i :class="service.icon" class="text-white text-lg md:text-2xl"></i>
              </div>
              <h3
                class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 text-center"
              >
                {{ $t(`servicesPage.services.${service.id}.title`) }}
              </h3>
              <p
                class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center mb-4"
              >
                {{ $t(`servicesPage.services.${service.id}.description`) }}
              </p>
              <div class="text-center">
                <router-link
                  to="/contact"
                  class="inline-flex items-center gap-2 text-oozami-lightblue hover:text-oozami-darkblue font-medium transition-colors text-sm"
                >
                  {{ $t('servicesPage.learnMore') }}
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
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </router-link>
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
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div class="fade-in-up opacity-0">
              <div class="bg-oozami-lightblue/10 rounded-2xl p-4 md:p-6 lg:p-8">
                <div class="grid grid-cols-2 gap-3 md:gap-4">
                  <div
                    v-for="(tech, index) in technologies"
                    :key="tech.id"
                    class="bg-transparent border border-oozami-lightblue/30 rounded-lg p-3 md:p-4 lg:p-5 transition-all hover:shadow-md"
                  >
                    <div
                      class="w-8 h-8 md:w-10 md:h-10 bg-oozami-lightblue rounded-lg flex items-center justify-center mb-2 md:mb-3"
                    >
                      <i :class="tech.icon" class="text-white text-xs md:text-sm"></i>
                    </div>
                    <h4
                      class="font-semibold text-gray-900 dark:text-white mb-1 text-sm md:text-base"
                    >
                      {{ $t(`servicesPage.technologies.${tech.id}.title`) }}
                    </h4>
                    <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {{ $t(`servicesPage.technologies.${tech.id}.subtitle`) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="fade-in-up opacity-0 delay-200">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 bg-oozami-lightblue/10 text-oozami-lightblue rounded-full text-sm font-medium mb-4"
              >
                <i class="fas fa-code"></i>
                {{ $t('servicesPage.technologies.badge') }}
              </div>
              <h2
                class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight"
              >
                {{ $t('servicesPage.technologies.title') }}
              </h2>
              <p
                class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed"
              >
                {{ $t('servicesPage.technologies.description') }}
              </p>
              <router-link
                to="/technologies"
                class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-oozami-lightblue text-white font-semibold rounded-lg hover:bg-oozami-lightblue/90 transition-colors duration-200 text-sm md:text-base"
              >
                {{ $t('servicesPage.technologies.cta') }}
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
        </div>
      </div>
    </section>

    <section
      class="py-12 md:py-16 lg:py-20 bg-white dark:bg-oozami-darkblue transition-colors duration-300"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12 md:mb-16">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-oozami-lightblue/10 text-oozami-lightblue rounded-full text-sm font-medium mb-4"
            >
              <i class="fas fa-rocket"></i>
              {{ $t('servicesPage.process.badge') }}
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
            >
              {{ $t('servicesPage.process.title') }}
            </h2>
            <p
              class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              {{ $t('servicesPage.process.description') }}
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div
              v-for="(step, index) in processSteps"
              :key="step.id"
              class="fade-in-up opacity-0 text-center"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="relative mb-6">
                <div
                  class="w-16 h-16 md:w-20 md:h-20 bg-oozami-lightblue rounded-full flex items-center justify-center mx-auto shadow-lg"
                >
                  <span class="text-white font-bold text-lg md:text-xl">{{ index + 1 }}</span>
                </div>
                <div
                  v-if="index < processSteps.length - 1"
                  class="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-oozami-lightblue/20 transform -translate-y-1/2"
                ></div>
              </div>
              <div
                class="w-12 h-12 md:w-14 md:h-14 bg-oozami-lightblue/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <i :class="step.icon" class="text-oozami-lightblue text-lg md:text-xl"></i>
              </div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                {{ $t(`servicesPage.process.steps.${step.id}.title`) }}
              </h3>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t(`servicesPage.process.steps.${step.id}.description`) }}
              </p>
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
              <i class="fas fa-star"></i>
              {{ $t('servicesPage.features.badge') }}
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
            >
              {{ $t('servicesPage.features.title') }}
            </h2>
            <p
              class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              {{ $t('servicesPage.features.description') }}
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div
              v-for="(feature, index) in features"
              :key="feature.id"
              class="fade-in-up opacity-0 bg-white dark:bg-oozami-lightblue/10 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg border border-oozami-lightblue/10"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div
                class="w-12 h-12 md:w-16 md:h-16 bg-oozami-lightblue/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6"
              >
                <i :class="feature.icon" class="text-oozami-lightblue text-lg md:text-2xl"></i>
              </div>
              <h3
                class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4"
              >
                {{ $t(`servicesPage.features.${feature.id}.title`) }}
              </h3>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t(`servicesPage.features.${feature.id}.description`) }}
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
              <i class="fas fa-briefcase"></i>
              {{ $t('servicesPage.packages.badge') }}
            </div>
            <h2
              class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4 leading-tight"
            >
              {{ $t('servicesPage.packages.title') }}
            </h2>
            <p
              class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed"
            >
              {{ $t('servicesPage.packages.description') }}
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 md:gap-8">
            <div
              v-for="(package_item, index) in packages"
              :key="package_item.id"
              class="fade-in-up opacity-0 bg-gray-50 dark:bg-oozami-lightblue/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-oozami-lightblue/10"
              :class="{ 'lg:scale-105 border-oozami-lightblue': package_item.featured }"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div v-if="package_item.featured" class="text-center mb-4">
                <span
                  class="inline-flex items-center gap-1 px-3 py-1 bg-oozami-lightblue text-white rounded-full text-sm font-medium"
                >
                  <i class="fas fa-star"></i>
                  {{ $t('servicesPage.packages.popular') }}
                </span>
              </div>
              <div class="text-center mb-6">
                <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {{ $t(`servicesPage.packages.${package_item.id}.title`) }}
                </h3>
                <div class="text-3xl md:text-4xl font-bold text-oozami-lightblue mb-1">
                  {{ $t(`servicesPage.packages.${package_item.id}.price`) }}
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ $t(`servicesPage.packages.${package_item.id}.period`) }}
                </p>
              </div>
              <p
                class="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed"
              >
                {{ $t(`servicesPage.packages.${package_item.id}.description`) }}
              </p>
              <ul class="space-y-3 mb-8">
                <li
                  v-for="feature in package_item.features"
                  :key="feature"
                  class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                >
                  <i class="fas fa-check text-oozami-lightblue flex-shrink-0"></i>
                  {{ $t(`servicesPage.packages.${package_item.id}.features.${feature}`) }}
                </li>
              </ul>
              <div class="text-center">
                <router-link
                  to="/contact"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-oozami-lightblue text-white font-semibold rounded-lg hover:bg-oozami-lightblue/90 transition-colors duration-200 w-full justify-center text-sm"
                  :class="{
                    'bg-oozami-lightblue hover:bg-oozami-darkblue': package_item.featured,
                  }"
                >
                  {{ $t('servicesPage.packages.getStarted') }}
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
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </router-link>
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
            {{ $t('servicesPage.cta.title') }}
          </h2>
          <p
            class="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            {{ $t('servicesPage.cta.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <router-link
              to="/contact"
              class="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-oozami-lightblue text-white font-semibold rounded-lg hover:bg-oozami-lightblue/90 transition-all duration-200 justify-center text-sm md:text-base hover:scale-105 transform"
            >
              {{ $t('servicesPage.cta.primary') }}
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
              {{ $t('servicesPage.cta.secondary') }}
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

const breadcrumbs = computed(() => [
  {
    label: t('breadcrumb.home'),
    path: '/',
  },
  {
    label: t('breadcrumb.services'),
    path: '/services',
    active: true,
  },
])

const mainServices = [
  { id: 'webDevelopment', icon: 'fas fa-code' },
  { id: 'mobileDevelopment', icon: 'fas fa-mobile-alt' },
  { id: 'uiuxDesign', icon: 'fas fa-palette' },
  { id: 'cloudSolutions', icon: 'fas fa-cloud' },
  { id: 'digitalMarketing', icon: 'fas fa-chart-line' },
  { id: 'seoOptimization', icon: 'fas fa-search' },
]

const technologies = [
  { id: 'frontend', icon: 'fab fa-html5' },
  { id: 'backend', icon: 'fas fa-server' },
  { id: 'mobile', icon: 'fab fa-react' },
  { id: 'cloud', icon: 'fab fa-aws' },
]

const processSteps = [
  { id: 'consultation', icon: 'fas fa-comments' },
  { id: 'planning', icon: 'fas fa-project-diagram' },
  { id: 'development', icon: 'fas fa-code' },
  { id: 'delivery', icon: 'fas fa-rocket' },
]

const features = [
  { id: 'responsive', icon: 'fas fa-mobile-alt' },
  { id: 'performance', icon: 'fas fa-tachometer-alt' },
  { id: 'security', icon: 'fas fa-shield-alt' },
  { id: 'scalable', icon: 'fas fa-expand-arrows-alt' },
  { id: 'support', icon: 'fas fa-headset' },
  { id: 'analytics', icon: 'fas fa-chart-bar' },
]

const packages = [
  {
    id: 'starter',
    featured: false,
    features: ['feature1', 'feature2', 'feature3', 'feature4'],
  },
  {
    id: 'professional',
    featured: true,
    features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'],
  },
  {
    id: 'enterprise',
    featured: false,
    features: ['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6', 'feature7'],
  },
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

@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
