<template>
  <div class="border-t border-oozami-lightblue/20 pt-4 mt-4">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-white text-xs md:text-sm">
        © {{ currentYear }} {{ $t('footer.createdBy') }}
        <a
          href="https://steve-amissi.be"
          target="_blank"
          rel="noopener noreferrer"
          class="text-oozami-lightblue hover:text-white transition-colors"
        >
          {{ $t('footer.companyName') }}
        </a>
      </p>

      <div class="flex items-center gap-6">
        <router-link
          to="/terms"
          class="text-white hover:text-oozami-lightblue text-xs md:text-sm transition-colors"
        >
          {{ $t('footer.terms') }}
        </router-link>
        <span class="text-oozami-lightblue">|</span>
        <router-link
          to="/privacy"
          class="text-white hover:text-oozami-lightblue text-xs md:text-sm transition-colors"
        >
          {{ $t('footer.privacy') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
