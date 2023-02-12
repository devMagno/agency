import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      black: '#000',
      white: '#FFF',

      primary: '#ff8900',
      secondary: '#212121',
      lightGray: '#f3f3f3',
    },
    fontSizes: {
      xs: '12px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '50px',
      '5xl': '60px',
      '6xl': '70px',
    },
    space: {
      containerPadding: '16px',
    },
    sizes: {
      containerWidth: '90%',
      containerMaxWidth: '1330px',
    },
    radii: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
})
