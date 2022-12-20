import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import second from "next"
import HomeComponent from '../components/Home'
import { Inter } from '@next/font/google'
import Delimiter from '../components/Delimiter'
import DestinationGrid from '../components/DestinationGrid'
import BlogGrid from '../components/BlogGrid'
import Gallery from '../components/Gallery'
import About from '../components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
      <>
        <Head>
          <title>Free Tours Argentina</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" href="" />
        </Head>
        <main className={styles.main}>
          <HomeComponent/>
          <Delimiter image={'/assets/map.png'} title={'TOURS DE PAGO LIBRE'} />
          <DestinationGrid/>
          <Delimiter image={'/assets/person.png'} title={'LOS MEJORES GUÍAS'} />
          <BlogGrid/>
          <Delimiter image={'/assets/footsprint.png'} title={'RECORRIDOS A PIE'} />
          <Gallery/>
          <About/>
          <Delimiter image={'/assets/footsprint.png'} title={'RECORRIDOS A PIE'} />
        </main>
      </>
    )
  }
  