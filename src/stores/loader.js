import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoaderStore = defineStore('loader', () => {
  const isLoading = ref(false)
  const loadingProgress = ref(0)
  let loadingInterval = null

  const startLoading = () => {
    isLoading.value = true
    loadingProgress.value = 0

    loadingInterval = setInterval(() => {
      if (loadingProgress.value < 90) {
        const increment =
          loadingProgress.value < 60 ? Math.random() * 15 + 5 : Math.random() * 5 + 2

        loadingProgress.value = Math.min(loadingProgress.value + increment, 90)
      }
    }, 200)
  }

  const finishLoading = () => {
    if (loadingInterval) {
      clearInterval(loadingInterval)
    }

    loadingProgress.value = 100
    setTimeout(() => {
      isLoading.value = false
      loadingProgress.value = 0
    }, 500)
  }

  const setProgress = (progress) => {
    loadingProgress.value = Math.min(Math.max(progress, 0), 100)
  }

  const forceStop = () => {
    if (loadingInterval) {
      clearInterval(loadingInterval)
    }
    isLoading.value = false
    loadingProgress.value = 0
  }

  return {
    isLoading,
    loadingProgress,
    startLoading,
    finishLoading,
    setProgress,
    forceStop,
  }
})
