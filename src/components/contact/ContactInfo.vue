<template>
  <section
    class="contact-info-section py-16 md:py-20 bg-gray-100 dark:bg-oozami-lightblue/5 transition-colors duration-300"
  >
    <div class="container mx-auto px-4 lg:px-0 w-full max-w-7xl">
      <div
        ref="infoGrid"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-12"
      >
        <div ref="officeRef" class="info-card opacity-0">
          <div
            class="bg-transparent p-6 md:p-8 h-full transition-all duration-300 rounded-b-lg border border-t-[3px] border-oozami-lightblue/30 border-t-oozami-lightblue border-solid"
          >
            <div
              class="w-14 h-14 md:w-16 md:h-16 bg-oozami-lightblue/10 rounded-xl flex items-center justify-center mb-4 md:mb-6"
            >
              <svg
                class="w-7 h-7 md:w-8 md:h-8 text-oozami-lightblue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>

            <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {{ $t('contactInfo.office.title') }}
            </h3>

            <div class="space-y-3">
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300">
                {{ $t('contactInfo.office.address1') }}
              </p>

              <div class="pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                <p
                  class="text-xs md:text-sm font-medium text-gray-900 dark:text-white mb-1 md:mb-2"
                >
                  {{ $t('contactInfo.office.hours') }}
                </p>
                <p class="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  {{ $t('contactInfo.office.schedule1') }}<br />
                  {{ $t('contactInfo.office.schedule2') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref="contactRef" class="info-card opacity-0">
          <div
            class="bg-transparent p-6 md:p-8 h-full transition-all duration-300 rounded-b-lg border border-t-[3px] border-oozami-lightblue/30 border-t-oozami-lightblue border-solid"
          >
            <div
              class="w-14 h-14 md:w-16 md:h-16 bg-oozami-lightblue/10 rounded-xl flex items-center justify-center mb-4 md:mb-6"
            >
              <svg
                class="w-7 h-7 md:w-8 md:h-8 text-oozami-lightblue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {{ $t('contactInfo.contact.title') }}
            </h3>

            <div class="space-y-3 md:space-y-4">
              <a href="mailto:contact@oozami.com" class="block group">
                <p class="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {{ $t('contactInfo.contact.emailLabel') }}
                </p>
                <p
                  class="text-base md:text-lg text-gray-900 dark:text-white group-hover:text-oozami-lightblue transition-colors break-all"
                >
                  contact@mail.com
                </p>
              </a>

              <a href="tel:+33123456789" class="block group">
                <p class="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {{ $t('contactInfo.contact.phoneLabel') }}
                </p>
                <p
                  class="text-base md:text-lg text-gray-900 dark:text-white group-hover:text-oozami-lightblue transition-colors"
                >
                  +32 483 45 67 89
                </p>
              </a>
            </div>
          </div>
        </div>

        <div ref="responseRef" class="info-card opacity-0 md:col-span-2 lg:col-span-1">
          <div
            class="bg-transparent p-6 md:p-8 h-full transition-all duration-300 rounded-b-lg border border-t-[3px] border-oozami-lightblue/30 border-t-oozami-lightblue border-solid"
          >
            <div
              class="w-14 h-14 md:w-16 md:h-16 bg-oozami-lightblue/10 rounded-xl flex items-center justify-center mb-4 md:mb-6"
            >
              <svg
                class="w-7 h-7 md:w-8 md:h-8 text-oozami-lightblue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {{ $t('contactInfo.response.title') }}
            </h3>

            <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
              {{ $t('contactInfo.response.description') }}
            </p>

            <div class="flex items-center gap-3 md:gap-4">
              <div class="flex-1">
                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div class="h-full bg-oozami-lightblue rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <span class="text-xs md:text-sm font-medium text-gray-900 dark:text-white">95%</span>
            </div>

            <p class="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2">
              {{ $t('contactInfo.response.rate') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const officeRef = ref<HTMLElement>()
const contactRef = ref<HTMLElement>()
const responseRef = ref<HTMLElement>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          setTimeout(() => {
            element.classList.add('animate-card')
          }, index * 150)

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  )

  const elements = [officeRef.value, contactRef.value, responseRef.value]
  elements.forEach((el) => {
    if (el) observer.observe(el)
  })
})
</script>

<style scoped>
.info-card {
  transform: translateY(30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.info-card.animate-card {
  opacity: 1 !important;
  transform: translateY(0);
}
</style>
