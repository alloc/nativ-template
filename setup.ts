import { execSync } from 'child_process'
import { rmSync, unlinkSync } from 'fs'
import { fileURLToPath } from 'node:url'
import { basename } from 'path'

console.log('🚀 Setting up your nativ app...\n')

try {
  // Recreate the git repository
  if (basename(import.meta.url) !== 'nativ-template') {
    rmSync('.git', { recursive: true, force: true })
    execSync('git init', { stdio: 'inherit' })
  }

  // Install dependencies
  console.log('\n📦 Installing dependencies...')
  execSync('pnpm up -L', { stdio: 'inherit' })

  // Install nativ peer dependencies
  console.log('\n🔧 Installing nativ peer dependencies...')
  execSync('pnpm nativ install', { stdio: 'inherit' })

  console.log('\n✅ Setup complete!')
  console.log('\n🎉 Your nativ app is ready to go!')
  console.log('\nNext steps:')
  console.log('  • Run `pnpm start` to start the development server')
  console.log('  • Edit `src/app/index.tsx` to customize your app')
  console.log('  • Add your app assets to the `assets/` folder')

  unlinkSync(fileURLToPath(import.meta.url))
} catch (error) {
  console.error('❌ Setup failed:', error)
  process.exit(1)
}
