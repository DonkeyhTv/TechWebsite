<template>
  <div
    id="app"
    class="min-h-screen bg-white dark:bg-oozami-darkblue transition-colors duration-300"
  >
    <StructuredData />
    <PageLoader />

    <Transition
      enter-active-class="transition-opacity duration-1000 delay-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div v-if="!isLoading">
        <AppHeader />

        <RouterView v-slot="{ Component }">
          <Transition
            enter-active-class="transition-opacity duration-500"
            enter-from-class="opacity-0"
            leave-active-class="transition-opacity duration-300"
            leave-to-class="opacity-0"
            mode="out-in"
          >
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useLoader } from '@/composables/useLoader'
import AppHeader from './components/AppHeader.vue'
import PageLoader from './components/PageLoader.vue'
import StructuredData from './components/StructuredData.vue'

const { isLoading, startLoading, stopLoading } = useLoader()

onMounted(() => {
  startLoading()

  const savedTheme = localStorage.getItem('theme')

  // Mode sombre par défaut
  if (!savedTheme || savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const handleLoad = () => {
    stopLoading()
  }

  if (document.readyState === 'complete') {
    handleLoad()
  } else {
    window.addEventListener('load', handleLoad)
  }
})
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
