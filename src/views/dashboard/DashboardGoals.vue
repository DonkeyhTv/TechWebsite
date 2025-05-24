<template>
  <div>
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Objectifs et conversions
      </h2>
      <p class="text-gray-600 dark:text-gray-400">Suivi des objectifs et analyse des conversions</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div
        v-for="goal in mainGoals"
        :key="goal.name"
        class="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <div class="flex items-center justify-between mb-4">
          <component :is="goal.icon" class="w-8 h-8 text-blue-500" />
          <span
            :class="[
              'text-sm font-medium px-2 py-1 rounded-full',
              goal.status === 'achieved'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800',
            ]"
          >
            {{ goal.status === 'achieved' ? 'Atteint' : 'En cours' }}
          </span>
        </div>
        <h3 class="font-medium text-gray-900 dark:text-white mb-1">{{ goal.name }}</h3>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">{{ goal.value }}</p>
        <div class="mt-3">
          <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span>Progression</span>
            <span>{{ goal.progress }}%</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              class="bg-blue-500 h-2 rounded-full transition-all duration-1000"
              :style="{ width: `${goal.progress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Historique des conversions
      </h3>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Objectif
              </th>
              <th class="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Date
              </th>
              <th class="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Valeur
              </th>
              <th class="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="conversion in recentConversions"
              :key="conversion.id"
              class="border-b border-gray-100 dark:border-gray-700"
            >
              <td class="py-3 px-4 text-sm text-gray-900 dark:text-white">{{ conversion.goal }}</td>
              <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                {{ conversion.date }}
              </td>
              <td class="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
                {{ conversion.value }}
              </td>
              <td class="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                {{ conversion.source }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Target, Download, Mail, ShoppingCart } from 'lucide-vue-next'

const mainGoals = ref([
  { name: 'Téléchargements', value: '234', progress: 78, status: 'in-progress', icon: Download },
  { name: 'Inscriptions', value: '89', progress: 100, status: 'achieved', icon: Mail },
  { name: 'Demandes contact', value: '45', progress: 56, status: 'in-progress', icon: Target },
  { name: 'Achats', value: '12', progress: 40, status: 'in-progress', icon: ShoppingCart },
])

const recentConversions = ref([
  {
    id: 1,
    goal: 'Téléchargement brochure',
    date: '24/05/2025 14:32',
    value: '50 points',
    source: 'Google',
  },
  {
    id: 2,
    goal: 'Inscription newsletter',
    date: '24/05/2025 13:45',
    value: '25 points',
    source: 'Direct',
  },
  {
    id: 3,
    goal: 'Demande de démo',
    date: '24/05/2025 12:18',
    value: '100 points',
    source: 'LinkedIn',
  },
  { id: 4, goal: 'Achat licence', date: '24/05/2025 11:02', value: '500 points', source: 'Email' },
])
</script>
