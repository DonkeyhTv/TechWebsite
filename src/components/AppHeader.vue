<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled ? 'bg-white dark:bg-oozami-darkblue shadow-lg transition-all' : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeaderLogo from './header/HeaderLogo.vue'
import HeaderNavigation from './header/HeaderNavigation.vue'
import HeaderActions from './header/HeaderActions.vue'
import HeaderMobile from './header/HeaderMobile.vue'

const scrolled = ref(false)

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
