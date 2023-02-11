import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <Hero
      title={
        <>
          Muito mais que só <br /> uma agência de marketing.
        </>
      }
      words={['Resultados', 'Tecnologia', 'Comunicação', 'Design', 'Inovação']}
    />
  )
}
