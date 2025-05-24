<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="flex h-screen">
      <aside
        :class="[
          'fixed inset-y-0 left-0 z-10 pt-16 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 lg:relative lg:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        ]"
      >
        <nav class="p-4 space-y-2">
          <RouterLink
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            @click="closeSidebar"
            class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200"
            :class="[
              $route.path === item.path
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700',
            ]"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span class="font-medium">{{ item.label }}</span>
          </RouterLink>
        </nav>

        <div class="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
          <RouterLink
            to="/"
            class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <Home class="w-5 h-5" />
            <span>Retour au site</span>
          </RouterLink>
        </div>
      </aside>

      <div
        v-if="isSidebarOpen"
        @click="closeSidebar"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
      ></div>

      <div class="flex-1 flex flex-col">
        <header class="bg-white dark:bg-gray-800 shadow-sm">
          <div class="flex items-center justify-between h-16 px-6">
            <button
              @click="toggleSidebar"
              class="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Menu class="w-6 h-6" />
            </button>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto">
          <div class="p-6">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import {
  BarChart3,
  Users,
  Target,
  Settings,
  FileText,
  TrendingUp,
  Home,
  Menu,
  X,
  Sun,
  Moon,
} from 'lucide-vue-next'

const route = useRoute()
const isSidebarOpen = ref(false)
const isDark = ref(false)
const currentDateTime = ref('')

const menuItems = [
  { path: '/dashboard', label: 'Analytics', icon: BarChart3 },
  { path: '/dashboard/visitors', label: 'Visiteurs', icon: Users },
  { path: '/dashboard/goals', label: 'Objectifs', icon: Target },
  { path: '/dashboard/personalization', label: 'Personnalisation', icon: TrendingUp },
  { path: '/dashboard/reports', label: 'Rapports', icon: FileText },
  { path: '/dashboard/settings', label: 'Paramètres', icon: Settings },
]

const currentPageTitle = computed(() => {
  const item = menuItems.find((item) => item.path === route.path)
  return item?.label || 'Dashboard'
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const updateDateTime = () => {
  const now = new Date()
  currentDateTime.value = now.toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

let dateInterval: NodeJS.Timeout

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value =
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }

  updateDateTime()
  dateInterval = setInterval(updateDateTime, 60000)
})

onUnmounted(() => {
  if (dateInterval) {
    clearInterval(dateInterval)
  }
})
</script>
