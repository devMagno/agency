import { Button } from '@/components/Button'
import styles from '@/styles/pages/404.module.scss'

export default function Custom404() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Página não encontrada</h1>
      <p className={styles.text}>
        Infelizmente, a página que procurava não foi encontrada.
      </p>
      <Button url="/">Voltar para o início</Button>
    </main>
  )
}
