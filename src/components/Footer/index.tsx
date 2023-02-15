import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import Link from 'next/link'

import { Button } from '../Button'

import styles from './Footer.module.scss'

interface FooterProps {
  showCallToAction?: boolean
}

export function Footer({ showCallToAction = true }: FooterProps) {
  return (
    <footer className={styles.wrapper}>
      {showCallToAction && (
        <div className={styles.content}>
          <div className={styles.callToAction}>
            <h3 className={styles.callToActionTitle}>
              Vamos começar <br /> um projeto juntos?
            </h3>
            <div className={styles.callToActionButtonWrapper}>
              <p>
                Seu projeto merece ficar em boas mãos, conte com a nossa agência
                para isso. Tem todas informações e está preparado? Então vamos
                começar!
              </p>
              <Button>Começar um projeto</Button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.menu}>
          <div className={styles.menuColumn}>
            <Link href="/" className={styles.logo}>
              Agência<span>.</span>
            </Link>
            <p>
              Muito mais que uma agência <br /> digital, uma parceria de <br />{' '}
              projetos incríveis.
            </p>
            <div className={styles.socialMedia}>
              <a
                className={styles.socialMediaItem}
                href="https://facebook.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                className={styles.socialMediaItem}
                href="https://linkedin.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a
                className={styles.socialMediaItem}
                href="https://instagram.com"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
          <div className={styles.menuColumn}>
            <h4>Endereço</h4>
            <a
              className={styles.menuLink}
              href="https://www.google.com/maps/place/R.+Bar%C3%A3o+de+Paranapiacaba,+233+-+Encruzilhada,+Santos+-+SP,+11050-251/data=!4m2!3m1!1s0x94ce030cefa2ee17:0x516751d13a37e95?sa=X&ved=2ahUKEwjx2-nxzo79AhUfGbkGHY4GAkAQ8gF6BAgNEAI"
            >
              Barão Offices <br /> <br />
              Rua Barão de Paranapiacaba, 233 <br />
              Encruzilhada <br />
              Santos - SP <br />
              CEP 11050-251
            </a>
          </div>
          <div className={styles.menuColumn}>
            <h4>Menu</h4>
            <nav>
              <ul>
                <li>
                  <Link className={styles.menuLink} href="/sobre">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link className={styles.menuLink} href="/projetos">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link className={styles.menuLink} href="/projetos">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link className={styles.menuLink} href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.content}>
          Agência © {new Date().getFullYear()} Todos os direitos reservados
        </div>
      </div>
    </footer>
  )
}
