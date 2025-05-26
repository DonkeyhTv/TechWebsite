<template>
  <nav class="flex space-x-8">
    <a
      v-for="item in navItems"
      :key="item.name"
      :href="item.href"
      @click.prevent="handleNavClick(item)"
      class="text-oozami-black hover:text-oozami-lightblue dark:text-white dark:hover:text-oozami-lightblue px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
    >
      {{ $t(item.i18nKey) }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

interface NavItem {
  name: string
  href: string
  i18nKey: string
  section?: string
}

const navItems: NavItem[] = [
  { name: 'Accueil', href: '/', i18nKey: 'nav.home' },
  { name: 'Services', href: '/#services', i18nKey: 'nav.services', section: 'services' },
  { name: 'Portfolio', href: '/#portfolio', i18nKey: 'nav.portfolio', section: 'portfolio' },
  { name: 'À propos', href: '/#about', i18nKey: 'nav.about', section: 'about' },
  { name: 'Contact', href: '/#contact', i18nKey: 'nav.contact', section: 'contact' },
]

const handleNavClick = async (item: NavItem) => {
  if (item.href === '/') {
    if (route.path !== '/') {
      await router.push('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  if (item.section) {
    if (route.path !== '/') {
      await router.push('/')
      setTimeout(() => {
        scrollToSection(item.section!)
      }, 100)
    } else {
      scrollToSection(item.section)
    }
  } else {
    router.push(item.href)
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 0
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}
</script>
