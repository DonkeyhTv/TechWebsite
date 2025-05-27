<template>
  <section
    class="page-header relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-oozami-darkblue to-oozami-darkblue/90 overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <img
        :src="headerBackground"
        alt="Page header background"
        class="w-full h-full object-cover opacity-20"
      />
    </div>

    <div class="absolute inset-0 opacity-10 z-10">
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-oozami-lightblue rounded-full filter blur-3xl"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-oozami-lightblue rounded-full filter blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 max-w-7xl relative z-20">
      <div ref="headerContent" class="fade-in-up opacity-0 text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {{ title }}
        </h1>

        <nav aria-label="Breadcrumb" class="flex justify-center">
          <ol class="flex items-center space-x-2 text-sm md:text-base">
            <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
              <router-link
                v-if="!crumb.active"
                :to="crumb.path"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ crumb.label }}
              </router-link>
              <span v-else class="text-oozami-lightblue font-medium">
                {{ crumb.label }}
              </span>

              <svg
                v-if="index < breadcrumbs.length - 1"
                class="w-4 h-4 mx-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import headerBackground from '@/assets/images/header-page.jpg'

interface Breadcrumb {
  label: string
  path: string
  active?: boolean
}

interface Props {
  title: string
  breadcrumbs: Breadcrumb[]
}

defineProps<Props>()

const headerContent = ref<HTMLElement>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  if (headerContent.value) {
    observer.observe(headerContent.value)
  }
})
</script>

<style scoped>
.fade-in-up {
  transform: translateY(30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-up.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}
</style>
