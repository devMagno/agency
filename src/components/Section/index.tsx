import { ReactNode } from 'react'
import clsx from 'clsx'

import { background } from '@/types/styles'

import styles from './Section.module.scss'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  bg: background
}

export function Section({ children, bg, ...rest }: SectionProps) {
  return (
    <section className={clsx(styles.wrapper, styles[bg])} {...rest}>
      {children}
    </section>
  )
}
