<template>
  <section
    class="about-section py-10 md:py-16 lg:py-20 bg-gray-100 dark:bg-oozami-lightblue/5 transition-all"
  >
    <div class="container mx-auto px-4 max-w-7xl lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div ref="leftColumnRef" class="fade-in-left opacity-0 order-2 lg:order-1">
          <div ref="headerRef" class="mb-6 md:mb-8 fade-in-up opacity-0 text-center lg:text-left">
            <div class="flex items-center gap-2 mb-3 md:mb-4 justify-center lg:justify-start">
              <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
              <span
                class="uppercase text-oozami-lightblue text-xs sm:text-sm md:text-base font-medium tracking-wider"
              >
                {{ $t('about.badge') }}
              </span>
              <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
            </div>

            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-oozami-black dark:text-white mb-3 md:mb-4 transition-all duration-300"
            >
              {{ $t('about.title') }}
            </h2>

            <p
              class="text-oozami-black dark:text-white transition-all duration-300 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg"
            >
              {{ $t('about.subtitle') }}
            </p>
          </div>

          <div class="relative">
            <div class="relative z-10">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div
                  v-for="(item, index) in aboutItems"
                  :key="index"
                  class="flex items-start space-x-3 md:space-x-4 group hover:-translate-y-1 transition-all duration-300 p-2"
                >
                  <div class="flex-shrink-0">
                    <div
                      class="w-10 h-10 md:w-12 md:h-12 bg-oozami-lightblue/20 group-hover:bg-oozami-lightblue group:text-oozami-lightblue rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-oozami-lightblue/50"
                    >
                      <i
                        :class="item.icon"
                        class="text-xl md:text-2xl leading-none flex items-center text-oozami-lightblue group-hover:text-white transition-all duration-300"
                      ></i>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4
                      class="text-base md:text-xl font-semibold text-oozami-black dark:text-white mb-1"
                    >
                      {{ $t(`about.items.${item.key}.title`) }}
                    </h4>
                    <p class="text-oozami-black dark:text-white text-xs md:text-base opacity-80">
                      {{ $t(`about.items.${item.key}.description`) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 md:mt-8 text-center lg:text-left">
            <button
              class="group inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl text-sm sm:text-base"
            >
              {{ $t('about.ctaButton') }}
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
            </button>
          </div>
        </div>

        <div ref="rightColumnRef" class="fade-in-right opacity-0 order-1 lg:order-2">
          <div
            class="relative perspective-1000 max-w-md mx-auto lg:max-w-none"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="relative rounded-xl md:rounded-2xl overflow-hidden transform-gpu transition-transform duration-300 ease-out"
              :style="imageStyle"
            >
              <img :src="aboutImage" alt="About us" class="w-full h-auto object-cover scale-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import aboutImage from '@/assets/images/about-trans.png'

const headerRef = ref<HTMLElement>()
const leftColumnRef = ref<HTMLElement>()
const rightColumnRef = ref<HTMLElement>()

const mouseX = ref(0)
const mouseY = ref(0)

const aboutItems = [
  {
    key: 'item1',
    icon: 'fi fi-rr-user',
  },
  {
    key: 'item2',
    icon: 'fi fi-rr-settings',
  },
  {
    key: 'item3',
    icon: 'fi fi-rr-chart-line-up',
  },
  {
    key: 'item4',
    icon: 'fi fi-rr-shield-check',
  },
]

const imageStyle = computed(() => ({
  transform: `rotateY(${mouseX.value * 0.7}deg) rotateX(${-mouseY.value * 0.7}deg) translateZ(20px)`,
}))

const handleMouseMove = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  if (!target) return

  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  mouseX.value = (x - rect.width / 2) / 10
  mouseY.value = (y - rect.height / 2) / 10
}

const handleMouseLeave = () => {
  mouseX.value = 0
  mouseY.value = 0
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          if (element === headerRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 100)
          } else if (element === leftColumnRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 400)
          } else if (element === rightColumnRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 600)
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

  if (headerRef.value) observer.observe(headerRef.value)
  if (leftColumnRef.value) observer.observe(leftColumnRef.value)
  if (rightColumnRef.value) observer.observe(rightColumnRef.value)
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.fade-in-up {
  transform: translateY(60px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-left {
  transform: translateX(-60px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-right {
  transform: translateX(60px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-up.animate-in,
.fade-in-left.animate-in,
.fade-in-right.animate-in {
  opacity: 1 !important;
  transform: translate(0);
}

@media (max-width: 1023px) {
  .fade-in-left,
  .fade-in-right {
    transform: translateY(40px);
  }
}
</style>
