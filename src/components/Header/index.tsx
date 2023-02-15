import { useEffect, useState } from 'react'
import clsx from 'clsx'

import Link from 'next/link'

import { Menu } from '../Menu'

import styles from './Header.module.scss'

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Menu active={isMenuActive} />

      <header
        className={clsx(
          styles.wrapper,
          scrollPosition > 100 && styles.scrolledDown,
          isMenuActive && styles.active,
        )}
      >
        <div className={styles.content}>
          <Link
            href="/"
            className={clsx(
              styles.logo,
              scrollPosition > 100 && styles.scrolledDown,
              isMenuActive && styles.active,
            )}
          >
            Agência<span>.</span>
          </Link>
          <div
            className={clsx(
              styles.menuButtonWrapper,
              scrollPosition > 100 && styles.scrolledDown,
              isMenuActive && styles.active,
            )}
          >
            <span>Menu</span>
            <button
              type="button"
              onClick={() => setIsMenuActive((prev) => !prev)}
              className={clsx(
                styles.menuButton,
                scrollPosition > 100 && styles.scrolledDown,
                isMenuActive && styles.active,
              )}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
