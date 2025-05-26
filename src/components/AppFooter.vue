<template>
  <footer ref="footerRef" class="bg-oozami-darkblue pt-16 pb-8 relative overflow-hidden opacity-0">
    <div class="absolute inset-0 z-0">
      <img
        :src="footerBackground"
        alt="Footer background"
        class="w-full h-full object-cover opacity-20"
      />
    </div>

    <div class="absolute inset-0 opacity-10 z-10">
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-oozami-lightblue rounded-full filter blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-oozami-lightblue rounded-full filter blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 max-w-7xl relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div ref="companyRef" class="md:col-span-4 footer-column opacity-0">
          <FooterCompany />
        </div>

        <div ref="linksRef" class="md:col-span-2 footer-column opacity-0">
          <FooterLinks />
        </div>

        <div ref="resourcesRef" class="md:col-span-2 footer-column opacity-0">
          <FooterResources />
        </div>

        <div ref="contactRef" class="md:col-span-4 footer-column opacity-0">
          <FooterContact />
        </div>
      </div>

      <div ref="bottomRef" class="footer-bottom opacity-0">
        <FooterBottom />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FooterCompany from './footer/FooterCompany.vue'
import FooterLinks from './footer/FooterLinks.vue'
import FooterResources from './footer/FooterResources.vue'
import FooterContact from './footer/FooterContact.vue'
import FooterBottom from './footer/FooterBottom.vue'
import footerBackground from '@/assets/images/footer-bg.jpg'

const footerRef = ref<HTMLElement>()
const companyRef = ref<HTMLElement>()
const linksRef = ref<HTMLElement>()
const resourcesRef = ref<HTMLElement>()
const contactRef = ref<HTMLElement>()
const bottomRef = ref<HTMLElement>()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          if (element === footerRef.value) {
            element.classList.add('animate-footer')

            setTimeout(() => {
              companyRef.value?.classList.add('animate-column')
            }, 200)

            setTimeout(() => {
              linksRef.value?.classList.add('animate-column')
            }, 300)

            setTimeout(() => {
              resourcesRef.value?.classList.add('animate-column')
            }, 400)

            setTimeout(() => {
              contactRef.value?.classList.add('animate-column')
            }, 500)

            setTimeout(() => {
              bottomRef.value?.classList.add('animate-bottom')
            }, 700)
          }

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    },
  )

  if (footerRef.value) {
    observer.observe(footerRef.value)
  }
})
</script>

<style scoped>
footer {
  transition: opacity 0.8s ease-out;
}

footer.animate-footer {
  opacity: 1 !important;
}

.footer-column {
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.footer-column.animate-column {
  opacity: 1 !important;
  transform: translateY(0);
}

.footer-bottom {
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.footer-bottom.animate-bottom {
  opacity: 1 !important;
  transform: translateY(0);
}

:deep(.footer-column a) {
  position: relative;
  overflow: hidden;
}

:deep(.footer-column a::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: var(--oozami-lightblue);
  transition: left 0.3s ease;
}

:deep(.footer-column a:hover::after) {
  left: 0;
}
</style>
