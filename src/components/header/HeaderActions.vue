<template>
  <div class="flex items-center space-x-4">
    <RouterLink
      to="/dashboard"
      class="hidden md:inline-flex items-center px-3 py-2 text-oozami-black dark:text-white"
    >
      <BarChart3 class="w-5 h-5" />
    </RouterLink>

    <HeaderLanguagesSelector />

    <button
      @click="toggleDarkMode"
      class="p-2 rounded-lg text-white dark:text-oozami-black bg-oozami-black dark:bg-white transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      <Sun v-if="isDarkMode" class="w-5 h-5" />
      <Moon v-else class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Sun, Moon, BarChart3 } from 'lucide-vue-next'
import HeaderLanguagesSelector from './HeaderLanguagesSelector.vue'

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  isDarkMode.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>
