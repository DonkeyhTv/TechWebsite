<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center p-2 transition-colors duration-200"
      :aria-label="`Langue actuelle: ${currentLanguageLabel}`"
    >
      <img
        :src="`https://flagcdn.com/24x18/${getFlagCode(currentLocale)}.png`"
        :alt="currentLanguageLabel"
        class="w-6 h-4 object-cover"
      />
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-oozami-lightblue dark:bg-oozami-lightblue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <button
            v-for="language in languages"
            :key="language.code"
            @click="changeLanguage(language.code)"
            class="flex items-center gap-3 w-full px-4 hover:pl-5 py-2 transition-all duration-150"
            :aria-label="`Changer pour ${language.label}`"
          >
            <img
              :src="`https://flagcdn.com/24x18/${language.flagCode}.png`"
              :alt="language.label"
              class="w-6 h-4 object-cover"
            />
            <span class="text-sm text-white font-bold dark:text-white">{{ language.label }}</span>
            <svg
              v-if="currentLocale === language.code"
              class="w-4 h-4 ml-auto text-oozami-black dark:text-oozami-black"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderLanguagesSelector',
  data() {
    return {
      isOpen: false,
      languages: [
        {
          code: 'en',
          label: 'English',
          flagCode: 'gb',
        },
        {
          code: 'fr',
          label: 'Français',
          flagCode: 'fr',
        },
      ],
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
    currentLanguageLabel() {
      const currentLang = this.languages.find((lang) => lang.code === this.currentLocale)
      return currentLang ? currentLang.label : 'Language'
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    changeLanguage(languageCode) {
      this.$i18n.locale = languageCode
      localStorage.setItem('userLanguage', languageCode)
      this.isOpen = false
      this.$emit('language-changed', languageCode)
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    },
    getFlagCode(locale) {
      const lang = this.languages.find((l) => l.code === locale)
      return lang ? lang.flagCode : 'un'
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)

    const savedLanguage = localStorage.getItem('userLanguage')
    if (savedLanguage && this.languages.some((lang) => lang.code === savedLanguage)) {
      this.$i18n.locale = savedLanguage
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
}
</script>

<style scoped></style>
