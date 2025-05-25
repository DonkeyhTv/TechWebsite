import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const env = process.argv[2] || 'local'

const configs = {
  local: {
    basePath: '/',
    env: 'local',
  },
  staging: {
    basePath: '/techWebsite/',
    env: 'staging',
  },
  production: {
    basePath: '/',
    env: 'production',
  },
}

const config = configs[env] || configs.local

fs.writeFileSync(path.join(__dirname, '..', 'build-config.json'), JSON.stringify(config, null, 2))

const envConfigPath = path.join(__dirname, '..', 'src', 'config', 'environments.ts')
const envConfigContent = fs.readFileSync(envConfigPath, 'utf-8')
const updatedContent = envConfigContent.replace(
  /const CURRENT_ENV: Environment = '[^']+'/,
  `const CURRENT_ENV: Environment = '${env}'`,
)
fs.writeFileSync(envConfigPath, updatedContent)

console.log(`✅ Configuration définie pour l'environnement: ${env}`)
console.log(`   Base path: ${config.basePath}`)
