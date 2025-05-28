<template>
  <div class="technologies-page">
    <PageHeader :title="$t('pages.technologies.title')" :breadcrumbs="breadcrumbs" />
    <TechnologiesGrid />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'
import TechnologiesGrid from '@/components/technologies/TechnologiesGrid.vue'

const { t } = useI18n()

const breadcrumbs = computed(() => [
  {
    label: t('breadcrumb.home'),
    path: '/',
  },
  {
    label: t('breadcrumb.technologies'),
    path: '/technologies',
    active: true,
  },
])
</script>
