import { ReactNode } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import Image from 'next/image'

import { Button } from '../Button'
import { Header } from '../Header'

import styles from './Hero.module.scss'

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
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {!!words?.length && (
          <div className={styles.title}>
            <Typewriter
              words={words}
              loop={0}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
              cursor
              cursorBlinking
            />
          </div>
        )}
        {buttonText && (
          <Button url={redirectUrl} func={buttonFunction}>
            {buttonText}
          </Button>
        )}
      </div>

      <Image src={image} alt={alt} fill className={styles.image} />
    </div>
  )
}
