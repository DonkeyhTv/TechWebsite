// composables/useSEO.ts
import { computed } from 'vue'
import { useHead } from '@vueuse/head'

interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[] | string
  image?: string
  url?: string
  type?: string
  siteName?: string
}

export function useSEO(config: SEOConfig = {}) {
  const siteTitle = 'OOZAMI - Solutions Digitales'
  const siteDescription =
    'Agence digitale spécialisée dans le développement web, design et marketing digital à Tournai, Belgique.'
  const siteUrl = 'https://oozami.com'

  const title = computed(() => config.title || siteTitle)

  const description = computed(() => config.description || siteDescription)

  const keywords = computed(() => {
    if (!config.keywords) return undefined

    // Si c'est déjà un tableau, on le retourne
    if (Array.isArray(config.keywords)) {
      return config.keywords.join(', ')
    }

    // Si c'est une chaîne, on la retourne directement
    if (typeof config.keywords === 'string') {
      return config.keywords
    }

    return undefined
  })

  const image = computed(() => config.image || `${siteUrl}/assets/images/og-image.jpg`)

  const url = computed(() => config.url || siteUrl)

  useHead({
    title: title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
      // Open Graph
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        property: 'og:url',
        content: url,
      },
      {
        property: 'og:type',
        content: config.type || 'website',
      },
      {
        property: 'og:site_name',
        content: config.siteName || 'OOZAMI',
      },
      // Twitter Card
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: image,
      },
    ],
  })

  return {
    title,
    description,
    keywords,
    image,
    url,
  }
}
