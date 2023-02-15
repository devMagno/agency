import { FaLaptopCode, FaShoppingCart } from 'react-icons/fa'
import { GiArcheryTarget } from 'react-icons/gi'
import { HiOutlineColorSwatch } from 'react-icons/hi'

import styles from './ServicesList.module.scss'

export function ServicesList() {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.item}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <FaLaptopCode size={30} color="white" />
          </div>
          <h3 className={styles.title}>Desenvolvimento de Sites</h3>
          <p className={styles.text}>
            Desenvolvimento de site exclusivo, focado em UX/UI, responsivo,
            otimizado para motores de busca e totalmente gerenciável.
          </p>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <GiArcheryTarget size={30} color="white" />
          </div>
          <h3 className={styles.title}>Marketing Digital</h3>
          <p className={styles.text}>
            Planejamento e ações de marketing digital para sua marca ganhar
            espaço no mercado e conquistar mais clientes.
          </p>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <HiOutlineColorSwatch size={30} color="white" />
          </div>
          <h3 className={styles.title}>Identidade Visual</h3>
          <p className={styles.text}>
            Criação de identidade visual, manual, conceito da marca, logo e
            demais materiais auxiliares de branding.
          </p>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <FaShoppingCart size={30} color="white" />
          </div>
          <h3 className={styles.title}>E-Commerce</h3>
          <p className={styles.text}>
            Plataforma completa para e-commerce, sistema de venda online e
            customização para sua empresa vender mais.
          </p>
        </div>
      </li>
    </ul>
  )
}
