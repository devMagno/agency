import { FaLaptopCode, FaShoppingCart } from 'react-icons/fa'
import { GiArcheryTarget } from 'react-icons/gi'
import { HiOutlineColorSwatch } from 'react-icons/hi'

import {
  Item,
  ItemContent,
  ItemIcon,
  ItemText,
  ItemTitle,
  Wrapper,
} from './styles'

export function ServicesList() {
  return (
    <Wrapper>
      <Item>
        <ItemContent>
          <ItemIcon>
            <FaLaptopCode size={30} color="white" />
          </ItemIcon>
          <ItemTitle>Desenvolvimento de Sites</ItemTitle>
          <ItemText>
            Desenvolvimento de site exclusivo, focado em UX/UI, responsivo,
            otimizado para motores de busca e totalmente gerenciável.
          </ItemText>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemIcon>
            <GiArcheryTarget size={30} color="white" />
          </ItemIcon>
          <ItemTitle>Marketing Digital</ItemTitle>
          <ItemText>
            Planejamento e ações de marketing digital para sua marca ganhar
            espaço no mercado e conquistar mais clientes.
          </ItemText>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemIcon>
            <HiOutlineColorSwatch size={30} color="white" />
          </ItemIcon>
          <ItemTitle>Identidade Visual</ItemTitle>
          <ItemText>
            Criação de identidade visual, manual, conceito da marca, logo e
            demais materiais auxiliares de branding.
          </ItemText>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemIcon>
            <FaShoppingCart size={30} color="white" />
          </ItemIcon>
          <ItemTitle>E-Commerce</ItemTitle>
          <ItemText>
            Plataforma completa para e-commerce, sistema de venda online e
            customização para sua empresa vender mais.
          </ItemText>
        </ItemContent>
      </Item>
    </Wrapper>
  )
}
