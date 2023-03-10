import React from 'react'
import Head from 'next/head'
import styles from '../../../styles/Places.module.css'
import Home from '../../components/place-to-go/Home'
import About from '../../components/place-to-go/About'
import Gallery from '../../components/place-to-go/Gallery'
import Map from '../../components/place-to-go/Map'
import Footer from '../../components/Footer'
import Contact from '../../components/place-to-go/Contact'
import ContactButton from '../../components/pure/place-to-go/ContactButton'
import { useInView } from 'react-intersection-observer'
import { NavBar } from '../../components/NavBar'
import Comments from '../../components/place-to-go/Comments'
import { getTours } from '../../services/tours/getTours'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getTour } from '../../services/tours/getTour'
import Route from '../../components/place-to-go/Route'

export default function Place({ params }: { params: any}) {
    const router = useRouter()
    const { id } = params
    const toursQuery = useQuery('tours', getTours)
    const tour = getTour(toursQuery, id)
    const { ref: footerRef, inView: footerVisible } = useInView()
    return (
      <>
        <Head>
          <title>Free Tours Argentina</title>
          <meta name="description" content="Descubrí los Free Tours de Argentina" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/roudedLogo.png" />
        </Head>
        <NavBar action={() => {router.back()}} type={'place'}/>
        <main className={styles.main}>
            <Home tour={tour}/>
            <About tour={tour}/>
            <Route tour={tour} />
            <Map tour={tour}/>
            <div className={styles.GalleryContactContainer}>
              <Gallery tour={tour} />
              <Contact whatsAppNumber={tour?.whatsAppNumber}/>
            </div>
            
            {!toursQuery.isLoading ? <Comments tour={tour}/> : null}
            <Footer refValue={footerRef}/>
            <ContactButton whatsAppNumber={tour?.whatsAppNumber} footerVisible={footerVisible}/>
        </main>
      </>
    )
  }
  export function getServerSideProps(context: any) {
    return {
      props: {params: context.params}
    }
  }