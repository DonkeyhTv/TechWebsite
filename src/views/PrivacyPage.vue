<template>
  <div class="privacy-page">
    <PageHeader
      :title="$t('privacy.pageTitle')"
      :description="$t('privacy.pageDescription')"
      :badge="$t('privacy.badge')"
      :breadcrumbs="breadcrumbs"
    />

    <section
      class="privacy-content py-16 md:py-20 bg-white dark:bg-oozami-darkblue transition-colors duration-300"
    >
      <div class="container mx-auto px-4 max-w-7xl">
        <div ref="contentRef" class="fade-in-up opacity-0">
          <div class="prose prose-lg max-w-none dark:prose-invert mb-5">
            <p class="text-sm lg:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {{ $t('privacy.introduction') }}
            </p>

            <div class="border border-oozami-lightblue dark:border-oozami-lightblue rounded-lg p-3">
              <div class="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 text-oozami-lightblue dark:text-blue-400 flex-shrink-0 mt-0.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <div>
                  <h3
                    class="text-lg font-semibold text-oozami-lightblue dark:text-oozami-lightblue mb-2"
                  >
                    {{ $t('privacy.commitment') }}
                  </h3>
                  <p class="text-oozami-black dark:text-blue-200 text-sm">
                    {{ $t('privacy.lastUpdated') }} : <strong>{{ lastUpdatedDate }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-oozami-lightblue/10 dark:bg-oozami-lightblue/10 rounded-xl p-3 lg:p-6 mb-12"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {{ $t('privacy.tableOfContents') }}
            </h2>
            <nav class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a
                v-for="section in tableOfContents"
                :key="section.id"
                :href="`#${section.id}`"
                class="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-oozami-lightblue hover:bg-white dark:hover:bg-oozami-lightblue/10 rounded-lg transition-all duration-200 group"
              >
                <span
                  class="w-6 h-6 bg-oozami-lightblue/20 text-oozami-lightblue rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-oozami-lightblue group-hover:text-white transition-all duration-200"
                >
                  {{ section.number }}
                </span>
                {{ $t(`privacy.sections.${section.id}.title`) }}
              </a>
            </nav>
          </div>

          <div class="space-y-12">
            <section
              v-for="section in privacySections"
              :key="section.id"
              :id="section.id"
              class="scroll-mt-24"
            >
              <div class="flex items-start gap-4 mb-6">
                <div
                  class="w-12 h-12 bg-oozami-lightblue rounded flex items-center justify-center flex-shrink-0"
                >
                  <i :class="section.icon" class="text-white text-xl"></i>
                </div>
                <div>
                  <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {{ section.number }}. {{ $t(`privacy.sections.${section.id}.title`) }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t(`privacy.sections.${section.id}.subtitle`) }}
                  </p>
                </div>
              </div>

              <div class="prose prose-lg max-w-none dark:text-gray-400">
                <div v-html="$t(`privacy.sections.${section.id}.content`)"></div>
              </div>

              <div v-if="section.subsections" class="mt-8 space-y-6">
                <div
                  v-for="subsection in section.subsections"
                  :key="subsection.id"
                  class="bg-gray-50 dark:bg-oozami-lightblue/10 border border-oozami-lightblue/20 rounded-lg p-6"
                >
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {{ section.number }}.{{ subsection.number }}
                    {{ $t(`privacy.sections.${section.id}.subsections.${subsection.id}.title`) }}
                  </h3>
                  <div class="text-oozami-black dark:text-gray-300">
                    <div
                      v-html="
                        $t(`privacy.sections.${section.id}.subsections.${subsection.id}.content`)
                      "
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div
            class="mt-16 bg-oozami-lightblue/10 rounded-2xl p-8 border border-oozami-lightblue/20"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 bg-oozami-lightblue rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-8 h-8 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {{ $t('privacy.contact.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                {{ $t('privacy.contact.description') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <router-link
                  to="/contact"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-oozami-lightblue text-white font-semibold rounded-lg hover:bg-oozami-lightblue/90 transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  {{ $t('privacy.contact.button') }}
                </router-link>
                <a
                  href="mailto:privacy@email.com"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-oozami-lightblue hover:text-white dark:text-oozami-lightblue dark:hover:text-white font-semibold rounded-lg border border-oozami-lightblue dark:border-oozami-lightblue hover:bg-oozami-lightblue dark:hover:bg-oozami-lightblue transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  privacy@email.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHeader from '@/components/PageHeader.vue'

const { t } = useI18n()

const contentRef = ref<HTMLElement>()

const lastUpdatedDate = '15 Janvier 2025'

const breadcrumbs = computed(() => [
  {
    label: t('breadcrumb.home'),
    path: '/',
  },
  {
    label: t('breadcrumb.privacy'),
    path: '/privacy',
    active: true,
  },
])

const tableOfContents = [
  { id: 'collection', number: '1' },
  { id: 'usage', number: '2' },
  { id: 'sharing', number: '3' },
  { id: 'cookies', number: '4' },
  { id: 'security', number: '5' },
  { id: 'retention', number: '6' },
  { id: 'rights', number: '7' },
  { id: 'children', number: '8' },
  { id: 'changes', number: '9' },
  { id: 'contact', number: '10' },
]

const privacySections = [
  {
    id: 'collection',
    number: '1',
    icon: 'fas fa-database',
  },
  {
    id: 'usage',
    number: '2',
    icon: 'fas fa-cogs',
  },
  {
    id: 'sharing',
    number: '3',
    icon: 'fas fa-share-alt',
  },
  {
    id: 'cookies',
    number: '4',
    icon: 'fas fa-cookie-bite',
    subsections: [
      { id: 'essential', number: '1' },
      { id: 'analytics', number: '2' },
      { id: 'marketing', number: '3' },
    ],
  },
  {
    id: 'security',
    number: '5',
    icon: 'fas fa-shield-alt',
  },
  {
    id: 'retention',
    number: '6',
    icon: 'fas fa-clock',
  },
  {
    id: 'rights',
    number: '7',
    icon: 'fas fa-user-check',
  },
  {
    id: 'children',
    number: '8',
    icon: 'fas fa-child',
  },
  {
    id: 'changes',
    number: '9',
    icon: 'fas fa-edit',
  },
  {
    id: 'contact',
    number: '10',
    icon: 'fas fa-envelope',
  },
]

onMounted(() => {
  const isMobile = window.innerWidth <= 768

  if (isMobile && contentRef.value) {
    setTimeout(() => {
      contentRef.value?.classList.add('animate-in')
    }, 100)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          setTimeout(() => element.classList.add('animate-in'), 200)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: '50px',
    },
  )

  if (contentRef.value && !isMobile) {
    observer.observe(contentRef.value)
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })
})
</script>

<style scoped>
.fade-in-up {
  transform: translateY(40px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-up.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.prose li {
  margin: 0.5rem 0;
}

.scroll-mt-24 {
  scroll-margin-top: 6rem;
}
</style>
