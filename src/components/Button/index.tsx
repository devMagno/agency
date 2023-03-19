import { ReactNode } from 'react'
import clsx from 'clsx'

import Link from 'next/link'

import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  outline?: boolean
  value?: string
  type?: 'radio' | 'checkbox' | 'submit'
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean
  url?: string
  id?: string
  func?: () => void
}

export function Button({
  children,
  outline,
  value,
  type,
  size = 'md',
  checked,
  url,
  id,
  func,
}: ButtonProps) {
  if (url)
    return (
      <Link
        className={clsx(styles.button, outline && styles.outline)}
        href={url}
      >
        {children}
      </Link>
    )

  if (value)
    return (
      <>
        <input value={value} id={id} name={id} type={type} checked={checked} />
        <label
          htmlFor={id}
          className={clsx(
            styles.button,
            styles.input,
            checked && styles.checked,
            outline && styles.outline,
          )}
        >
          {children}
        </label>
      </>
    )

  return (
    <button
      className={clsx(styles.button, styles[size], outline && styles.outline)}
      onClick={func}
      type="button"
    >
      {children}
    </button>
  )
}
