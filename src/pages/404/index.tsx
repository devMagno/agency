import { Button } from '@/components/Button'

import { Text, Title, Wrapper } from './styles'

export default function Custom404() {
  return (
    <Wrapper>
      <Title>Página não encontrada</Title>
      <Text>Infelizmente, a página que procurava não foi encontrada.</Text>
      <Button url="/">Voltar para o início</Button>
    </Wrapper>
  )
}
