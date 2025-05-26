<template>
  <footer class="bg-oozami-darkblue pt-16 pb-4 relative overflow-hidden text-center md:text-left">
    <div class="absolute inset-0 z-0">
      <img
        :src="footerBackground"
        alt="Footer background"
        class="w-full h-full object-cover opacity-20"
      />
    </div>

    <div class="absolute inset-0 opacity-10 z-10">
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-oozami-lightblue rounded-full filter blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-oozami-lightblue rounded-full filter blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 max-w-7xl relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div class="md:col-span-4">
          <FooterCompany />
        </div>

        <div class="md:col-span-2">
          <FooterLinks />
        </div>

        <div class="md:col-span-2">
          <FooterResources />
        </div>

        <div class="md:col-span-4">
          <FooterContact />
        </div>
      </div>

      <FooterBottom />
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterCompany from './footer/FooterCompany.vue'
import FooterLinks from './footer/FooterLinks.vue'
import FooterResources from './footer/FooterResources.vue'
import FooterContact from './footer/FooterContact.vue'
import FooterBottom from './footer/FooterBottom.vue'
import footerBackground from '@/assets/images/footer-bg.jpg'
</script>
