<template>
  <div class="footer-column">
    <div class="mb-6">
      <h3 class="text-3xl font-bold text-oozami-lightblue">Logo Here</h3>
    </div>

    <p class="text-gray-300 text-sm leading-relaxed mb-6">
      {{ $t('footer.description') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  console.log('Subscribe:', email.value)
  email.value = ''
}
</script>
