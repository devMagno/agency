import { styled } from 'stitches.config'

export const Wrapper = styled('main', {
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: '$secondary',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const Title = styled('h1', {
  color: '$white',
  fontSize: '$2xl',
  fontWeight: 700,
  lineHeight: '1.6',
  textAlign: 'center',

  marginBottom: '25px',
})

export const Text = styled('p', {
  color: '$white',
  fontSize: '$md',
  lineHeight: '1.6',
  textAlign: 'center',

  opacity: 0.8,
  marginBottom: '25px',
})
