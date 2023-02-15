import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import clsx from 'clsx'

import Link from 'next/link'

import styles from './Menu.module.scss'

interface MenuProps {
  active: boolean
}

export function Menu({ active }: MenuProps) {
  return (
    <div className={clsx(styles.wrapper, active && styles.active)}>
      <div className={styles.content}>
        <nav>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.linkItem} href="/sobre">
                Sobre
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.linkItem} href="/servicos">
                Serviços
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.linkItem} href="/projetos">
                Projetos
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.linkItem} href="/blog">
                Blog
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.linkItem} href="/orcamento">
                Orçamento
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <address className={styles.address}>
            <span>Endereço</span>
            <a href="https://www.google.com/maps/place/R.+Bar%C3%A3o+de+Paranapiacaba,+233+-+Encruzilhada,+Santos+-+SP,+11050-251/data=!4m2!3m1!1s0x94ce030cefa2ee17:0x516751d13a37e95?sa=X&ved=2ahUKEwjx2-nxzo79AhUfGbkGHY4GAkAQ8gF6BAgNEAI">
              Barão Offices <br /> <br />
              Rua Barão de Paranapiacaba, 233 <br />
              Encruzilhada, Santos - SP <br />
              CEP 11050-251
            </a>
          </address>
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
      </div>
    </div>
  )
}
