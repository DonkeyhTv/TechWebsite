<template>
  <div>
    <main class="flex-1">
      <HeroSection />
    </main>
    <section id="services" class="flex-1">
      <ServicesSection />
    </section>
    <section id="about" class="flex-1">
      <AboutSection />
    </section>
    <section class="flex-1">
      <WhyChooseUsSection />
    </section>
    <section id="portfolio" class="flex-1">
      <PortfolioSection />
    </section>
    <section class="flex-1">
      <ClientsSection />
    </section>
    <section class="flex-1">
      <TestimonialsSection />
    </section>
    <section id="contact" class="flex-1">
      <ContactSection />
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
import PortfolioSection from '@/components/sections/PortfolioSection.vue'
import ClientsSection from '@/components/sections/ClientsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

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
