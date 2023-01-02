import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'   
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
    <main className={inter.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
}
