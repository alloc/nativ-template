declare module '*.png' {
  const id: number
  export default id
}

declare module '*.jpg' {
  const id: number
  export default id
}

declare module '*.jpeg' {
  const id: number
  export default id
}

declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module '*.ttf' {
  const id: number
  export default id
}

declare module '*.otf' {
  const id: number
  export default id
}
