import { ReactNode } from 'react'

import { Content } from './styles'

interface SectionContentProps {
  children: ReactNode
}

export function SectionContent({ children }: SectionContentProps) {
  return <Content>{children}</Content>
}
