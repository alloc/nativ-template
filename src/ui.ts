import { createPrimitives } from 'nativ/ui'
import type { AppTheme } from './theme'

export const {
  View,
  Text,
  MotiView,
  Pressable,
  LinearGradient,
  ScrollView,
  Image,
} = createPrimitives<AppTheme>()
