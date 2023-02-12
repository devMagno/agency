import { styled } from 'stitches.config'

import Link from 'next/link'

export const Wrapper = styled('footer', {
  // backgroundColor: '$secondary',
  backgroundColor: '#212121',
})

export const Content = styled('div', {
  margin: '0 auto',
  width: '$containerWidth',
  padding: '0 $containerPadding',
  maxWidth: '$containerMaxWidth',
})

export const CallToAction = styled('div', {
  padding: '60px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',

  display: 'flex',
  flexDirection: 'column',

  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const CallToActionTitle = styled('h3', {
  color: '$white',
  fontSize: '$2xl',
  lineHeight: '1.1',
  fontWeight: 'bold',
  textAlign: 'center',

  padding: '20px 0',

  '@md': {
    flex: 1,

    fontSize: '$4xl',
    textAlign: 'left',
  },
})

export const CallToActionButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  padding: '20px 0',

  p: {
    fontSize: '$sm',
    color: '$white',
    lineHeight: '1.5',
    textAlign: 'center',

    opacity: 0.8,
    marginBottom: '20px',
  },

  '@md': {
    flex: 1,
    paddingLeft: '10px',
    alignItems: 'start',

    p: {
      textAlign: 'left',
      maxWidth: '470px',
    },
  },
})

export const Menu = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  padding: '60px 0',
  textAlign: 'center',

  '@md': {
    marginTop: '40px',
    padding: '100px 0',

    alignItems: 'start',
    flexDirection: 'row',
  },
})

export const MenuColumn = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  textAlign: 'center',

  padding: '0 15px',

  h4: {
    color: '$white',
    fontSize: '$sm',
    lineHeight: '1.5',
    fontWeight: 'bold',

    display: 'block',
    marginBottom: '10px',
  },

  p: {
    display: 'block',
    marginBottom: '30px',

    fontSize: '$md',
    color: '$white',
    lineHeight: '1.5',
  },

  '& + &': {
    marginTop: '40px',
  },

  '@md': {
    flex: 1,
    textAlign: 'left',
    alignItems: 'start',

    '& + &': {
      marginTop: '0',
    },
  },
})

export const Logo = styled(Link, {
  fontSize: '$lg',
  color: '$primary',

  margin: '0 auto 30px',

  span: {
    color: '$white',
  },

  '@md': {
    margin: '0 0 30px',
  },
})

const linkStyles = {
  color: '$white',
  fontSize: '$sm',
  lineHeight: '1.5',

  opacity: 0.8,
  display: 'block',
  margin: '15px 0',
  transition: 'all 0.3s',

  '&:hover': {
    opacity: 1,
  },
}

export const MenuLink = styled(Link, linkStyles)
export const MenuLinkAnchor = styled('a', linkStyles)

export const SocialMedia = styled('div', {
  display: 'flex',
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

export const Copyright = styled('div', {
  padding: '30px 0',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',

  color: '$white',
  fontSize: '$xs',
  lineHeight: '1.5',
  textAlign: 'center',
  textTransform: 'uppercase',
})
