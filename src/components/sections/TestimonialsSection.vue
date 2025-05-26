<template>
  <section class="testimonials-section relative py-20 md:py-24 lg:py-32">
    <div class="absolute inset-0 z-0">
      <img :src="testimonialsBackground" alt="Background" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-oozami-darkblue/85"></div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl relative z-10">
      <div ref="headerRef" class="fade-in-down opacity-0 text-center mb-12 md:mb-16">
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
          <span
            class="uppercase text-oozami-lightblue text-sm md:text-base font-medium tracking-wider"
          >
            {{ $t('testimonials.badge') }}
          </span>
          <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {{ $t('testimonials.title') }}
        </h2>

        <div class="flex items-center justify-center gap-2 mt-6">
          <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
          <span class="text-white text-lg font-semibold">4.8</span>
          <span class="text-white/70 text-sm"
            >{{ $t('testimonials.basedOn') }} 127 {{ $t('testimonials.reviews') }}</span
          >
          <img src="@/assets/images/google-logo.png" alt="Google" class="h-5 ml-2" />
        </div>
      </div>

      <div ref="carouselRef" class="testimonials-carousel opacity-0 relative">
        <div class="overflow-hidden">
          <TransitionGroup
            name="slide"
            tag="div"
            class="flex"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0 hidden md:block">
                    <div
                      class="w-20 h-20 rounded-full bg-oozami-lightblue/20 flex items-center justify-center"
                    >
                      <span class="text-2xl font-bold text-oozami-lightblue">
                        {{ testimonial.name.charAt(0) }}
                      </span>
                    </div>
                  </div>

                  <div class="flex-1">
                    <div class="flex gap-1 mb-4">
                      <svg
                        v-for="star in 5"
                        :key="star"
                        class="w-5 h-5"
                        :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-400'"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>
                    </div>

                    <blockquote class="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
                      "{{ testimonial.text }}"
                    </blockquote>

                    <div class="flex items-center justify-between">
                      <div>
                        <h4 class="text-white font-semibold text-lg">{{ testimonial.name }}</h4>
                        <p class="text-white/60 text-sm">{{ testimonial.company }}</p>
                      </div>
                      <div class="text-white/40 text-sm">
                        {{ testimonial.date }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <button
          @click="previousSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="currentIndex = index"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'w-8 bg-oozami-lightblue' : 'bg-white/30'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import testimonialsBackground from '@/assets/images/testimonials-bg.jpg'

interface Testimonial {
  id: number
  name: string
  company: string
  text: string
  rating: number
  date: string
}

const headerRef = ref<HTMLElement>()
const carouselRef = ref<HTMLElement>()

const currentIndex = ref(0)
let autoPlayInterval: number | null = null

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: 'Sophie Martin',
    company: 'StartUp Tech',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exceptional service and outstanding results!',
    rating: 5,
    date: 'Il y a 2 semaines',
  },
  {
    id: 2,
    name: 'Jean Dupont',
    company: 'Entreprise ABC',
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. L'équipe a dépassé toutes nos attentes. Professionnalisme et créativité au rendez-vous.",
    rating: 5,
    date: 'Il y a 1 mois',
  },
  {
    id: 3,
    name: 'Marie Lambert',
    company: 'E-commerce Plus',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Un travail remarquable qui a transformé notre présence en ligne.',
    rating: 4,
    date: 'Il y a 1 mois',
  },
  {
    id: 4,
    name: 'Thomas Bernard',
    company: 'Innovation Labs',
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Une collaboration fructueuse du début à la fin du projet.',
    rating: 5,
    date: 'Il y a 2 mois',
  },
  {
    id: 5,
    name: 'Claire Rousseau',
    company: 'Digital Agency',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Résultats au-delà de nos espérances, je recommande vivement!',
    rating: 5,
    date: 'Il y a 3 mois',
  },
])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const previousSlide = () => {
  currentIndex.value =
    currentIndex.value === 0 ? testimonials.value.length - 1 : currentIndex.value - 1
}

const startAutoPlay = () => {
  autoPlayInterval = window.setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
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
          } else if (element === carouselRef.value) {
            setTimeout(() => {
              element.classList.add('animate-in')
              startAutoPlay()
            }, 300)
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
  if (carouselRef.value) observer.observe(carouselRef.value)
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.testimonials-section {
  position: relative;
  overflow: hidden;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-attachment: fixed;
  z-index: -1;
}

.fade-in-down {
  transform: translateY(-30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-down.animate-in,
.testimonials-carousel.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.testimonials-carousel {
  transform: translateY(30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.slide-move,
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
