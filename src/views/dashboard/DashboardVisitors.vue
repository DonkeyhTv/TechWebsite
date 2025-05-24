<template>
  <div>
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Analyse des visiteurs</h2>
      <p class="text-gray-600 dark:text-gray-400">Détails et comportements des visiteurs du site</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          Nouveaux visiteurs
        </h3>
        <p class="text-3xl font-bold text-gray-900 dark:text-white">1,234</p>
        <p class="text-sm text-green-600 mt-2">+15% cette semaine</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
          Visiteurs récurrents
        </h3>
        <p class="text-3xl font-bold text-gray-900 dark:text-white">567</p>
        <p class="text-sm text-blue-600 mt-2">23% du total</p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Taux de rebond</h3>
        <p class="text-3xl font-bold text-gray-900 dark:text-white">42%</p>
        <p class="text-sm text-red-600 mt-2">-3% vs mois dernier</p>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Visiteurs par source</h3>
      <div class="space-y-4">
        <div v-for="source in sources" :key="source.name">
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm text-gray-600 dark:text-gray-400">{{ source.name }}</span>
            <span class="text-sm font-medium">{{ source.visitors }}</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              :class="source.color"
              class="h-2 rounded-full transition-all duration-1000"
              :style="{ width: `${source.percentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sources = ref([
  { name: 'Recherche organique', visitors: '3,456', percentage: 45, color: 'bg-blue-500' },
  { name: 'Direct', visitors: '2,234', percentage: 30, color: 'bg-green-500' },
  { name: 'Réseaux sociaux', visitors: '1,234', percentage: 15, color: 'bg-purple-500' },
  { name: 'Referral', visitors: '789', percentage: 10, color: 'bg-yellow-500' },
])
</script>
