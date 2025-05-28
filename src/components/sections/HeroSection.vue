<template>
  <section
    id="accueil"
    class="min-h-screen flex items-center relative overflow-hidden py-5 lg:py-0"
  >
    <div class="absolute inset-0 z-0">
      <img :src="bgHeroImage" alt="Background" class="w-full h-full object-cover opacity-10" />
    </div>

    <div id="particles-js" class="absolute inset-0 z-[1]"></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="hidden lg:block order-1">
          <div
            class="relative perspective-1000"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <div
              class="relative rounded-2xl overflow-hidden transform-gpu transition-transform duration-300 ease-out"
              :style="imageStyle"
            >
              <img
                :src="heroImageImport"
                alt="Hero image"
                class="w-full h-auto object-cover scale-100"
              />
            </div>
          </div>
        </div>

        <div class="text-center lg:text-left space-y-6 lg:space-y-8 order-2">
          <div class="flex items-center gap-3 justify-center lg:justify-start">
            <span class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></span>
            <p
              class="uppercase text-oozami-lightblue text-xs sm:text-base font-medium tracking-wider"
            >
              {{ $t('hero.tagline') }}
            </p>
            <span class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></span>
          </div>

          <h1 class="font-bold leading-tight">
            <span
              class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-oozami-black dark:text-white transition-all"
            >
              {{ $t('hero.title.line1') }}
            </span>
            <span
              class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 text-oozami-black dark:text-white transition-all"
            >
              {{ $t('hero.title.line2') }}
            </span>
            <span
              class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 text-oozami-lightblue"
            >
              {{ $t('hero.title.line3') }}
            </span>
          </h1>

          <p
            class="text-base sm:text-lg md:text-xl text-oozami-black dark:text-white transition-all leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            {{ $t('hero.description') }}
          </p>

          <div class="pt-0 sm:pt-6 lg:pt-8">
            <router-link
              to="/contact"
              class="group inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl text-sm sm:text-base"
            >
              {{ $t('hero.cta') }}
            </router-link>
          </div>
        </div>

        <div class="block lg:hidden mt-8">
          <div class="relative rounded-2xl overflow-hidden max-w-sm mx-auto">
            <img :src="heroImageImport" alt="Hero image" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <svg
        class="w-6 h-6 text-oozami-black/70 dark:text-white/70"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import heroImageImport from '@/assets/images/hero-trans.png'
import bgHeroImage from '@/assets/images/bg-hero.jpg'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToContact = () => {
  router.push('/contact')
}

declare global {
  interface Window {
    particlesJS: any
    pJSDom?: any[]
  }
}

interface Props {
  title?: string
  subtitle?: string
  backgroundType?: 'gradient' | 'image' | 'video'
  showButtons?: boolean
  heroImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Bienvenue sur OOZAMI',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  backgroundType: 'gradient',
  showButtons: true,
  heroImage: '/api/placeholder/600/700',
})

const mouseX = ref(0)
const mouseY = ref(0)

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

const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 80
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    })
  }
}

const initParticles = () => {
  if (window.particlesJS) {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 53,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#04bbff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.14430708547789706,
          random: true,
          anim: {
            enable: true,
            speed: 0.24362316369040352,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 32.06824121731046,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3.206824121731046,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble',
          },
          onclick: {
            enable: true,
            mode: 'remove',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  }
}

onMounted(() => {
  if (!window.particlesJS) {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.onload = initParticles
    document.head.appendChild(script)
  } else {
    initParticles()
  }
})

onUnmounted(() => {
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS()
    window.pJSDom = []
  }
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

#particles-js {
  pointer-events: none;
}

#particles-js canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}
</style>
