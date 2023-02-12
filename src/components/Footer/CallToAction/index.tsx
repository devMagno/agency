import { Button } from '@/components/Button'

import { ButtonWrapper, Title, Wrapper } from './styles'

export function CallToAction() {
  return (
    <Wrapper>
      <Title>Vamos começar um projeto juntos?</Title>
      <ButtonWrapper>
        <p>
          Seu projeto merece ficar em boas mãos, conte com a nossa agência para
          isso. Tem todas informações e está preparado? Então vamos começar!
        </p>
        <Button url="/orcamento">Começar um projeto</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}
