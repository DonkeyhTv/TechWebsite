export type Environment = 'local' | 'staging' | 'production'

interface EnvironmentConfig {
  name: Environment
  baseUrl: string
  basePath: string
  apiUrl: string
  googleAnalyticsId?: string
  siteName: string
  enableDebug: boolean
}

const environments: Record<Environment, EnvironmentConfig> = {
  local: {
    name: 'local',
    baseUrl: 'http://localhost:5173',
    basePath: '/',
    apiUrl: 'http://localhost:3000/api',
    siteName: 'OOZAMI (Dev)',
    enableDebug: true,
  },
  staging: {
    name: 'staging',
    baseUrl: 'https://steve-amissi.be',
    basePath: '/techWebsite/',
    apiUrl: 'https://steve-amissi.be/techWebsite/api',
    siteName: 'OOZAMI (Staging)',
    enableDebug: true,
  },
  production: {
    name: 'production',
    baseUrl: 'https://oozami.be',
    basePath: '/',
    apiUrl: 'https://oozami.be/api',
    googleAnalyticsId: 'GA_MEASUREMENT_ID',
    siteName: 'OOZAMI',
    enableDebug: false,
  },
}

// Changez cette ligne pour changer d'environnement
const CURRENT_ENV: Environment = 'staging' // 'local' | 'staging' | 'production'

export const config = environments[CURRENT_ENV]

export const getFullUrl = (path: string = ''): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${config.baseUrl}${config.basePath}${cleanPath}`
}

export const getAssetUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${config.basePath}${cleanPath}`
}

export default config
