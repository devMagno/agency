import { ReactNode } from 'react'

import styles from './SectionContent.module.scss'

interface SectionContentProps {
  children: ReactNode
}

export function SectionContent({ children }: SectionContentProps) {
  return <div className={styles.content}>{children}</div>
}
