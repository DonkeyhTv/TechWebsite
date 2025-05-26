<template>
  <section
    class="contact-section py-16 md:py-20 lg:py-24 bg-white dark:bg-oozami-darkblue transition-all duration-300"
  >
    <div class="container mx-auto px-4 max-w-7xl">
      <div ref="headerRef" class="fade-in-down opacity-0 text-center mb-12 md:mb-16">
        <div class="flex items-center justify-center gap-2 mb-4">
          <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
          <span
            class="uppercase text-oozami-lightblue text-sm md:text-base font-medium tracking-wider"
          >
            {{ $t('contact.badge') }}
          </span>
          <div class="w-1.5 h-1.5 bg-oozami-lightblue rounded-full"></div>
        </div>

        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-oozami-black dark:text-white mb-4 transition-all duration-300"
        >
          {{ $t('contact.title') }}
        </h2>

        <p
          class="text-oozami-black/70 dark:text-white text-base md:text-lg transition-all duration-300"
        >
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div ref="formRef" class="fade-in-up opacity-0">
        <form @submit.prevent="handleSubmit" class="">
          <div class="grid md:grid-cols-2 gap-6">
            <div ref="firstNameRef" class="form-field opacity-0">
              <label
                for="firstName"
                :class="[
                  'block text-sm font-medium mb-2 transition-colors duration-300',
                  activeField === 'firstName'
                    ? 'text-oozami-lightblue'
                    : 'text-gray-700 dark:text-gray-300',
                ]"
              >
                {{ $t('contact.form.firstName') }} *
              </label>
              <input
                type="text"
                id="firstName"
                v-model="formData.firstName"
                @focus="activeField = 'firstName'"
                @blur="activeField = ''"
                required
                :class="[
                  'w-full px-4 py-3 border rounded-lg transition-all duration-300',
                  activeField === 'firstName'
                    ? 'border-oozami-lightblue ring-2 ring-oozami-lightblue/20'
                    : 'border-gray-300 dark:border-gray-600',
                  'bg-transparent text-gray-900 dark:text-white',
                  'focus:outline-none',
                ]"
                :placeholder="$t('contact.form.firstNamePlaceholder')"
              />
            </div>

            <div ref="lastNameRef" class="form-field opacity-0">
              <label
                for="lastName"
                :class="[
                  'block text-sm font-medium mb-2 transition-colors duration-300',
                  activeField === 'lastName'
                    ? 'text-oozami-lightblue'
                    : 'text-gray-700 dark:text-gray-300',
                ]"
              >
                {{ $t('contact.form.lastName') }} *
              </label>
              <input
                type="text"
                id="lastName"
                v-model="formData.lastName"
                @focus="activeField = 'lastName'"
                @blur="activeField = ''"
                required
                :class="[
                  'w-full px-4 py-3 border rounded-lg transition-all duration-300',
                  activeField === 'lastName'
                    ? 'border-oozami-lightblue ring-2 ring-oozami-lightblue/20'
                    : 'border-gray-300 dark:border-gray-600',
                  'bg-transparent text-gray-900 dark:text-white',
                  'focus:outline-none',
                ]"
                :placeholder="$t('contact.form.lastNamePlaceholder')"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div ref="emailRef" class="form-field opacity-0">
              <label
                for="email"
                :class="[
                  'block text-sm font-medium mb-2 transition-colors duration-300',
                  activeField === 'email'
                    ? 'text-oozami-lightblue'
                    : 'text-gray-700 dark:text-gray-300',
                ]"
              >
                {{ $t('contact.form.email') }} *
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                @focus="activeField = 'email'"
                @blur="activeField = ''"
                required
                :class="[
                  'w-full px-4 py-3 border rounded-lg transition-all duration-300',
                  activeField === 'email'
                    ? 'border-oozami-lightblue ring-2 ring-oozami-lightblue/20'
                    : 'border-gray-300 dark:border-gray-600',
                  'bg-transparent text-gray-900 dark:text-white',
                  'focus:outline-none',
                ]"
                :placeholder="$t('contact.form.emailPlaceholder')"
              />
            </div>

            <div ref="phoneRef" class="form-field opacity-0">
              <label
                for="phone"
                :class="[
                  'block text-sm font-medium mb-2 transition-colors duration-300',
                  activeField === 'phone'
                    ? 'text-oozami-lightblue'
                    : 'text-gray-700 dark:text-gray-300',
                ]"
              >
                {{ $t('contact.form.phone') }}
              </label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                @focus="activeField = 'phone'"
                @blur="activeField = ''"
                :class="[
                  'w-full px-4 py-3 border rounded-lg transition-all duration-300',
                  activeField === 'phone'
                    ? 'border-oozami-lightblue ring-2 ring-oozami-lightblue/20'
                    : 'border-gray-300 dark:border-gray-600',
                  'bg-transparent text-gray-900 dark:text-white',
                  'focus:outline-none',
                ]"
                :placeholder="$t('contact.form.phonePlaceholder')"
              />
            </div>
          </div>

          <div ref="messageRef" class="form-field opacity-0 mt-6">
            <label
              for="message"
              :class="[
                'block text-sm font-medium mb-2 transition-colors duration-300',
                activeField === 'message'
                  ? 'text-oozami-lightblue'
                  : 'text-gray-700 dark:text-gray-300',
              ]"
            >
              {{ $t('contact.form.message') }} *
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              @focus="activeField = 'message'"
              @blur="activeField = ''"
              required
              rows="5"
              :class="[
                'w-full px-4 py-3 border rounded-lg transition-all duration-300 resize-none',
                activeField === 'message'
                  ? 'border-oozami-lightblue ring-2 ring-oozami-lightblue/20'
                  : 'border-gray-300 dark:border-gray-600',
                'bg-transparent text-gray-900 dark:text-white',
                'focus:outline-none',
              ]"
              :placeholder="$t('contact.form.messagePlaceholder')"
            />
          </div>

          <div ref="submitRef" class="form-field opacity-0 mt-8 text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="group inline-flex justify-center items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-oozami-lightblue hover:bg-transparent border-2 border-oozami-lightblue text-white hover:text-oozami-lightblue font-semibold transition-all duration-300 transform hover:scale-105 rounded-tl-md rounded-tr-2xl rounded-br-md rounded-bl-2xl text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
              <span v-else class="flex items-center justify-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {{ $t('contact.form.sending') }}
              </span>
            </button>
          </div>

          <Transition name="fade">
            <div
              v-if="showSuccess"
              class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
            >
              {{ $t('contact.form.success') }}
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const headerRef = ref<HTMLElement>()
const formRef = ref<HTMLElement>()
const firstNameRef = ref<HTMLElement>()
const lastNameRef = ref<HTMLElement>()
const emailRef = ref<HTMLElement>()
const phoneRef = ref<HTMLElement>()
const messageRef = ref<HTMLElement>()
const submitRef = ref<HTMLElement>()

