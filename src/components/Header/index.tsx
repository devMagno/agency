import { useState } from 'react'

import { Menu } from '../Menu'

import { Content, Logo, MenuButton, MenuButtonWrapper, Wrapper } from './styles'

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <>
      <Menu active={isMenuActive} />

      <Wrapper active={isMenuActive}>
        <Content>
          <Logo href="/" active={isMenuActive}>
            Agência<span>.</span>
          </Logo>
          <MenuButtonWrapper active={isMenuActive}>
            <span>Menu</span>
            <MenuButton
              onClick={() => setIsMenuActive((prev) => !prev)}
              active={isMenuActive}
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
