import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'
import { Header } from '../../components/blog/header'
import { BlogInfo } from '../../components/blog/BlogInfo'
import { BlogContent } from '../../components/blog/BlogContent'
import { NavBar } from '../../components/NavBar'
import { useRouter } from 'next/router'

export default function Blog() {
    const router = useRouter()
    const footerRef = useRef()
    return(
        <>
            <Head>
            <title>Free Tours Argentina | Blog</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/logoMundo.png" />
            </Head>
            <NavBar action={() => {router.back()}} type={'blog'}/>
            <main className={styles.main}>
                <Header/>
                <BlogInfo/>
                <div>
                    <div className='titleSection' id={'about'} style={{ marginTop: '2rem' }}>
                        <h2>FREE TOUR ARGENTINA</h2>
                        <h1>NUESTRO BLOG</h1>
                        <hr />
                    </div>
                </div>
                <BlogContent/>
                <BlogContent/>
                <Footer refValue={footerRef}/>
            </main>
        </>
    )
}