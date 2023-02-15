import { ReactNode } from 'react'

import Link from 'next/link'

import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  url?: string
  func?: () => void
}

export function Button({ children, url, func }: ButtonProps) {
  if (url)
    return (
      <Link className={styles.button} href={url}>
        {children}
      </Link>
    )

  return (
    <button className={styles.button} onClick={func} type="button">
      {children}
    </button>
  )
}
