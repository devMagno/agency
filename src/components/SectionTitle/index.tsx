import { ReactNode } from 'react'

import { background } from '@/types/styles'

import { Title } from './styles'

interface SectionTitleProps {
  children: ReactNode
  bg: background
}

export function SectionTitle({ children, bg }: SectionTitleProps) {
  return <Title bg={bg}>{children}</Title>
}
