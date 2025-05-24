<template>
  <div>
    <main class="flex-1">
      <HeroSection />
    </main>
    <main class="flex-1">
      <TestSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import TestSection from '@/components/TestSection.vue'
import SitecoreAnalyticsSection from '@/components/sections/SitecoreAnalyticsSection.vue'
</script>
