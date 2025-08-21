import { createPrimitives } from 'nativ/ui'
import type { Theme } from './theme'

export const {
  View,
  Text,
  MotiView,
  Pressable,
  LinearGradient,
  ScrollView,
  Image,
} = createPrimitives<Theme>()
