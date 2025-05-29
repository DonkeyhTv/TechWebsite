<template>
  <div class="terms-page">
    <PageHeader
      :title="$t('terms.pageTitle')"
      :description="$t('terms.pageDescription')"
      :badge="$t('terms.badge')"
      :breadcrumbs="breadcrumbs"
    />

    <section
      class="terms-content py-16 md:py-20 bg-white dark:bg-oozami-darkblue transition-colors duration-300"
    >
      <div class="container mx-auto px-4 max-w-4xl">
        <div ref="contentRef" class="fade-in-up opacity-0">
          <div class="prose prose-lg max-w-none dark:prose-invert mb-5">
            <p class="text-sm lg:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {{ $t('terms.introduction') }}
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
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <div>
                  <h3
                    class="text-lg font-semibold text-oozami-lightblue dark:text-oozami-lightblue mb-2"
                  >
                    {{ $t('terms.importantNotice') }}
                  </h3>
                  <p class="text-oozami-black dark:text-blue-200 text-sm">
                    {{ $t('terms.lastUpdated') }} : <strong>{{ lastUpdatedDate }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-oozami-lightblue/10 dark:bg-oozami-lightblue/10 rounded-xl p-3 lg:p-6 mb-12"
          >
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {{ $t('terms.tableOfContents') }}
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
                {{ $t(`terms.sections.${section.id}.title`) }}
              </a>
            </nav>
          </div>

          <div class="space-y-12">
            <section
              v-for="section in termsSection"
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
                    {{ section.number }}. {{ $t(`terms.sections.${section.id}.title`) }}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-400">
                    {{ $t(`terms.sections.${section.id}.subtitle`) }}
                  </p>
                </div>
              </div>

              <div class="prose prose-lg max-w-none dark:text-gray-400">
                <div v-html="$t(`terms.sections.${section.id}.content`)"></div>
              </div>

              <div v-if="section.subsections" class="mt-8 space-y-6">
                <div
                  v-for="subsection in section.subsections"
                  :key="subsection.id"
                  class="bg-gray-50 dark:bg-oozami-lightblue/10 border border-oozami-lightblue/20 rounded-lg p-6"
                >
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {{ section.number }}.{{ subsection.number }}
                    {{ $t(`terms.sections.${section.id}.subsections.${subsection.id}.title`) }}
                  </h3>
                  <div class="text-oozami-black dark:text-gray-300">
                    <div
                      v-html="
                        $t(`terms.sections.${section.id}.subsections.${subsection.id}.content`)
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {{ $t('terms.contact.title') }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                {{ $t('terms.contact.description') }}
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
                  {{ $t('terms.contact.button') }}
                </router-link>
                <a
                  href="mailto:legal@oozami.com"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-oozami-lightblue hover:text-white dark:text-oozami-lightblue font-semibold rounded-lg border border-oozami-lightblue dark:border-oozami-lightblue hover:bg-oozami-lightblue dark:hover:bg-oozami-lightblue transition-colors duration-200"
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                  legal@email.com
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
    label: t('breadcrumb.terms'),
    path: '/conditions-utilisation',
    active: true,
  },
])

const tableOfContents = [
  { id: 'acceptance', number: '1' },
  { id: 'services', number: '2' },
  { id: 'accounts', number: '3' },
  { id: 'payment', number: '4' },
  { id: 'intellectual-property', number: '5' },
  { id: 'privacy', number: '6' },
  { id: 'prohibited-uses', number: '7' },
  { id: 'termination', number: '8' },
  { id: 'liability', number: '9' },
  { id: 'changes', number: '10' },
  { id: 'governing-law', number: '11' },
  { id: 'contact', number: '12' },
]

const termsSection = [
  {
    id: 'acceptance',
    number: '1',
    icon: 'fas fa-handshake',
  },
  {
    id: 'services',
    number: '2',
    icon: 'fas fa-cogs',
  },
  {
    id: 'accounts',
    number: '3',
    icon: 'fas fa-user-circle',
  },
  {
    id: 'payment',
    number: '4',
    icon: 'fas fa-credit-card',
    subsections: [
      { id: 'pricing', number: '1' },
      { id: 'billing', number: '2' },
      { id: 'refunds', number: '3' },
    ],
  },
  {
    id: 'intellectual-property',
    number: '5',
    icon: 'fas fa-copyright',
  },
  {
    id: 'privacy',
    number: '6',
    icon: 'fas fa-shield-alt',
  },
  {
    id: 'prohibited-uses',
    number: '7',
    icon: 'fas fa-ban',
  },
  {
    id: 'termination',
    number: '8',
    icon: 'fas fa-times-circle',
  },
  {
    id: 'liability',
    number: '9',
    icon: 'fas fa-balance-scale',
  },
  {
    id: 'changes',
    number: '10',
    icon: 'fas fa-edit',
  },
  {
    id: 'governing-law',
    number: '11',
    icon: 'fas fa-gavel',
  },
  {
    id: 'contact',
    number: '12',
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
