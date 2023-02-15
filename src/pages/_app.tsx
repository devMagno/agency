import { Archivo } from '@next/font/google'

import type { AppProps } from 'next/app'

import '@/styles/reset.scss'
import '@/styles/globals.scss'

const archivo = Archivo({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`globalWrapper ${archivo.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
