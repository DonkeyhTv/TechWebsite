<template>
  <div class="footer-column text-center md:text-left">
    <h3 class="text-white font-bold text-lg mb-6">{{ $t('footer.links.title') }}</h3>

    <ul class="space-y-3">
      <li v-for="link in links" :key="link.name">
        <a
          :href="link.url"
          class="text-gray-300 hover:text-oozami-lightblue flex justify-center md:justify-start items-center gap-2 hover:pl-1.5 transition-all"
        >
          <svg
            class="w-4 h-4 text-oozami-lightblue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          {{ link.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const links = [
  { name: 'Google', url: 'https://google.com' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Wikipedia', url: 'https://wikipedia.org' },
]
</script>
