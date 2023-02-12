import { ReactNode } from 'react'

import { Content, Title, Wrapper } from './styles'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  background?: 'white' | 'light' | 'dark'
  title?: string
}

export function Section({
  children,
  background,
  title,
  ...rest
}: SectionProps) {
  return (
    <Wrapper bg={background} {...rest}>
      <Content>
        {title && <Title bg={background}>{title}</Title>}
        {children}
      </Content>
    </Wrapper>
  )
}
