<template>
  <div>
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Rapports</h2>
      <p class="text-gray-600 dark:text-gray-400">Génération et gestion des rapports analytics</p>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Créer un nouveau rapport
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Type de rapport</label
          >
          <select
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option>Rapport mensuel</option>
            <option>Rapport hebdomadaire</option>
            <option>Rapport personnalisé</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >Période</label
          >
          <select
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option>30 derniers jours</option>
            <option>7 derniers jours</option>
            <option>Personnalisée</option>
          </select>
        </div>
      </div>
      <button
        class="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
      >
        Générer le rapport
      </button>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Rapports récents</h3>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                Nom
              </th>
              <th class="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                Type
              </th>
              <th class="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                Date
              </th>
              <th class="text-left py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">
                Statut
              </th>
              <th
                class="text-center py-3 px-6 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="report in reports"
              :key="report.id"
              class="border-b border-gray-200 dark:border-gray-700"
            >
              <td class="py-4 px-6 text-sm text-gray-900 dark:text-white">{{ report.name }}</td>
              <td class="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">{{ report.type }}</td>
              <td class="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">{{ report.date }}</td>
              <td class="py-4 px-6">
                <span
                  :class="[
                    'inline-flex px-2 py-1 text-xs font-medium rounded-full',
                    report.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : report.status === 'processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800',
                  ]"
                >
                  {{
                    report.status === 'completed'
                      ? 'Terminé'
                      : report.status === 'processing'
                        ? 'En cours'
                        : 'En attente'
                  }}
                </span>
              </td>
              <td class="py-4 px-6">
                <div class="flex justify-center space-x-2">
                  <button class="text-blue-600 hover:text-blue-800">
                    <Download class="w-4 h-4" />
                  </button>
                  <button class="text-gray-600 hover:text-gray-800">
                    <Eye class="w-4 h-4" />
                  </button>
                  <button class="text-red-600 hover:text-red-800">
                    <Trash2 class="w-4 h-4" />
                  </button>
                </div>
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
import { Download, Eye, Trash2 } from 'lucide-vue-next'

const reports = ref([
  { id: 1, name: 'Rapport Mai 2025', type: 'Mensuel', date: '01/05/2025', status: 'completed' },
  {
    id: 2,
    name: 'Analytics Semaine 21',
    type: 'Hebdomadaire',
    date: '20/05/2025',
    status: 'processing',
  },
  {
    id: 3,
    name: 'Rapport Conversion Q2',
    type: 'Trimestriel',
    date: '15/05/2025',
    status: 'completed',
  },
  {
    id: 4,
    name: 'Export Sitecore xDB',
    type: 'Personnalisé',
    date: '10/05/2025',
    status: 'pending',
  },
])
</script>
