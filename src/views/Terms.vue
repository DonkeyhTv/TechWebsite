<template>
  <TermsPage />
</template>

<script setup lang="ts">
import TermsPage from '@/components/TermsPage.vue'
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: "Conditions d'Utilisation - OOZAMI",
  description:
    "Consultez nos conditions d'utilisation et termes de service. Comprenez vos droits et obligations lors de l'utilisation des services digitaux OOZAMI.",
  keywords: [
    'conditions utilisation',
    'termes service',
    'mentions légales',
    'OOZAMI',
    'droit belge',
  ],
})
</script>
