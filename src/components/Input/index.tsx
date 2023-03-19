import { InputHTMLAttributes } from 'react'

import { archivo } from '@/pages/_app'

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type: InputHTMLAttributes<HTMLInputElement>['type'] | 'select' | 'textarea'
  options?: Array<{ value: string | number; label: string }>
}

export function Input({ label, options, type, ...rest }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={rest.id}>
        {label}
      </label>
      {type === 'select' && options?.length ? (
        <select
          className={`${styles.input} ${styles.select}`}
          id={rest.id}
          name={rest.name}
          required={rest.required}
        >
          <option disabled value="" defaultChecked>
            Selecione
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          className={`${styles.input} ${styles.textarea} ${archivo.className}`}
          placeholder={rest.placeholder}
          id={rest.id}
          name={rest.name}
          required={rest.required}
        />
      ) : (
        <input className={styles.input} {...rest} />
      )}
    </div>
  )
}
