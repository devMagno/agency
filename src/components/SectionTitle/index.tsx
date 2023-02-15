import { ReactNode } from 'react'
import clsx from 'clsx'

import { background } from '@/types/styles'

import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  children: ReactNode
  bg: background
}

export function SectionTitle({ children, bg }: SectionTitleProps) {
  return <h2 className={clsx(styles.title, styles[bg])}>{children}</h2>
}
