import { Content, Logo, MenuButton, MenuButtonWrapper, Wrapper } from './styles'

export function Header() {
  return (
    <Wrapper>
      <Content>
        <Logo href="/">
          Agência<span>.</span>
        </Logo>
        <MenuButtonWrapper>
          <span>Menu</span>
          <MenuButton>
            <span />
            <span />
            <span />
          </MenuButton>
        </MenuButtonWrapper>
      </Content>
    </Wrapper>
  )
}
