import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SEO } from '@/components/SEO'

export default function About() {
  return (
    <>
      <SEO />

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

      <Footer />
    </>
  )
}
