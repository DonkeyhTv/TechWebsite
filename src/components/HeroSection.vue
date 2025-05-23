<template>
  <section
    id="accueil"
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Background avec gradient -->
    <div class="absolute inset-0 bg-gradient-blue dark:bg-gradient-dark"></div>

    <!-- Effets de background -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <div class="space-y-8">
        <!-- Titre principal -->
        <h1 class="text-5xl md:text-7xl font-bold text-white dark:text-white leading-tight">
          Bienvenue sur
          <span class="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            OOZAMI
          </span>
        </h1>

        <!-- Sous-titre -->
        <p
          class="text-xl md:text-2xl text-white/90 dark:text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            @click="scrollToSection('services')"
            class="px-8 py-4 bg-white text-custom-blue font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Découvrir nos services
          </button>
          <button
            @click="scrollToSection('contact')"
            class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-custom-blue transition-all duration-300 transform hover:scale-105"
          >
            Nous contacter
          </button>
        </div>

        <!-- Indicateur de scroll -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Props pour personnaliser le hero selon les pages
interface Props {
  title?: string
  subtitle?: string
  backgroundType?: 'gradient' | 'image' | 'video'
  showButtons?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Bienvenue sur OOZAMI',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  backgroundType: 'gradient',
  showButtons: true,
})

// Fonction pour scroller vers une section
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
</script>
