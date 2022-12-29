import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Places.module.css'
import Home from '../../components/place-to-go/Home'
import About from '../../components/place-to-go/About'
import Gallery from '../../components/place-to-go/Gallery'
import Map from '../../components/place-to-go/Map'
import Footer from '../../components/Footer'
import Contact from '../../components/place-to-go/Contact'
import ContactButton from '../../components/pure/place-to-go/ContactButton'
import { useInView } from 'react-intersection-observer'
import { NavBar } from '../../components/NavBar'

export default function Place() {
    const router = useRouter()
    // eslint-disable-next-line no-unused-vars
    const { id } = router.query
    const { ref: footerRef, inView: footerVisible } = useInView()
    const { ref: gridRef, inView: gridVisible } = useInView()
    const { ref: mapRef, inView: mapVisible } = useInView()
    return (
      <>
        <Head>
          <title>Free Tours Argentina</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/logoMundo.png" />
        </Head>
        <NavBar action={() => {router.back()}} type={'place'}/>
        <main className={styles.main}>
            <Home placeName={'Bariloche'} description={'La ciudad de la nieve'}/>
            <About refValue={gridRef} gridVisible={gridVisible}/>
            <Gallery/>
            <Map refValue={mapRef} mapVisible={mapVisible}/>
            <Contact/>
            <Footer refValue={footerRef}/>
            <ContactButton footerVisible={footerVisible}/>
        </main>
      </>
    )
  }
  