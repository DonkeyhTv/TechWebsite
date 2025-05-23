<template>
  <div class="flex items-center">
    <button
      @click="toggleSearch"
      class="text-oozami-black dark:text-white p-2"
      aria-label="Rechercher"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>

    <div class="mr-2">
      <HeaderLanguagesSelector @language-changed="handleLanguageChange" />
    </div>

    <button
      @click="toggleDarkMode"
      class="text-white bg-oozami-black dark:bg-white dark:text-oozami-black p-2 rounded-md transition-colors duration-200"
      aria-label="Changer le thème"
    >
      <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeaderLanguagesSelector from './HeaderLanguagesSelector.vue'

const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')

  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = document.documentElement.classList.contains('dark')
  }
})

const toggleSearch = () => {
  console.log('Ouvrir la recherche')
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const handleLanguageChange = (newLanguage) => {
  console.log('Langue changée:', newLanguage)
}
</script>
