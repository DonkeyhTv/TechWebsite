<template>
  <div>
    <main class="flex-1">
      <HeroSection />
    </main>
    <section class="flex-1">
      <TestSection />
    </section>
    <section class="flex-1">
      <SitecoreAnalyticsSection />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '@/composables/useSEO'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/HeroSection.vue'
import TestSection from '@/components/TestSection.vue'
import SitecoreAnalyticsSection from '@/components/sections/SitecoreAnalyticsSection.vue'

const { t } = useI18n()

useSEO({
  title: t('seo.home.title'),
  description: t('seo.home.description'),
  keywords: [
    'agence web belgique',
    'développement web tournai',
    'design digital',
    'sitecore partner',
    'vue.js development',
    'solutions digitales sur mesure',
    'marketing digital belgique',
  ],
})
</script>
