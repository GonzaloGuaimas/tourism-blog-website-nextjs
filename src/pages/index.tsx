import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import HomeComponent from '../components/Home'
import { Inter } from '@next/font/google'
import Delimiter from '../components/Delimiter'
import DestinationGrid from '../components/DestinationGrid'
import BlogGrid from '../components/BlogGrid'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Footer from '../components/Footer'
import { useRef } from 'react'
import Awards from '../components/Awards'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { useQuery } from 'react-query'
import { getTours } from '../services/tours/getTours'
import { getAwards } from '../services/awards/getAwards'
import { getPosts } from '../services/posts/getPosts'
import { PropagateLoader } from 'react-spinners'

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const footerRef = useRef()
    const tourQuery = useQuery('tours', getTours)
    const awardsQuery = useQuery('awards', getAwards)
    const postsQuery = useQuery('posts', getPosts)

    return (
      <>
        
        <Head>
          <title>Free Tours Argentina</title>
          <meta name="description" content="Descubrí los Free Tours de Argentina" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/roudedLogo.png" />
        </Head>
        {
           tourQuery.isLoading ? 
           <PropagateLoader
              style={{ position: 'absolute', top: '50%', left: '50%'}}
              color={'#FE5500'}
              loading={tourQuery.isLoading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              />
          : 
          <>
            <NavBar action={() => {}} type={'index'}/>
            <main className={styles.main}>
              <HomeComponent/>
              <DestinationGrid tourQuery={tourQuery}/>
              <Delimiter title={'TOURS DE PAGO LIBRE'} />
              <Gallery tours={tourQuery?.data}/>
              <Delimiter title={'RECORRIDOS A PIE'}/>
              <BlogGrid posts={postsQuery?.data}/>
              <About/>
              <Awards awards={awardsQuery?.data}/>
              <Footer refValue={footerRef}/>
            </main>
          </>
        }
       
      </>
    )
  }