import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { SEO } from '@/components/SEO'
import { ServicesList } from '@/components/ServicesList'

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
        <Section title="Título exemplo" background="light">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            eum sit sunt vero nulla, laborum enim at quod dolor iusto quaerat
            animi! Quidem animi, exercitationem recusandae inventore
            voluptatibus tempora aspernatur!
          </p>
        </Section>
        <Section title="Serviços" background="white">
          <p>
            Trabalhamos com uma linha de criação e estratégia adaptada para o
            perfil de cada cliente, respeitando a história e personalidade da
            marca.
          </p>
          <ServicesList />
        </Section>
        <Section title="Título exemplo" background="dark">
          <p>
            Trabalhamos com uma linha de criação e estratégia adaptada para o
            perfil de cada cliente, respeitando a história e personalidade da
            marca.
          </p>
        </Section>
      </main>
    </>
  )
}
