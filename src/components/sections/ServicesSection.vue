<template>
  <section
    class="services-section py-10 md:py-16 lg:py-20 bg-white dark:bg-oozami-darkblue transition-all"
  >
    <div class="container mx-auto px-4 max-w-7xl lg:px-0">
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 md:mb-16 lg:mb-20 gap-6"
      >
        <div ref="headerRef" class="fade-in-up opacity-0 text-center lg:text-left">
          <div class="flex items-center gap-2 mb-3 md:mb-4 justify-center lg:justify-start">
            <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
            <span
              class="uppercase text-oozami-lightblue text-xs sm:text-sm md:text-base font-medium tracking-wider"
              >{{ $t('services.badge') }}</span
            >
            <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
          </div>

          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-oozami-black dark:text-white mb-3 md:mb-4 transition-all duration-300"
          >
            {{ $t('services.title') }}
          </h2>

          <p
            class="text-oozami-black dark:text-white transition-all duration-300 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg"
          >
            {{ $t('services.subtitle') }}
          </p>
        </div>

        <div
          ref="buttonRef"
          class="text-center lg:text-right fade-in-up opacity-0 w-full lg:w-auto"
        >
          <div>
            <router-link
              to="/technologies"
              class="group inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl text-sm sm:text-base"
            >
              {{ $t('services.techButton') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 ml-2 transition-all duration-300 group-hover:w-5 group-hover:h-5 md:group-hover:w-6 md:group-hover:h-6"
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

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          :ref="
            (el) => {
              if (el) cardsRef[index] = el as HTMLElement
            }
          "
          class="service-card p-6 md:p-8 rounded-lg border border-oozami-lightblue/20 bg-transparent transition-all duration-300 group relative overflow-hidden hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 fade-in-up opacity-0"
        >
          <div class="service-bg absolute inset-0 bg-oozami-lightblue"></div>
          <div class="relative z-10">
            <div
              class="items-center justify-center text-oozami-lightblue group-hover:text-white mb-3 transition-colors duration-300"
            >
              <i :class="service.iconClass" class="text-4xl md:text-5xl font-light"></i>
            </div>

            <h3
              class="text-xl md:text-2xl font-semibold text-oozami-black group-hover:text-white dark:text-white mb-3 md:mb-4 transition-all duration-300"
            >
              {{ $t(`services.items.${service.translationKey}.title`) }}
            </h3>

            <p
              class="mb-5 md:mb-6 text-base md:text-lg text-oozami-black dark:text-white group-hover:text-white transition-colors duration-300"
            >
              {{ $t(`services.items.${service.translationKey}.description`) }}
            </p>

            <a
              :href="service.link"
              class="inline-flex items-center font-bold transition-colors text-oozami-lightblue group-hover:text-white text-sm md:text-base"
            >
              {{ $t('services.readMore') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 ml-2 transition-all duration-300 group-hover:w-5 group-hover:h-5 md:group-hover:w-6 md:group-hover:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import servicesData from '@/data/services.json'

interface Service {
  id: number
  translationKey: string
  iconClass: string
  link: string
}

const services = servicesData.services as Service[]

const headerRef = ref<HTMLElement>()
const buttonRef = ref<HTMLElement>()
const cardsRef = ref<HTMLElement[]>([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          if (element === headerRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 50)
          } else if (element === buttonRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 150)
          } else {
            const cardIndex = cardsRef.value.indexOf(element)
            if (cardIndex !== -1) {
              const delay = 200 + cardIndex * 80
              setTimeout(() => element.classList.add('animate-in'), delay)
            }
          }

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    },
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (buttonRef.value) observer.observe(buttonRef.value)
  cardsRef.value.forEach((card) => {
    if (card) observer.observe(card)
  })
})
</script>

<style scoped>
.service-bg {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease-in-out;
}

.service-card:hover .service-bg {
  transform: scaleX(1);
  transform-origin: left;
}

.service-card:not(:hover) .service-bg {
  transform-origin: right;
}

.fade-in-up {
  transform: translateY(60px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.fade-in-up.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

@media (max-width: 767px) {
  .fade-in-up {
    transform: translateY(40px);
  }
}
</style>
