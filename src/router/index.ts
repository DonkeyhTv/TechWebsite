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
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: 'Contact',
      description: 'Contactez OOZAMI pour vos projets digitaux',
    },
  },
  {
    path: '/technologies',
    name: 'Technologies',
    component: () => import('@/views/Technologies.vue'),
    meta: {
      title: 'Technologies',
      description: 'Technologies utilisées par OOZAMI',
    },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/views/Portfolio.vue'),
    meta: {
      title: 'Portfolio',
      description:
        'Découvrez notre portfolio complet avec tous nos projets de développement web, design et applications mobiles.',
    },
  },
  {
    path: '/portfolio/:id',
    name: 'ProjectDetail',
    component: () => import('@/views/ProjectDetail.vue'),
    props: true,
    meta: {
      title: 'Projet - OOZAMI',
      description:
        'Découvrez les détails de ce projet : technologies utilisées, défis relevés et solutions apportées.',
    },
  },
  {
    path: '/conditions-utilisation',
    name: 'Terms',
    component: () => import('@/views/Terms.vue'),
    meta: {
      title: "Conditions d'Utilisation - OOZAMI",
      description:
        "Consultez nos conditions d'utilisation et termes de service pour comprendre vos droits et obligations lors de l'utilisation de nos services OOZAMI.",
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/PrivacyPage.vue'),
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
