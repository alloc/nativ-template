#!/usr/bin/env tsx

import { execSync } from 'child_process'
import { unlinkSync } from 'fs'

console.log('🚀 Setting up your nativ app...\n')

try {
  // Install dependencies
  console.log('📦 Installing dependencies...')
  execSync('pnpm install', { stdio: 'inherit' })

  // Install nativ peer dependencies
  console.log('\n🔧 Installing nativ peer dependencies...')
  execSync('pnpm nativ install', { stdio: 'inherit' })

  console.log('\n✅ Setup complete!')
  console.log('\n🎉 Your nativ app is ready to go!')
  console.log('\nNext steps:')
  console.log('  • Run `pnpm start` to start the development server')
  console.log('  • Edit `src/app/index.tsx` to customize your app')
  console.log('  • Add your app assets to the `assets/` folder')
} catch (error) {
  console.error('❌ Setup failed:', error)
  process.exit(1)
} finally {
  // Delete this setup script
  try {
    unlinkSync(__filename)
    console.log('\n🧹 Cleaned up setup script')
  } catch {
    // Ignore if file doesn't exist or can't be deleted
  }
}
