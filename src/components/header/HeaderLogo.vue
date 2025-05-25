<template>
  <div class="flex items-center">
    <a href="#" @click="handleLogoClick" class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-oozami-lightblue rounded-lg flex items-center justify-center">
        <span class="text-white font-bold text-lg">L</span>
      </div>
      <span class="text-xl font-bold text-gray-900 dark:text-white"> Logo </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogoClick = (e: Event) => {
  e.preventDefault()
  router.push('/')
}
</script>
