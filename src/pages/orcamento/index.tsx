import Link from 'next/link'

import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Input } from '@/components/Input'
import { SEO } from '@/components/SEO'
import styles from '@/styles/pages/Orcamento.module.scss'

export default function Orcamento() {
  const options = [
    { value: 'Pesquisa no Google', label: 'Pesquisa no Google' },
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Instagram', label: 'Instagram' },
    { value: 'Já sou cliente', label: 'Já sou cliente' },
    { value: 'Outro', label: 'Outro' },
  ]

  return (
    <>
      <SEO />
      <div className={styles.wrapper}>
        <main className={styles.content}>
          <div className={styles.leftContainer}>
            <Link href="/" className={styles.logo}>
              Agência<span>.</span>
            </Link>
            <h1 className={styles.title}>Deixe seu projeto em boas mãos!</h1>
            <p className={styles.text}>
              Preencha corretamente as informações do formulário para que um de
              nossos especialistas entre em contato.
            </p>
          </div>
          <form className={styles.form}>
            <h3 className={styles.formTitle}>Como podemos ajudá-lo?</h3>
            <div className={styles.radioContainer}>
              <Button value="website" type="checkbox" outline>
                Website
              </Button>
              <Button value="e-commerce" type="checkbox" outline>
                E-commerce
              </Button>
              <Button value="identidade-visual" type="checkbox" outline>
                Identidade Visual
              </Button>
              <Button value="marketing-digital" type="checkbox" outline>
                Marketing Digital
              </Button>
              <Button value="midia-social" type="checkbox" outline>
                Mídia social
              </Button>
              <Button value="seo-google-ads" type="checkbox" outline>
                SEO/Google Ads
              </Button>
            </div>
            <h3 className={styles.formTitle}>Qual o budget disponível?</h3>
            <div className={`${styles.radioContainer} ${styles.full}`}>
              <Button value="abaixo-5" type="radio" outline>
                Abaixo de 5k
              </Button>
              <Button value="5k-10k" type="radio" outline>
                5k - 10k
              </Button>
              <Button value="acima-10k" type="radio" outline>
                Acima de 10k
              </Button>
            </div>
            <div className={styles.inputs}>
              <div className={styles.input}>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  label="Nome"
                  placeholder="Nome completo"
                  required
                />
              </div>
              <div className={`${styles.input} ${styles.half}`}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="E-mail"
                  placeholder="Seu e-mail"
                  inputMode="email"
                  required
                />
              </div>
              <div className={`${styles.input} ${styles.half}`}>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Telefone"
                  placeholder="(00) 00000-0000"
                  inputMode="numeric"
                  required
                />
              </div>
              <div className={`${styles.input} ${styles.half}`}>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  label="Empresa"
                  placeholder="Nome da sua empresa"
                  required
                />
              </div>
              <div className={`${styles.input} ${styles.half}`}>
                <Input
                  id="meet"
                  name="meet"
                  label="Como nos conheceu?"
                  type="select"
                  options={options}
                  required
                />
              </div>
              <div className={styles.input}>
                <Input
                  id="details"
                  name="details"
                  type="textarea"
                  label="Detalhes do Projeto"
                  placeholder="Quanto mais detalhes, melhor!"
                  required
                />
              </div>
              <div className={styles.buttonContainer}>
                <p className={styles.privatePolicyText}>
                  Ao enviar o formulário, eu declaro que estou de acordo com a{' '}
                  <Link href="/politica-de-privacidade">
                    Política de Privacidade
                  </Link>
                  .
                </p>
                <Button type="submit" size="sm">
                  Enviar orçamento
                </Button>
              </div>
            </div>
          </form>
        </main>
      </div>
      <Footer showCallToAction={false} />
    </>
  )
}
