<template>
  <div class="footer-column">
    <h3 class="text-white text-center md:text-start font-bold text-lg mb-6">
      {{ $t('footer.resources.title') }}
    </h3>

    <ul class="space-y-3">
      <li v-for="resource in resources" :key="resource.name">
        <router-link
          :to="resource.path"
          class="text-gray-300 hover:text-oozami-lightblue flex items-center justify-center md:justify-start gap-2 hover:pl-1.5 transition-all"
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
          {{ $t(`footer.resources.${resource.key}`) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const resources = [
  { name: 'Support', key: 'support', path: '#' },
  { name: 'Dashboard', key: 'dashboard', path: '#' },
  { name: 'Drivers', key: 'drivers', path: '#' },
  { name: 'Projects', key: 'projects', path: '#' },
]
</script>
