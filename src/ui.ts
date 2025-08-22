import { createPrimitives } from 'nativ/ui'
import type { Theme } from './theme'

export const {
  View,
  Text,
  MotiView,
  MotiImage,
  MotiScrollView,
  MotiText,
  Pressable,
  ScrollView,
  Image,
} = createPrimitives<Theme>()
