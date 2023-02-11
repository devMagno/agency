import { styled } from 'stitches.config'

export const Wrapper = styled('div', {
  width: '100%',
  minHeight: '100vh',
  position: 'relative',
  padding: '0 containerPadding',

  '&::before': {
    content: '',

    top: 0,
    left: 0,
    zIndex: 9,
    position: 'absolute',

    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
})

export const Content = styled('div', {
  height: '100%',
  margin: '0 auto',
  minHeight: '100vh',
  width: '$containerWidth',
  maxWidth: '$containerMaxWidth',

  zIndex: 9,
  position: 'relative',

  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const Title = styled('h1', {
  color: '$white',
  fontSize: '$3xl',

  display: 'block',
  marginBottom: '30px',

  '@md': {
    fontSize: '$5xl',
  },
})

export const TypewriterWrapper = styled('div', {
  color: '$white',
  fontSize: '$4xl',
  fontWeight: 'bold',

  display: 'flex',
  alignItems: 'center',

  maxWidth: '700px',
  position: 'relative',

  '@md': {
    fontSize: '$6xl',
  },
})
