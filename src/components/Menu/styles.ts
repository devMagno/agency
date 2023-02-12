import Link from 'next/link'

import { styled } from '@/styles'

export const Wrapper = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'block',
  backgroundColor: '$secondary',
  transition: 'all .3s',

  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  position: 'fixed',

  variants: {
    active: {
      true: {
        backgroundColor: 'translateY(0)',
      },
      false: {
        transform: 'translateY(-100%)',
      },
    },
  },
})

export const Content = styled('div', {
  height: '100%',
  margin: '0 auto',
  padding: '80px 40px 40px',

  width: '100%',
  maxWidth: '$containerMaxWidth',

  '@md': {
    padding: '150px',

    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const List = styled('ul', {
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
})

export const Item = styled('li', {
  width: '100%',
  display: 'block',
  padding: '7px 0',

  '@md': {
    padding: '10px 0 ',
  },
})

export const LinkItem = styled(Link, {
  display: 'block',
  padding: '7px 0',

  fontSize: '$xl',
  color: '$white',
  fontWeight: 'bold',
  transition: 'all .3s',

  '&:hover': {
    color: '$primary',
  },

  '@md': {
    padding: '10px 0',
    fontSize: '$3xl',
  },
})

export const SocialMedia = styled('div', {
  display: 'flex',
  marginTop: '30px',
  alignItems: 'center',
})

export const SocialMediaItem = styled('a', {
  width: '46px',
  height: '46px',
  borderRadius: '$sm',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, .1)',

  color: '$white',
  fontSize: '$sm',
  lineHeight: '1.4',

  transition: 'all .3s',

  '&:hover': {
    backgroundColor: 'rgba(255,255,255,.3)',
  },

  '& + &': {
    marginLeft: '8px',
  },
})

export const Address = styled('address', {
  display: 'none',
  marginTop: '35px',

  color: '$white',

  span: {
    fontSize: '$sm',
    fontWeight: 'bold',
  },

  a: {
    display: 'block',
    marginTop: '10px',

    lineHeight: '1.4',
    transition: 'all .3s',

    '&:hover': {
      color: '$primary',
    },
  },

  '@md': {
    display: 'block',
  },
})
