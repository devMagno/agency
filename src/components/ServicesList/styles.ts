import { styled } from '@/styles'

export const Wrapper = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  marginTop: '40px',
})

export const Item = styled('li', {
  flex: '1 1 200px',
  margin: '10px',
  borderRadius: '$lg',
  backgroundColor: '$white',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0 0 30px 0 rgba(0, 0, 0, .5',

  '@md': {
    margin: '15px',
  },
})

export const ItemContent = styled('div', {
  width: '100%',
  textAlign: 'left',
  position: 'relative',
  padding: '20px 10px 20px 70px',

  '@md': {
    padding: '35px',
  },
})

export const ItemIcon = styled('div', {
  top: '20px',
  left: '-12px',
  position: 'absolute',

  width: '60px',
  height: '60px',
  margin: '0 auto',
  textAlign: 'center',
  borderRadius: '$md',
  backgroundColor: '$secondary',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@md': {
    margin: 0,
    width: '70px',
    height: '70px',
    position: 'relative',

    top: 'unset',
    left: 'unset',
  },
})

export const ItemTitle = styled('h3', {
  fontSize: '$sm',
  lineHeight: '1.1',
  fontWeight: 'bold',

  marginBottom: '10px',

  '@md': {
    fontSize: '$lg',

    margin: '20px 0',
  },
})

export const ItemText = styled('p', {
  fontSize: '$sm',
  lineHeight: '1.5',

  opacity: 0.8,
})
