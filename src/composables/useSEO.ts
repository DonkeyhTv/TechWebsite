import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noindex?: boolean
  canonical?: string
}

export const useSEO = (config: SEOConfig = {}) => {
  const route = useRoute()
  const { locale } = useI18n()

  const baseUrl = 'https://oozami.com'
  const defaultOgImage = `${baseUrl}/images/og-image.jpg`

  const seoData = computed(() => {
    const currentUrl = `${baseUrl}${route.path}`
    const siteName = 'OOZAMI'

    const titleTemplate = config.title ? `${siteName} | ${config.title}` : siteName

    const defaultDescription =
      locale.value === 'fr'
        ? 'OOZAMI - Solutions digitales sur mesure : Design, Développement Web, Marketing Digital. Créons ensemble des expériences numériques innovantes pour faire rayonner votre activité.'
        : "OOZAMI - Custom digital solutions: Design, Web Development, Digital Marketing. Let's create innovative digital experiences together to make your business shine."

    return {
      title: titleTemplate,
      description: config.description || defaultDescription,
      keywords:
        config.keywords?.join(', ') ||
        'design, développement web, marketing digital, sitecore, vue.js, solutions digitales, agence web, belgique',
      ogImage: config.ogImage || defaultOgImage,
      ogType: config.ogType || 'website',
      twitterCard: config.twitterCard || 'summary_large_image',
      canonical: config.canonical || currentUrl,
      robots: config.noindex ? 'noindex, nofollow' : 'index, follow',
    }
  })

  useHead({
    title: seoData.value.title,
    meta: [
      {
        name: 'description',
        content: seoData.value.description,
      },
      {
        name: 'keywords',
        content: seoData.value.keywords,
      },
      {
        name: 'robots',
        content: seoData.value.robots,
      },
      {
        property: 'og:title',
        content: seoData.value.title,
      },
      {
        property: 'og:description',
        content: seoData.value.description,
      },
      {
        property: 'og:image',
        content: seoData.value.ogImage,
      },
      {
        property: 'og:type',
        content: seoData.value.ogType,
      },
      {
        property: 'og:url',
        content: seoData.value.canonical,
      },
      {
        property: 'og:site_name',
        content: 'OOZAMI',
      },
      {
        property: 'og:locale',
        content: locale.value === 'fr' ? 'fr_BE' : 'en_US',
      },
      {
        name: 'twitter:card',
        content: seoData.value.twitterCard,
      },
      {
        name: 'twitter:title',
        content: seoData.value.title,
      },
      {
        name: 'twitter:description',
        content: seoData.value.description,
      },
      {
        name: 'twitter:image',
        content: seoData.value.ogImage,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: seoData.value.canonical,
      },
    ],
  })

  return {
    updateSEO: (newConfig: SEOConfig) => {
      Object.assign(config, newConfig)
    },
  }
}