const isSubmitting = ref(false)
const showSuccess = ref(false)
const activeField = ref('')

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
})

const handleSubmit = async () => {
  isSubmitting.value = true

  await new Promise((resolve) => setTimeout(resolve, 2000))

  isSubmitting.value = false
  showSuccess.value = true

  formData.firstName = ''
  formData.lastName = ''
  formData.email = ''
  formData.phone = ''
  formData.message = ''

  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement

          if (element === headerRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 100)
          } else if (element === formRef.value) {
            setTimeout(() => element.classList.add('animate-in'), 300)
          }

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  )

  const formObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const delay = 400 + index * 100

          setTimeout(() => {
            element.classList.add('animate-field')
          }, delay)

          formObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px',
    },
  )

  if (headerRef.value) observer.observe(headerRef.value)
  if (formRef.value) observer.observe(formRef.value)

  const formFields = [
    firstNameRef.value,
    lastNameRef.value,
    emailRef.value,
    phoneRef.value,
    messageRef.value,
    submitRef.value,
  ]

  formFields.forEach((field) => {
    if (field) formObserver.observe(field)
  })
})
</script>

<style scoped>
.fade-in-down {
  transform: translateY(-30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-up {
  transform: translateY(30px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
}

.fade-in-down.animate-in,
.fade-in-up.animate-in {
  opacity: 1 !important;
  transform: translateY(0);
}

.form-field {
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.form-field.animate-field {
  opacity: 1 !important;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Override des styles par défaut du navigateur */
input:focus,
textarea:focus {
  outline: none !important;
  box-shadow: none !important;
  -webkit-appearance: none;
}

/* Ensure les bordures sont visibles */
input,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Placeholders plus visibles */
input::placeholder,
textarea::placeholder {
  color: #9ca3af;
  opacity: 1;
}

.dark input::placeholder,
.dark textarea::placeholder {
  color: #6b7280;
}
</style>
