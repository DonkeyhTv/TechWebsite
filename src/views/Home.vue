<template>
  <div>
    <main class="flex-1">
      <HeroSection />
    </main>
    <section class="flex-1">
      <ServicesSection />
    </section>
    <section class="flex-1">
      <AboutSection />
    </section>
    <section class="flex-1">
      <WhyChooseUsSection />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '@/composables/useSEO'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection.vue'

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
