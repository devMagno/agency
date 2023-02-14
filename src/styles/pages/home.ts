import Image from 'next/image'

import { styled } from '..'

export const Illustration = styled(Image, {
  display: 'block',
  objectFit: 'cover',

  width: '100%',
  marginTop: '40px',
  marginBottom: '-60px',

  '@md': {
    right: '10px',
    bottom: '-100px',
    position: 'absolute',

    width: '48%',
    marginTop: '0',
    marginBottom: '0',
  },
})

export const IllustrationContent = styled('div', {
  width: '100%',

  '@md': {
    width: '40%',
  },
})

export const Paragraph = styled('p', {
  margin: '35px 0',
})
