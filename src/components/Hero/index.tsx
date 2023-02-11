import { ReactNode } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import Image from 'next/image'

import { Button } from '../Button'
import { Header } from '../Header'

import { Content, Title, TypewriterWrapper, Wrapper } from './styles'

interface HeroProps {
  title: ReactNode
  words?: string[]
  image?: string
  alt?: string
  buttonText?: string
  redirectUrl?: string
  buttonFunction?: () => void
}

export function Hero({
  title,
  words,
  buttonText,
  buttonFunction,
  redirectUrl,
  image = '/hero.jpeg',
  alt = 'Agência de Marketing Digital',
}: HeroProps) {
  return (
    <Wrapper>
      <Header />

      <Content>
        <Title>{title}</Title>
        {!!words?.length && (
          <TypewriterWrapper>
            <Typewriter
              words={words}
              loop={0}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
              cursor
              cursorBlinking
            />
          </TypewriterWrapper>
        )}
        {buttonText && (
          <Button url={redirectUrl} func={buttonFunction}>
            {buttonText}
          </Button>
        )}
      </Content>

      <Image
        src={image}
        alt={alt}
        fill
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'block',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
        }}
      />
    </Wrapper>
  )
}
