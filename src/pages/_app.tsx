import { Archivo } from '@next/font/google'

import type { AppProps } from 'next/app'

import { globalStyles, MainWrapper } from '@/styles/global'

const archivo = Archivo({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainWrapper className={archivo.className}>
      <Component {...pageProps} />
    </MainWrapper>
  )
}
