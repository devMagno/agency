import { styled } from '@/styles'

export const Wrapper = styled('section', {
  width: '100%',
  padding: '60px $containerPadding',

  p: {
    fontSize: '$md',
    lineHeight: '1.5',
    color: '$secondary',

    opacity: '.8',

    '+ p': {
      marginTop: '20px',
    },
  },

  '@md': {
    padding: '100px $containerPadding',
  },

  variants: {
    bg: {
      white: {
        backgroundColor: '$white',
      },
      light: {
        backgroundColor: '$lightGray',
      },
      dark: {
        backgroundColor: '$secondary',

        '> div > p': {
          color: '$white',
        },
      },
    },
  },
})
