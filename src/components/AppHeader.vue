<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[scrolled ? 'bg-white dark:bg-oozami-darkblue shadow-lg' : 'bg-transparent']"
  >
    <div
      :class="[
        'mx-auto px-4 sm:px-6 transition-all duration-300',
        isDashboard ? 'max-w-full lg:px-4' : 'max-w-7xl lg:px-8',
      ]"
    >
      <div class="flex justify-between items-center h-16">
        <HeaderLogo />
        <div class="hidden md:flex">
          <HeaderNavigation />
        </div>
        <HeaderActions />
        <HeaderMobile class="md:hidden" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderLogo from './header/HeaderLogo.vue'
import HeaderNavigation from './header/HeaderNavigation.vue'
import HeaderActions from './header/HeaderActions.vue'
import HeaderMobile from './header/HeaderMobile.vue'

const route = useRoute()
const scrolled = ref(false)

const isDashboard = computed(() => route.path.startsWith('/dashboard'))

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
