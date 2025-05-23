import { ref, computed } from 'vue'

const isLoadingState = ref(false)
const progressState = ref(0)
let loadingStartTime = 0
let progressInterval: ReturnType<typeof setInterval> | null = null

export const useLoader = () => {
  const isLoading = computed(() => isLoadingState.value)
  const progress = computed(() => progressState.value)

  const startLoading = () => {
    isLoadingState.value = true
    progressState.value = 0
    loadingStartTime = Date.now()
    simulateProgress()
  }

  const stopLoading = () => {
    const elapsedTime = Date.now() - loadingStartTime
    const remainingTime = Math.max(0, 1000 - elapsedTime)

    if (remainingTime > 0) {
      setTimeout(() => {
        completeLoading()
      }, remainingTime)
    } else {
      completeLoading()
    }
  }

  const completeLoading = () => {
    const animateToComplete = () => {
      if (progressState.value < 100) {
        progressState.value = Math.min(progressState.value + 5, 100)
        requestAnimationFrame(animateToComplete)
      } else {
        if (progressInterval) {
          clearInterval(progressInterval)
          progressInterval = null
        }

        setTimeout(() => {
          isLoadingState.value = false
          progressState.value = 0
        }, 500)
      }
    }

    animateToComplete()
  }

  const simulateProgress = () => {
    if (progressInterval) {
      clearInterval(progressInterval)
    }

    progressInterval = setInterval(() => {
      if (!isLoadingState.value) {
        if (progressInterval) {
          clearInterval(progressInterval)
          progressInterval = null
        }
        return
      }

      if (progressState.value < 90) {
        const increment = progressState.value < 60 ? Math.random() * 8 + 3 : Math.random() * 3 + 1

        progressState.value = Math.min(progressState.value + increment, 90)
      }
    }, 100)
  }

  return {
    isLoading,
    progress,
    startLoading,
    stopLoading,
  }
}
