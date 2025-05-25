import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useLoader } from '@/composables/useLoader'
import config from '../config/environments'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: () => import('../views/dashboard/DashboardHome.vue'),
      },
      {
        path: 'visitors',
        name: 'dashboard-visitors',
        component: () => import('../views/dashboard/DashboardVisitors.vue'),
      },
      {
        path: 'goals',
        name: 'dashboard-goals',
        component: () => import('../views/dashboard/DashboardGoals.vue'),
      },
      {
        path: 'personalization',
        name: 'dashboard-personalization',
        component: () => import('../views/dashboard/DashboardPersonalization.vue'),
      },
      {
        path: 'reports',
        name: 'dashboard-reports',
        component: () => import('../views/dashboard/DashboardReports.vue'),
      },
      {
        path: 'settings',
        name: 'dashboard-settings',
        component: () => import('../views/dashboard/DashboardSettings.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(config.basePath),
  routes,
})

router.beforeEach((to, from, next) => {
  const { startLoading, isLoading } = useLoader()

  if (to.path !== from.path && !isLoading.value) {
    startLoading()
  }

  next()
})

router.afterEach(() => {
  const { stopLoading } = useLoader()
  stopLoading()
})

export default router
