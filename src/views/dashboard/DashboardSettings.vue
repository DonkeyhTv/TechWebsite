<template>
  <div>
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paramètres</h2>
      <p class="text-gray-600 dark:text-gray-400">Configuration du dashboard et intégrations</p>
    </div>

    <div class="space-y-6">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connexion Sitecore</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >URL de l'instance</label
            >
            <input
              type="text"
              placeholder="https://your-sitecore-instance.com"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Clé API</label
            >
            <input
              type="password"
              placeholder="••••••••••••••••"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <button
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Tester la connexion
          </button>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
        <div class="space-y-3">
          <label class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Alertes email</span>
            <input type="checkbox" class="toggle" checked />
          </label>
          <label class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Rapports automatiques</span>
            <input type="checkbox" class="toggle" />
          </label>
          <label class="flex items-center justify-between">
            <span class="text-gray-700 dark:text-gray-300">Notifications temps réel</span>
            <input type="checkbox" class="toggle" checked />
          </label>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Préférences d'affichage
        </h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Fuseau horaire</label
            >
            <select
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option>Europe/Paris (UTC+1)</option>
              <option>Europe/Brussels (UTC+1)</option>
              <option>UTC</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Format de date</label
            >
            <select
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          class="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
        >
          Enregistrer les paramètres
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.toggle {
  appearance: none;
  width: 48px;
  height: 24px;
  background-color: #e5e7eb;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toggle:checked {
  background-color: #3b82f6;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
}

.toggle:checked::after {
  transform: translateX(24px);
}

.dark .toggle {
  background-color: #4b5563;
}
</style>
