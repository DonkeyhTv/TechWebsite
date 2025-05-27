<template>
  <div class="contact-page">
    <PageHeader :title="$t('pages.contact.title')" :breadcrumbs="breadcrumbs" />

    <ContactInfo />

    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const { t } = useI18n()

const breadcrumbs = computed(() => [
  {
    label: t('breadcrumb.home'),
    path: '/',
  },
  {
    label: t('breadcrumb.contact'),
    path: '/contact',
    active: true,
  },
])
</script>
