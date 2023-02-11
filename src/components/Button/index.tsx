import { ReactNode } from 'react'

import { LinkButton, RegularButton } from './styles'

interface ButtonProps {
  children: ReactNode
  url?: string
  func?: () => void
}

export function Button({ children, url, func }: ButtonProps) {
  if (url) return <LinkButton href={url}>{children}</LinkButton>

  return (
    <RegularButton onClick={func} type="button">
      {children}
    </RegularButton>
  )
}
