import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Footer from '../../components/Footer'
import { Header } from '../../components/blog/Header'
import { BlogInfo } from '../../components/blog/BlogInfo'
import { BlogContent } from '../../components/blog/BlogContent'
import { NavBar } from '../../components/NavBar'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getPosts } from '../../services/posts/getPosts'
import { getPost } from '../../services/posts/getPost'
import { IContent } from '../../models/Post'

export default function Blog({ params }: { params: any}) {
    const router = useRouter()
    const { id } = params
    const postQuery = useQuery('posts', getPosts)
    const post = getPost(postQuery, id)
    const footerRef = useRef()
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
                <Header post={post}/>
                {
                    post?.content.map((content: IContent) => {
                        return (
                            <BlogContent key={content.title} content={content}/>
                        )
                    })
                }
                <BlogInfo post={post}/>
                <Footer refValue={footerRef}/>
            </main>
        </>
    )
}
export function getServerSideProps(context: any) {
    return {
      props: {params: context.params}
    }
  }