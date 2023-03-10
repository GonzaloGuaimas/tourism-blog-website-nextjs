import Head from 'next/head'
import styles from '../../styles/Admin.module.css'
import { Inter } from '@next/font/google'
import Header from '../components/admin/Header'
import { TabView, TabPanel } from 'primereact/tabview'
import { MainForm } from '../components/admin/MainForm'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { NavBar } from '../components/NavBar'
import { useQuery } from 'react-query'
import { getTours } from '../services/tours/getTours'
import { getTour } from '../services/tours/getTour'
import { getAwards } from '../services/awards/getAwards'
import AwardsForm from '../components/admin/AwardsForm'
import { getPosts } from '../services/posts/getPosts'
import BlogForm from '../components/admin/BlogForm'
import { IPost } from '../models/Post'

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function Admin() {
  const { data: session } = useSession({required: true})
  const toursQuery = useQuery('tours', getTours)
  const awardsQuery = useQuery('awards', getAwards)
  const postsQuery = useQuery('posts', getPosts)
  const tour = getTour(toursQuery, session?.user?.name!)

  if(!session?.user){
    return <></>
  }
    return (
        <>
          <Head>
            <title>Free Tours Argentina | Admin</title>
            <meta name="description" content="Descubrí los Free Tours de Argentina" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/roudedLogo.png" />
          </Head>
          <NavBar type={'admin'} action={() => signOut()}/>
          <main className={styles.main}>
            <Header tourName={tour?.name} tourlogo={tour?.logoImageLink}/>
            <TabView>
                <TabPanel header={'Información Principal'}>
                  {toursQuery.isLoading ? <h2>Cargando Datos</h2> : <MainForm tour={tour}/>}
                </TabPanel>
                <TabPanel header="Contenido Blog">
                  {postsQuery.isLoading ? <h2>Cargando Datos</h2> : <BlogForm tour={tour} postsData={postsQuery.data.filter((element: IPost) => element.tourName === tour?.name)}/>}
                </TabPanel>
                <TabPanel header="Reconocimientos">
                  {awardsQuery.isLoading ? <h2>Cargando Datos</h2> : <AwardsForm tour={tour} awardsData={awardsQuery.data}/>}
                </TabPanel>
            </TabView>
          </main>
        </>
      )
}