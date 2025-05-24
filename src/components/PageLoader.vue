<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    leave-active-class="transition-opacity duration-500"
    leave-to-class="opacity-0"
  >
    <div v-if="isLoading" class="fixed inset-0 z-[100]">
      <div class="absolute inset-0 bg-oozami-lightblue"></div>

      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute inset-0 bg-oozami-darkblue transition-transform duration-500 ease-out"
          :style="{
            transform: `scaleX(${progress / 100})`,
            transformOrigin: 'center',
          }"
        ></div>
      </div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center">
          <div
            class="text-6xl md:text-8xl font-bold text-white mb-4 transition-all duration-300"
            :style="{ opacity: progress > 20 ? 1 : 0.3 }"
          >
            {{ Math.round(progress) }}%
          </div>
          <div
            class="text-xl text-white/80 font-light tracking-wider"
            :style="{ opacity: progress > 40 ? 1 : 0 }"
          >
            Chargement...
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useLoader } from '@/composables/useLoader'

const { isLoading, progress } = useLoader()
</script>
