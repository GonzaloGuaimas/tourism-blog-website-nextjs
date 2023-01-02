import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'   
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <main className={inter.className}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </main>
  )
}
