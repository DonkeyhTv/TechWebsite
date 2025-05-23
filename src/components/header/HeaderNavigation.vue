<template>
  <nav class="flex space-x-8">
    <a
      v-for="item in navItems"
      :key="item.name"
      :href="item.href"
      class="text-gray-700 hover:text-oozami-lightblue dark:text-white dark:hover:text-oozami-lightblue px-3 py-2 text-sm font-medium transition-colors duration-200"
    >
      {{ $t(item.i18nKey) }}
    </a>
  </nav>
</template>

<script setup>
const navItems = [
  { name: 'Accueil', href: '/', i18nKey: 'nav.home' },
  { name: 'Produits', href: '/produits', i18nKey: 'nav.products' },
  { name: 'Services', href: '/services', i18nKey: 'nav.services' },
  { name: 'À propos', href: '/a-propos', i18nKey: 'nav.about' },
  { name: 'Contact', href: '/contact', i18nKey: 'nav.contact' },
]
</script>
