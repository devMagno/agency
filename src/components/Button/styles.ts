import Link from 'next/link'

import { styled } from '@/styles'
import { btnOut } from '@/styles/animations'

const buttonStyles = {
  margin: '5px',
  padding: '12px 30px',
  position: 'relative',
  borderRadius: '$full',
  backgroundColor: '$primary',

  fontSize: '$sm',
  fontWeight: 'bold',
  lineHeight: '1.5',
  color: '$secondary',

  transition: 'all 0.2s ease-in-out',

  '&::before': {
    content: '',
    position: 'absolute',
    border: '$primary solid 3px',
    borderRadius: '$full',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    animationDuration: '1s',
  },

  '&:hover::before': {
    animationName: btnOut,
  },
}

export const LinkButton = styled(Link, buttonStyles)

export const RegularButton = styled('button', buttonStyles)
