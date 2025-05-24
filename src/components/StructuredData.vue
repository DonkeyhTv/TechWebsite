<template>
  <div></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const baseUrl = 'https://oozami.com'

const organizationSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OOZAMI',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  description: 'Agence digitale spécialisée en développement web, design et marketing digital',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tournai',
    addressRegion: 'Wallonie',
    addressCountry: 'BE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    availableLanguage: ['fr', 'en'],
  },
  sameAs: ['https://www.linkedin.com/company/oozami', 'https://twitter.com/oozami'],
}))

const websiteSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OOZAMI',
  url: baseUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}))

const breadcrumbSchema = computed(() => {
  if (route.path === '/') return null

  const paths = route.path.split('/').filter(Boolean)
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: baseUrl,
    },
  ]

  paths.forEach((path, index) => {
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: path.charAt(0).toUpperCase() + path.slice(1),
      item: `${baseUrl}/${paths.slice(0, index + 1).join('/')}`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationSchema.value),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(websiteSchema.value),
    },
    ...(breadcrumbSchema.value
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(breadcrumbSchema.value),
          },
        ]
      : []),
  ],
})
</script>
