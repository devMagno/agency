import { styled } from '@/styles'

export const Title = styled('h2', {
  marginBottom: '20px',

  fontSize: '$3xl',
  lineHeight: '1.1',
  fontWeight: 'bold',
  color: '$secondary',

  '@md': {
    fontSize: '$4xl',
  },

  variants: {
    bg: {
      white: {
        color: '$secondary',
      },
      light: {
        color: '$secondary',
      },
      dark: {
        color: '$white',
      },
    },
  },
})
