import Image from 'next/image'

import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { SectionContent } from '@/components/SectionContent'
import { SectionTitle } from '@/components/SectionTitle'
import { SEO } from '@/components/SEO'
import { ServicesList } from '@/components/ServicesList'
import styles from '@/styles/pages/Home.module.scss'

import illustration from '../../public/web-design.png'

export default function Home() {
  return (
    <>
      <SEO />

      <Hero
        title={
          <>
            Muito mais que só <br /> uma agência de marketing.
          </>
        }
        words={[
          'Resultados',
          'Tecnologia',
          'Comunicação',
          'Design',
          'Inovação',
        ]}
      />

      <main>
        <Section bg="light">
          <SectionContent>
            <div className={styles.illustrationContent}>
              <SectionTitle bg="light">
                Uma parceria de projetos incríveis
              </SectionTitle>
              <p className={styles.paragraph}>
                Somos uma agência de publicidade e marketing que trabalha com
                soluções e estratégias para conectar sua marca com o consumidor
                de forma humanizada, proporcionando novas oportunidades de
                negócio e potencializando suas vendas.
              </p>
              <p className={styles.paragraph}>
                Somos parceiros de projetos. Além de vestir a camisa, vibramos
                com cada conquista. Inquietos na essência, nosso objetivo só é
                alcançado depois do seu.
              </p>
              <Button url="/orcamento">Fale conosco</Button>
            </div>
            <div>
              <Image
                src={illustration}
                className={styles.illustration}
                alt="Ilustração contendo um celular, um notebook e uma paleta de cores digital"
              />
            </div>
          </SectionContent>
        </Section>
        <Section bg="white">
          <SectionContent>
            <SectionTitle bg="white">Serviços</SectionTitle>
            <p>
              Trabalhamos com uma linha de criação e estratégia adaptada para o
              perfil de cada cliente, respeitando a história e personalidade da
              marca.
            </p>
            <ServicesList />
          </SectionContent>
        </Section>
      </main>

      <Footer />
    </>
  )
}
