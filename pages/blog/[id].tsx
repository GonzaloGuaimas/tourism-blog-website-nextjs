import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'
import BlogCard from '../../components/pure/BlogCard'
import Header from '../../components/blog/Header'
import Image from 'next/image'
import { BlogInfo } from '../../components/blog/BlogInfo'
import BlogContent from '../../components/blog/BlogContent'

export default function Blog() {
    const footerRef = useRef()
    return(
        <>
            <Head>
            <title>Free Tours Argentina | Blog</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/logoMundo.png" />
            </Head>
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