<template>
  <div class="footer-column">
    <h3 class="text-white font-bold text-lg mb-6 text-center md:text-left">
      {{ $t('footer.contact.title') }}
    </h3>

    <div class="space-y-4">
      <a
        href="mailto:example@support.com"
        class="flex items-start gap-3 text-gray-300 hover:text-oozami-lightblue transition-colors group justify-center md:justify-start"
      >
        <svg
          class="w-5 h-5 text-oozami-lightblue mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <span>example@support.com</span>
      </a>

      <div class="flex items-start gap-3 text-gray-300 justify-center md:justify-start">
        <svg
          class="w-5 h-5 text-oozami-lightblue mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <span class="text-center md:text-left">{{ $t('footer.contact.address') }}</span>
      </div>

      <a
        href="tel:+20123456789"
        class="flex items-start gap-3 text-gray-300 hover:text-oozami-lightblue transition-colors group justify-center md:justify-start"
      >
        <svg
          class="w-5 h-5 text-oozami-lightblue mt-0.5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
        <span>+20123456789</span>
      </a>

      <div class="flex items-center gap-3 mt-6 justify-center md:justify-start">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          class="w-10 h-10 bg-oozami-lightblue/10 rounded-lg flex items-center justify-center hover:bg-oozami-lightblue hover:text-white transition-all duration-300 text-oozami-lightblue"
          :aria-label="social.name"
        >
          <component :is="social.icon" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-vue-next'

const socials = [
  { name: 'Facebook', url: '#', icon: Facebook },
  { name: 'Twitter', url: '#', icon: Twitter },
  { name: 'Instagram', url: '#', icon: Instagram },
  { name: 'LinkedIn', url: '#', icon: Linkedin },
]
</script>
