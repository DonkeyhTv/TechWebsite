<template>
  <section class="clients-section py-16 md:py-20 lg:py-16 bg-oozami-lightblue">
    <div class="container mx-auto px-4 max-w-7xl">
      <div ref="headerRef" class="fade-in-down opacity-0 text-center mb-6 md:mb-8">
        <h2 class="text-[18px] md:text-[28px] font-semibold text-white">
          {{ $t('clients.title') }}
        </h2>
      </div>

      <div ref="logosRef" class="logos-wrapper opacity-0">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          <div v-for="(logo, index) in visibleLogos" :key="index" class="logo-slot relative">
            <Transition
              name="logo"
              mode="out-in"
              @before-enter="(el) => onBeforeEnter(el, index)"
              @enter="(el, done) => onEnter(el, done, index)"
              @leave="onLeave"
            >
              <div :key="`${logo.id}-${rotationKey}`" class="logo-item">
                <div
                  class="bg-white rounded-xl p-4 md:p-6 h-[125px] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <img
                    :src="logo.image"
                    :alt="logo.name"
                    class="w-full h-full object-contain scale-125 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />

                  <div
                    class="absolute inset-0 bg-oozami-darkblue/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import clientLogo1 from '@/assets/images/client-logo-placeholder.png'
import clientLogo2 from '@/assets/images/client-logo-placeholder2.png'
import clientLogo3 from '@/assets/images/client-logo-placeholder3.png'
import clientLogo4 from '@/assets/images/client-logo-placeholder4.png'
import clientLogo5 from '@/assets/images/client-logo-placeholder5.png'
import clientLogo6 from '@/assets/images/client-logo-placeholder6.png'

interface ClientLogo {
  id: number
  name: string
  image: string
}

const headerRef = ref<HTMLElement>()
const logosRef = ref<HTMLElement>()

const allLogos: ClientLogo[] = [
  { id: 1, name: 'Client 1', image: clientLogo1 },
  { id: 2, name: 'Client 2', image: clientLogo2 },
  { id: 3, name: 'Client 3', image: clientLogo3 },
  { id: 4, name: 'Client 4', image: clientLogo4 },
  { id: 5, name: 'Client 5', image: clientLogo5 },
  { id: 6, name: 'Client 6', image: clientLogo6 },
  { id: 7, name: 'Client 7', image: clientLogo1 },
  { id: 8, name: 'Client 8', image: clientLogo2 },
  { id: 9, name: 'Client 9', image: clientLogo3 },
  { id: 10, name: 'Client 10', image: clientLogo4 },
  { id: 11, name: 'Client 11', image: clientLogo5 },
  { id: 12, name: 'Client 12', image: clientLogo6 },
]

const currentIndex = ref(0)
const rotationKey = ref(0)
let rotationInterval: number | null = null

const visibleLogos = computed(() => {
  const logos: ClientLogo[] = []
  for (let i = 0; i < 6; i++) {
    const index = (currentIndex.value + i) % allLogos.length
    logos.push(allLogos[index])
  }
  return logos
})

const rotateLogos = () => {
  currentIndex.value = (currentIndex.value + 1) % allLogos.length
  rotationKey.value++
}

const onBeforeEnter = (el: Element, index: number) => {
  const element = el as HTMLElement
  element.style.opacity = '0'
  element.style.transform = 'scale(0.8) translateY(20px)'
}

const onEnter = (el: Element, done: () => void, index: number) => {
  const element = el as HTMLElement

  void element.offsetHeight

  setTimeout(() => {
    element.style.transition = 'all 0.6s ease-out'
    element.style.opacity = '1'
    element.style.transform = 'none'

    setTimeout(done, 600)
  }, index * 80)
}

const onLeave = (el: Element, done: () => void) => {
  const element = el as HTMLElement

  element.style.transition = 'all 0.4s ease-in'
  element.style.opacity = '0'
  element.style.transform = 'scale(0.8) translateY(-20px)'

  setTimeout(done, 400)
}

const startRotation = () => {
  rotationInterval = window.setInterval(rotateLogos, 3500)
}

const stopRotation = () => {
  if (rotationInterval) {
    clearInterval(rotationInterval)
    rotationInterval = null
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
          } else if (element === logosRef.value) {
            setTimeout(() => {
              element.classList.add('animate-in')
              setTimeout(startRotation, 1000)
            }, 300)
          }

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (logosRef.value) observer.observe(logosRef.value)
})

onUnmounted(() => {
  stopRotation()
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

.logos-wrapper {
  transform: translateY(30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.logos-wrapper.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.logo-slot {
  position: relative;
  min-height: 1px;
}

.logo-item {
  position: relative;
  width: 100%;
  backface-visibility: hidden;
}

.logo-item .group {
  transition: transform 0.3s ease;
}

.logo-item .group:hover {
  transform: translateY(-5px);
}

.logo-item img {
  transition: filter 0.3s ease;
  will-change: filter;
}
</style>
