import { useEffect, useState } from 'react'

import { Menu } from '../Menu'

import { Content, Logo, MenuButton, MenuButtonWrapper, Wrapper } from './styles'

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

      <Wrapper active={isMenuActive} scrolledDown={scrollPosition > 100}>
        <Content>
          <Logo
            href="/"
            active={isMenuActive}
            scrolledDown={scrollPosition > 100}
          >
            Agência<span>.</span>
          </Logo>
          <MenuButtonWrapper
            active={isMenuActive}
            scrolledDown={scrollPosition > 100}
          >
            <span>Menu</span>
            <MenuButton
              onClick={() => setIsMenuActive((prev) => !prev)}
              active={isMenuActive}
              scrolledDown={scrollPosition > 100}
            >
              <span />
              <span />
              <span />
            </MenuButton>
          </MenuButtonWrapper>
        </Content>
      </Wrapper>
    </>
  )
}
