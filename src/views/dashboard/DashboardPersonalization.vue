<template>
  <div>
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Personnalisation</h2>
      <p class="text-gray-600 dark:text-gray-400">
        Segments et profils de personnalisation Sitecore
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Segments actifs</h3>
        <div class="space-y-3">
          <div
            v-for="segment in segments"
            :key="segment.id"
            class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
          >
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-medium text-gray-900 dark:text-white">{{ segment.name }}</h4>
              <span class="text-sm text-gray-500">{{ segment.users }} utilisateurs</span>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ segment.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="rule in segment.rules"
                :key="rule"
                class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {{ rule }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Performance des variantes
        </h3>
        <div class="space-y-4">
          <div v-for="test in abTests" :key="test.id">
            <div class="flex justify-between items-center mb-2">
              <span class="font-medium text-gray-900 dark:text-white">{{ test.name }}</span>
              <span class="text-sm text-gray-500">{{ test.visitors }} vues</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="variant in test.variants"
                :key="variant.name"
                class="p-3 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-700 dark:text-gray-300">{{ variant.name }}</span>
                  <span class="text-sm font-medium">{{ variant.conversion }}%</span>
                </div>
                <div class="mt-2 h-1 bg-gray-200 dark:bg-gray-600 rounded">
                  <div
                    :class="variant.winner ? 'bg-green-500' : 'bg-blue-500'"
                    class="h-1 rounded transition-all duration-1000"
                    :style="{ width: `${variant.conversion}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Matrice de personnalisation
      </h3>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="text-left py-3 px-4">Profil</th>
              <th class="text-center py-3 px-4">Tech Savvy</th>
              <th class="text-center py-3 px-4">Business</th>
              <th class="text-center py-3 px-4">Developer</th>
              <th class="text-center py-3 px-4">Marketer</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="profile in profiles"
              :key="profile.name"
              class="border-b border-gray-100 dark:border-gray-700"
            >
              <td class="py-3 px-4 font-medium">{{ profile.name }}</td>
              <td v-for="score in profile.scores" :key="score.type" class="text-center py-3 px-4">
                <span
                  :class="[
                    'inline-block w-16 px-2 py-1 rounded text-sm font-medium',
                    score.value > 70
                      ? 'bg-green-100 text-green-800'
                      : score.value > 40
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800',
                  ]"
                >
                  {{ score.value }}
                </span>
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

const segments = ref([
  {
    id: 1,
    name: 'Visiteurs High-Tech',
    users: 1234,
    description: 'Utilisateurs intéressés par les dernières technologies',
    rules: ['Visite > 3 pages tech', 'Temps > 5 min', 'Device: Desktop'],
  },
  {
    id: 2,
    name: 'Mobile First',
    users: 892,
    description: 'Utilisateurs principalement sur mobile',
    rules: ['Device: Mobile', 'Pages vues < 5', 'Bounce rate < 30%'],
  },
])

const abTests = ref([
  {
    id: 1,
    name: 'CTA Homepage',
    visitors: 5432,
    variants: [
      { name: 'Original', conversion: 3.2, winner: false },
      { name: 'Variante A', conversion: 4.8, winner: true },
    ],
  },
  {
    id: 2,
    name: 'Hero Banner',
    visitors: 3211,
    variants: [
      { name: 'Image', conversion: 2.1, winner: false },
      { name: 'Vidéo', conversion: 3.7, winner: true },
    ],
  },
])

const profiles = ref([
  {
    name: 'Nouveau visiteur',
    scores: [
      { type: 'tech', value: 45 },
      { type: 'business', value: 30 },
      { type: 'developer', value: 20 },
      { type: 'marketer', value: 25 },
    ],
  },
  {
    name: 'Visiteur récurrent',
    scores: [
      { type: 'tech', value: 85 },
      { type: 'business', value: 60 },
      { type: 'developer', value: 75 },
      { type: 'marketer', value: 40 },
    ],
  },
])
</script>
