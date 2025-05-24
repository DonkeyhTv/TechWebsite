<template>
  <div>
    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div
        v-for="stat in quickStats"
        :key="stat.label"
        class="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
            <p class="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {{ stat.value }}
            </p>
            <p :class="['text-sm mt-2', stat.change > 0 ? 'text-green-600' : 'text-red-600']">
              {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}% vs hier
            </p>
          </div>
          <div
            :class="[
              'p-3 rounded-full',
              stat.change > 0
                ? 'bg-green-100 dark:bg-green-900/20'
                : 'bg-red-100 dark:bg-red-900/20',
            ]"
          >
            <component
              :is="stat.icon"
              :class="['w-6 h-6', stat.change > 0 ? 'text-green-600' : 'text-red-600']"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Analytics Section -->
    <SitecoreAnalyticsSection />

    <!-- Additional Dashboard Features -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <!-- Recent Alerts -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Alertes récentes</h3>
        <div class="space-y-3">
          <div
            v-for="alert in alerts"
            :key="alert.id"
            :class="[
              'p-3 rounded-lg border',
              alert.type === 'warning'
                ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                : alert.type === 'error'
                  ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                  : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
            ]"
          >
            <div class="flex items-start space-x-3">
              <AlertCircle
                :class="[
                  'w-5 h-5 mt-0.5',
                  alert.type === 'warning'
                    ? 'text-yellow-600'
                    : alert.type === 'error'
                      ? 'text-red-600'
                      : 'text-blue-600',
                ]"
              />
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ alert.title }}
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {{ alert.message }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  {{ alert.time }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Actions rapides</h3>
        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="action in quickActions"
            :key="action.label"
            @click="handleAction(action.action)"
            class="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-left"
          >
            <component :is="action.icon" class="w-5 h-5 text-blue-600 mb-2" />
            <p class="text-sm font-medium text-gray-900 dark:text-white">
              {{ action.label }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {{ action.description }}
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SitecoreAnalyticsSection from '@/components/sections/SitecoreAnalyticsSection.vue'
import {
  Users,
  TrendingUp,
  Target,
  Clock,
  AlertCircle,
  Download,
  RefreshCw,
  Send,
  BarChart3,
} from 'lucide-vue-next'

const quickStats = ref([
  { label: "Visiteurs aujourd'hui", value: '2,847', change: 12, icon: Users },
  { label: 'Taux de conversion', value: '3.4%', change: -5, icon: Target },
  { label: 'Engagement moyen', value: '73%', change: 8, icon: TrendingUp },
  { label: 'Temps moyen', value: '4m 32s', change: 15, icon: Clock },
])

const alerts = ref([
  {
    id: 1,
    type: 'warning',
    title: 'Pic de trafic détecté',
    message: 'Le trafic a augmenté de 150% au cours de la dernière heure',
    time: 'Il y a 10 minutes',
  },
  {
    id: 2,
    type: 'error',
    title: 'Objectif non atteint',
    message: 'L\'objectif "Inscription Newsletter" est 20% en dessous de la cible',
    time: 'Il y a 1 heure',
  },
  {
    id: 3,
    type: 'info',
    title: 'Nouveau segment identifié',
    message: 'Un nouveau segment "Mobile First Users" a été créé automatiquement',
    time: 'Il y a 2 heures',
  },
])

const quickActions = ref([
  {
    label: 'Export rapport',
    description: 'Générer PDF',
    icon: Download,
    action: 'export',
  },
  {
    label: 'Actualiser',
    description: 'Données temps réel',
    icon: RefreshCw,
    action: 'refresh',
  },
  {
    label: 'Envoyer rapport',
    description: 'Par email',
    icon: Send,
    action: 'send',
  },
  {
    label: 'Analyser',
    description: 'Insights IA',
    icon: BarChart3,
    action: 'analyze',
  },
])

const handleAction = (action: string) => {
  console.log('Action:', action)
}
</script>
