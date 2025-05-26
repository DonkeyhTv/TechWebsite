<template>
  <section
    class="why-choose-us-section py-10 md:py-16 lg:py-20 bg-white dark:bg-oozami-darkblue transition-all"
  >
    <div class="container mx-auto px-4 max-w-7xl lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div ref="leftColumnRef" class="fade-in-left opacity-0 order-1 lg:order-1">
          <div
            class="relative perspective-1000"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="relative rounded-xl md:rounded-2xl overflow-hidden transform-gpu transition-transform duration-300 ease-out"
              :style="imageStyle"
            >
              <img
                :src="whyChooseUsImage"
                alt="Why choose us"
                class="w-full h-auto object-cover scale-100"
              />
            </div>
          </div>
        </div>

        <div ref="rightColumnRef" class="fade-in-right opacity-0 order-2 lg:order-2">
          <div class="flex items-center gap-2 mb-3 md:mb-4 justify-center lg:justify-start">
            <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
            <span
              class="uppercase text-oozami-lightblue text-xs sm:text-sm md:text-base font-medium tracking-wider"
            >
              {{ $t('whyChooseUs.badge') }}
            </span>
            <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
          </div>

          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-oozami-black dark:text-white mb-3 md:mb-4 transition-all duration-300"
          >
            {{ $t('whyChooseUs.title') }}
          </h2>
          <div class="text-center lg:text-left mb-8">
            <p
              class="text-oozami-black/70 dark:text-gray-300 text-base md:text-lg mb-8 leading-relaxed transition-all duration-300"
            >
              {{ $t('whyChooseUs.description') }}
            </p>
          </div>

          <div class="space-y-6 md:space-y-8">
            <div
              v-for="(item, index) in whyChooseUsItems"
              :key="index"
              class="flex items-start space-x-4 group"
            >
              <div class="flex-shrink-0">
                <div class="text-5xl md:text-6xl font-bold text-oozami-lightblue">
                  {{ item.number }}
                </div>
              </div>
              <div class="flex-1">
                <h3
                  class="text-xl md:text-2xl font-bold text-oozami-black dark:text-white mb-2 transition-all duration-300"
                >
                  {{ $t(`whyChooseUs.items.${item.key}.title`) }}
                </h3>
                <p
                  class="text-oozami-black/70 dark:text-gray-300 text-sm md:text-base leading-relaxed"
                >
                  {{ $t(`whyChooseUs.items.${item.key}.description`) }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-10 text-center lg:text-left">
            <button
              class="group inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl text-sm sm:text-base"
            >
              {{ $t('whyChooseUs.ctaButton') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import whyChooseUsImage from '@/assets/images/chooseus-trans.png'

const leftColumnRef = ref<HTMLElement>()
const rightColumnRef = ref<HTMLElement>()

const mouseX = ref(0)
const mouseY = ref(0)

const whyChooseUsItems = [
  {
    key: 'item1',
    number: '01.',
  },
  {
    key: 'item2',
    number: '02.',
  },
  {
    key: 'item3',
    number: '03.',
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

          if (element === leftColumnRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 200)
          } else if (element === rightColumnRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 400)
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

  if (leftColumnRef.value) observer.observe(leftColumnRef.value)
  if (rightColumnRef.value) observer.observe(rightColumnRef.value)
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
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

.fade-in-left.animate-in,
.fade-in-right.animate-in {
  opacity: 1 !important;
  transform: translateX(0);
}

@media (max-width: 1023px) {
  .fade-in-left,
  .fade-in-right {
    transform: translateY(40px);
  }
}
</style>
