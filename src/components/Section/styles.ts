import { styled } from 'stitches.config'

export const Wrapper = styled('section', {
  width: '100%',
  padding: '60px $containerPadding',

  '> div > p': {
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

export const Content = styled('div', {
  margin: '0 auto',
  width: '$containerWidth',
  maxWidth: '$containerMaxWidth',
})

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
