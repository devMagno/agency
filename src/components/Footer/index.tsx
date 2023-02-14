import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import { Button } from '../Button'

import {
  CallToAction,
  CallToActionButtonWrapper,
  CallToActionTitle,
  Content,
  Copyright,
  Logo,
  Menu,
  MenuColumn,
  MenuLink,
  MenuLinkAnchor,
  SocialMedia,
  SocialMediaItem,
  Wrapper,
} from './styles'

interface FooterProps {
  showCallToAction?: boolean
}

export function Footer({ showCallToAction = true }: FooterProps) {
  return (
    <Wrapper>
      {showCallToAction && (
        <Content>
          <CallToAction>
            <CallToActionTitle>
              Vamos começar <br /> um projeto juntos?
            </CallToActionTitle>
            <CallToActionButtonWrapper>
              <p>
                Seu projeto merece ficar em boas mãos, conte com a nossa agência
                para isso. Tem todas informações e está preparado? Então vamos
                começar!
              </p>
              <Button>Começar um projeto</Button>
            </CallToActionButtonWrapper>
          </CallToAction>
        </Content>
      )}
      <Content>
        <Menu>
          <MenuColumn>
            <Logo href="/">
              Agência<span>.</span>
            </Logo>
            <p>
              Muito mais que uma agência <br /> digital, uma parceria de <br />{' '}
              projetos incríveis.
            </p>
            <SocialMedia>
              <SocialMediaItem
                href="https://facebook.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaFacebookF size={22} />
              </SocialMediaItem>
              <SocialMediaItem
                href="https://linkedin.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaLinkedinIn size={22} />
              </SocialMediaItem>
              <SocialMediaItem
                href="https://instagram.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaInstagram size={22} />
              </SocialMediaItem>
            </SocialMedia>
          </MenuColumn>
          <MenuColumn>
            <h4>Endereço</h4>
            <MenuLinkAnchor href="https://www.google.com/maps/place/R.+Bar%C3%A3o+de+Paranapiacaba,+233+-+Encruzilhada,+Santos+-+SP,+11050-251/data=!4m2!3m1!1s0x94ce030cefa2ee17:0x516751d13a37e95?sa=X&ved=2ahUKEwjx2-nxzo79AhUfGbkGHY4GAkAQ8gF6BAgNEAI">
              Barão Offices <br /> <br />
              Rua Barão de Paranapiacaba, 233 <br />
              Encruzilhada <br />
              Santos - SP <br />
              CEP 11050-251
            </MenuLinkAnchor>
          </MenuColumn>
          <MenuColumn>
            <h4>Menu</h4>
            <nav>
              <ul>
                <li>
                  <MenuLink href="/sobre">Sobre</MenuLink>
                </li>
                <li>
                  <MenuLink href="/projetos">Serviços</MenuLink>
                </li>
                <li>
                  <MenuLink href="/projetos">Projetos</MenuLink>
                </li>
                <li>
                  <MenuLink href="/blog">Blog</MenuLink>
                </li>
              </ul>
            </nav>
          </MenuColumn>
        </Menu>
      </Content>
      <Copyright>
        <Content>
          Agência © {new Date().getFullYear()} Todos os direitos reservados
        </Content>
      </Copyright>
    </Wrapper>
  )
}
