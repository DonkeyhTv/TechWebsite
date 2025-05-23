import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useLoader } from '@/composables/useLoader'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
