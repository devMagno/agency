import { ReactNode } from 'react'

import { background } from '@/types/styles'

import { Wrapper } from './styles'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  bg: background
}

export function Section({ children, bg, ...rest }: SectionProps) {
  return (
    <Wrapper bg={bg} {...rest}>
      {children}
    </Wrapper>
  )
}
