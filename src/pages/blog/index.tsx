import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import BlogCard from '../../components/pure/BlogCard'
import Footer from '../../components/Footer'
import { NavBar } from '../../components/NavBar'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getPosts } from '../../services/posts/getPosts'
import { IPost } from '../../models/Post'

export default function Blog() {
    const router = useRouter()
    const footerRef = useRef()
    const postsQuery = useQuery('posts', getPosts)
    
    return(
        <>
            <Head>
            <title>Free Tours Argentina | Blog</title>
            <meta name="description" content="Descubrí los Free Tours de Argentina" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/logoMundo.png" />
            </Head>
            <NavBar action={() => {router.back()}} type={'blog'}/>
            <main className={styles.main}>
                <div style={{marginTop: '60px'}}>
                    <div className='titleSection' id={'about'} style={{ marginTop: '2rem' }}>
                        <h2>FREE TOUR ARGENTINA</h2>
                        <h1>NUESTRO BLOG</h1>
                        <hr/>
                    </div>
                </div>
                <div className={styles.BlogContainer}>
                    {
                        postsQuery?.data?.map((post: IPost) => {
                            return(
                                <BlogCard key={post.imageLink} post={post}/>
                            )
                        })
                    }
                </div>
                <Footer refValue={footerRef}/>
            </main>
        </>
    )
}