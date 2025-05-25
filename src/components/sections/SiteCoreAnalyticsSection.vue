<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('sitecore.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          {{ $t('sitecore.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
        >
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">
              {{ metric.label }}
            </h3>
            <component :is="metric.icon" class="w-5 h-5 text-blue-500" />
          </div>
          <div class="flex items-baseline">
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              <CountUp :end="metric.value" :duration="2" />
              <span v-if="metric.suffix" class="text-lg">{{ metric.suffix }}</span>
            </p>
            <span
              v-if="metric.trend"
              :class="[
                'ml-2 text-sm font-medium',
                metric.trend > 0 ? 'text-green-600' : 'text-red-600',
              ]"
            >
              {{ metric.trend > 0 ? '+' : '' }}{{ metric.trend }}%
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {{ $t('sitecore.engagement.title') }}
          </h3>
          <div class="space-y-4">
            <div v-for="page in topPages" :key="page.name" class="relative">
              <div class="flex justify-between items-center mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-400">{{ page.name }}</span>
                <span class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ page.views }} vues
                </span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  class="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                  :style="{ width: `${(page.views / maxViews) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {{ $t('sitecore.personalization.title') }}
          </h3>
          <div class="space-y-3">
            <div
              v-for="pattern in patterns"
              :key="pattern.name"
              class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">{{ pattern.name }}</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ pattern.description }}</p>
                </div>
                <span
                  :class="[
                    'px-2 py-1 text-xs font-medium rounded-full',
                    pattern.score > 70
                      ? 'bg-green-100 text-green-800'
                      : pattern.score > 40
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800',
                  ]"
                >
                  {{ pattern.score }}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ $t('sitecore.realtime.title') }}
          </h3>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-sm text-gray-500 dark:text-gray-400">Live</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {{ $t('sitecore.realtime.activities') }}
            </h4>
            <div class="space-y-2">
              <TransitionGroup name="activity">
                <div
                  v-for="activity in recentActivities"
                  :key="activity.id"
                  class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div
                    class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"
                  >
                    <component
                      :is="activity.icon"
                      class="w-4 h-4 text-blue-600 dark:text-blue-400"
                    />
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 dark:text-white">{{ activity.action }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ activity.time }}</p>
                  </div>
                </div>
              </TransitionGroup>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {{ $t('sitecore.realtime.goals') }}
            </h4>
            <div class="space-y-3">
              <div v-for="goal in goals" :key="goal.name">
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm text-gray-600 dark:text-gray-400">{{ goal.name }}</span>
                  <span class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ goal.conversions }}
                  </span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div
                    class="bg-green-500 h-1.5 rounded-full transition-all duration-1000"
                    :style="{ width: `${goal.progress}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <button
          @click="showDemo = !showDemo"
          class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          {{ $t('sitecore.demo.button') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  TrendingUp,
  Users,
  Clock,
  MousePointer,
  Eye,
  Target,
  ShoppingCart,
  Mail,
} from 'lucide-vue-next'

interface Metric {
  label: string
  value: number
  suffix?: string
  trend?: number
  icon: any
}

interface Activity {
  id: number
  action: string
  time: string
  icon: any
}

const showDemo = ref(false)

const metrics = ref<Metric[]>([
  { label: 'Visiteurs actifs', value: 0, trend: 12, icon: Users },
  { label: 'Engagement moyen', value: 0, suffix: '%', trend: 8, icon: TrendingUp },
  { label: 'Durée moyenne', value: 0, suffix: 'm', trend: -5, icon: Clock },
])

const topPages = ref([
  { name: "Page d'accueil", views: 2847 },
  { name: 'Services', views: 1923 },
  { name: 'Produits', views: 1456 },
  { name: 'Contact', views: 892 },
])

const patterns = ref([
  { name: 'Visiteur Tech', description: 'Intéressé par les solutions techniques', score: 85 },
  { name: 'Décideur B2B', description: 'Recherche des informations commerciales', score: 62 },
  { name: 'Développeur', description: 'Consulte la documentation technique', score: 45 },
])

const goals = ref([
  { name: 'Téléchargement brochure', conversions: 47, progress: 78 },
  { name: 'Demande de contact', conversions: 23, progress: 46 },
  { name: 'Inscription newsletter', conversions: 89, progress: 89 },
])

const recentActivities = ref<Activity[]>([])

const maxViews = computed(() => Math.max(...topPages.value.map((p) => p.views)))

let activityInterval: ReturnType<typeof setInterval>

const generateActivity = (): Activity => {
  const actions = [
    { text: 'Nouveau visiteur depuis Paris', icon: Users },
    { text: 'Page Services consultée', icon: Eye },
    { text: 'Objectif "Contact" atteint', icon: Target },
    { text: 'Formulaire complété', icon: Mail },
    { text: 'Produit ajouté au panier', icon: ShoppingCart },
  ]

  const action = actions[Math.floor(Math.random() * actions.length)]

  return {
    id: Date.now(),
    action: action.text,
    time: 'Il y a ' + Math.floor(Math.random() * 60) + 's',
    icon: action.icon,
  }
}

onMounted(() => {
  setTimeout(() => {
    metrics.value[0].value = 147
    metrics.value[1].value = 73
    metrics.value[2].value = 4.5
  }, 500)

  for (let i = 0; i < 3; i++) {
    recentActivities.value.push(generateActivity())
  }

  activityInterval = setInterval(() => {
    if (recentActivities.value.length >= 5) {
      recentActivities.value.pop()
    }
    recentActivities.value.unshift(generateActivity())
  }, 5000)
})

onUnmounted(() => {
  if (activityInterval) {
    clearInterval(activityInterval)
  }
})
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CountUp: {
      props: {
        end: { type: Number, required: true },
        duration: { type: Number, default: 2 },
      },
      setup(props) {
        const count = ref(0)

        onMounted(() => {
          const increment = props.end / (props.duration * 50)
          const timer = setInterval(() => {
            count.value += increment
            if (count.value >= props.end) {
              count.value = props.end
              clearInterval(timer)
            }
          }, 20)
        })

        return () => count.value.toFixed(props.end % 1 === 0 ? 0 : 1)
      },
    },
  },
})
</script>

<style scoped>
.activity-enter-active {
  transition: all 0.3s ease-out;
}

.activity-leave-active {
  transition: all 0.3s ease-in;
}

.activity-enter-from {
  transform: translateX(-30px);
  opacity: 0;
}

.activity-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.activity-move {
  transition: transform 0.3s;
}
</style>
