import { Hero } from '@/components/Hero'

export default function About() {
  return (
    <Hero
      title={
        <>
          Uma agência de marketing digital <br /> que vai além do simples.
        </>
      }
      image="/hero-sobre.jpg"
      alt="Agência de Marketing Digital"
      buttonText="Conheça mais"
      redirectUrl="/"
    />
  )
}
