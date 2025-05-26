<template>
  <Transition name="fade-scale">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      :class="[
        'fixed z-50 w-12 h-12 bg-oozami-lightblue hover:bg-oozami-darkblue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group',
        isNearFooter ? 'bottom-16 md:bottom-8' : 'bottom-8',
        'right-8',
      ]"
      :aria-label="$t('scrollToTop.ariaLabel')"
    >
      <svg
        class="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const isNearFooter = ref(false)
const scrollThreshold = 300
const footerOffset = 300

const handleScroll = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  isVisible.value = scrollY > scrollThreshold

  const distanceFromBottom = documentHeight - (scrollY + windowHeight)
  isNearFooter.value = distanceFromBottom < footerOffset && window.innerWidth < 768
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(74, 144, 226, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0);
  }
}

button:hover {
  animation: pulse 2s infinite;
}

@media (max-width: 640px) {
  button {
    right: 1.5rem;
    width: 2.75rem;
    height: 2.75rem;
  }

  button svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
