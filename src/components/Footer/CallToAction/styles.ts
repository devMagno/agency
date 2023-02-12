import { styled } from '@stitches/react'

export const Wrapper = styled('div', {
  width: '100%',
  padding: '60px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '@md': {
    flexDirection: 'row',
    padding: '100px 0 80px',
  },
})

export const Title = styled('h3', {
  color: '$white',
  fontSize: '$2xl',
  lineHeight: '1.1',
  fontWeight: 'bold',
  textAlign: 'center',

  padding: '20px 0',
})

export const ButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  padding: '20px 0',

  p: {
    fontSize: '$sm',
    color: '$white',
    lineHeight: '1.5',
    textAlign: 'center',

    opacity: '.8',
    margin: '0 0 20px',
  },

  '@md': {
    padding: '0',
  },
})
