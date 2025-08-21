import { ExpoConfig } from 'expo/config'

const expo: ExpoConfig = {
  name: 'My Nativ App',
  slug: 'my-nativ-app',
  version: '1.0.0',
  orientation: 'portrait',
  scheme: 'my-nativ-app',
  userInterfaceStyle: 'light',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.example.mynativapp',
    icon: {
      dark: './assets/images/icon-dark.png',
      light: './assets/images/icon.png',
      tinted: './assets/images/icon-tinted.png',
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    bundler: 'metro',
    output: 'static',
    favicon: './assets/images/favicon.png',
  },
  plugins: [
    'expo-router',
    'expo-font',
    'expo-sqlite',
    [
      'expo-build-properties',
      {
        ios: {
          newArchEnabled: true,
        },
        android: {
          newArchEnabled: true,
        },
      },
    ],
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash.png',
        imageWidth: 200,
        backgroundColor: '#232323',
        dark: {
          image: './assets/images/splash-dark.png',
          backgroundColor: '#000000',
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
}

export default expo
