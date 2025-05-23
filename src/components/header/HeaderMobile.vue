<template>
  <div class="md:hidden">
    <button
      @click="toggleMobileMenu"
      class="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Ouvrir le menu"
    >
      <svg
        v-if="!isMobileMenuOpen"
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition-opacity ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" @click="closeMobileMenu" class="fixed inset-0 z-40"></div>
    </Transition>

    <Transition
      enter-active-class="transition-transform ease-out duration-300"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform ease-in duration-200"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-16 left-0 h-[calc(100vh-4rem)] w-full bg-oozami-lightblue z-50"
      >
        <nav class="px-4 py-6 space-y-2">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="closeMobileMenu"
            class="block text-white px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200"
          >
            {{ $t(item.i18nKey) }}
          </a>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Accueil', href: '/', i18nKey: 'nav.home' },
  { name: 'Produits', href: '/produits', i18nKey: 'nav.products' },
  { name: 'Services', href: '/services', i18nKey: 'nav.services' },
  { name: 'À propos', href: '/a-propos', i18nKey: 'nav.about' },
  { name: 'Contact', href: '/contact', i18nKey: 'nav.contact' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>
