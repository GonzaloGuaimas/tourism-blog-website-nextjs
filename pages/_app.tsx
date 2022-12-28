import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar'
import { Inter } from '@next/font/google'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'   
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={inter.className}>
      <NavBar/>
      <Component {...pageProps} />
    </main>
  )
}
