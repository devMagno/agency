import { styled } from 'stitches.config'

import Link from 'next/link'

export const Wrapper = styled('header', {
  width: '100%',
  height: 'auto',
  padding: '0 $containerPadding',
  backgroundColor: 'transparent',
  borderBottom: '1px solid $borderColor',

  top: 0,
  left: 0,
  zIndex: 10,
  position: 'fixed',

  '@md': {
    borderBottom: 'none',
  },
})

export const Content = styled('div', {
  height: '70px',
  margin: '0 auto',
  width: '$containerWidth',
  maxWidth: '$containerMaxWidth',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Logo = styled(Link, {
  fontSize: '$lg',
  color: '$primary',

  span: {
    color: '$white',
  },
})

export const MenuButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '> span': {
    fontSize: '$xs',
    color: '$white',
    fontWeight: 'bold',

    lineHeight: '1.4',
    textTransform: 'uppercase',

    marginTop: '2px',
    marginRight: '4px',
  },
})

export const MenuButton = styled('button', {
  width: '46px',
  height: '46px',
  position: 'relative',
  backgroundColor: 'transparent',

  display: 'flex',

  span: {
    opacity: 1,
    left: '10px',
    width: '25px',
    height: '2px',
    display: 'block',
    position: 'absolute',
    backgroundColor: '$white',

    '&:nth-child(1)': {
      top: '14px',
    },

    '&:nth-child(2)': {
      top: '22px',
    },

    '&:nth-child(3)': {
      top: '30px',
    },
  },
})
