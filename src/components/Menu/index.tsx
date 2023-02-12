import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import {
  Address,
  Content,
  Item,
  LinkItem,
  List,
  SocialMedia,
  SocialMediaItem,
  Wrapper,
} from './styles'

interface MenuProps {
  active: boolean
}

export function Menu({ active }: MenuProps) {
  return (
    <Wrapper active={active}>
      <Content>
        <nav>
          <List>
            <Item>
              <LinkItem href="/sobre">Sobre</LinkItem>
            </Item>
            <Item>
              <LinkItem href="/servicos">Serviços</LinkItem>
            </Item>
            <Item>
              <LinkItem href="/projetos">Projetos</LinkItem>
            </Item>
            <Item>
              <LinkItem href="/blog">Blog</LinkItem>
            </Item>
            <Item>
              <LinkItem href="/orcamento">Orçamento</LinkItem>
            </Item>
          </List>
        </nav>
        <div>
          <Address>
            <span>Endereço</span>
            <a href="https://www.google.com/maps/place/R.+Bar%C3%A3o+de+Paranapiacaba,+233+-+Encruzilhada,+Santos+-+SP,+11050-251/data=!4m2!3m1!1s0x94ce030cefa2ee17:0x516751d13a37e95?sa=X&ved=2ahUKEwjx2-nxzo79AhUfGbkGHY4GAkAQ8gF6BAgNEAI">
              Barão Offices <br /> <br />
              Rua Barão de Paranapiacaba, 233 <br />
              Encruzilhada <br />
              Santos - SP <br />
              CEP 11050-251
            </a>
          </Address>
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
        </div>
      </Content>
    </Wrapper>
  )
}
