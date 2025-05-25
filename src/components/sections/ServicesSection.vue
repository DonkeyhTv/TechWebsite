<template>
  <section class="services-section py-20 bg-white dark:bg-oozami-darkblue transition-all">
    <div class="container mx-auto px-4 max-w-7xl lg:px-0">
      <div class="flex justify-between items-center mb-20">
        <div ref="headerRef" class="fade-in-up opacity-0">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
            <span
              class="uppercase text-oozami-lightblue text-xs sm:text-base font-medium tracking-wider"
              >{{ $t('services.badge') }}</span
            >
            <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
          </div>

          <h2
            class="text-4xl md:text-5xl font-bold text-oozami-black dark:text-white mb-4 transition-all duration-300"
          >
            {{ $t('services.title') }}
          </h2>

          <p class="text-oozami-black dark:text-white transition-all duration-300 max-w-xl text-lg">
            {{ $t('services.subtitle') }}
          </p>
        </div>

        <div ref="buttonRef" class="text-right fade-in-up opacity-0">
          <div>
            <button
              class="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold hover:bg-oozami-lightblue hover:text-white transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl text-sm sm:text-base"
            >
              {{ $t('services.techButton') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 ml-2 transition-all duration-300 group-hover:w-6 group-hover:h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          :ref="
            (el) => {
              if (el) cardsRef[index] = el as HTMLElement
            }
          "
          class="service-card p-8 rounded-lg border border-oozami-lightblue/20 bg-transparent transition-all duration-300 group relative overflow-hidden hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 fade-in-up opacity-0"
        >
          <div class="service-bg absolute inset-0 bg-oozami-lightblue"></div>
          <div class="relative z-10">
            <div
              class="items-center justify-center text-oozami-lightblue group-hover:text-white mb-3 transition-colors duration-300"
            >
              <i :class="service.iconClass" class="text-5xl font-light"></i>
            </div>

            <h3
              class="text-2xl font-semibold text-oozami-black group-hover:text-white dark:text-white mb-4 transition-all duration-300"
            >
              {{ $t(`services.items.${service.translationKey}.title`) }}
            </h3>

            <p
              class="mb-6 text-lg text-oozami-black dark:text-white group-hover:text-white transition-colors duration-300"
            >
              {{ $t(`services.items.${service.translationKey}.description`) }}
            </p>

            <a
              :href="service.link"
              class="inline-flex items-center font-bold transition-colors text-oozami-lightblue group-hover:text-white"
            >
              {{ $t('services.readMore') }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 ml-2 transition-all duration-300 group-hover:w-6 group-hover:h-6"
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
            setTimeout(() => element.classList.add('animate-in'), 100)
          } else if (element === buttonRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 300)
          } else {
            const cardIndex = cardsRef.value.indexOf(element)
            if (cardIndex !== -1) {
              const row = Math.floor(cardIndex / 3)
              const col = cardIndex % 3
              const delay = 500 + row * 300 + col * 150
              setTimeout(() => element.classList.add('animate-in'), delay)
            }
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
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-up.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}
</style>
