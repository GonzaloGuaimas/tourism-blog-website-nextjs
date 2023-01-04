import React from 'react'
import styles from '../../styles/Home.module.css'

import BlogCard from './pure/BlogCard'
import { useRouter } from 'next/router'
import { IPost } from '../models/Post'
const BlogGrid = ({ posts }: { posts: IPost[] }) => {
  const router = useRouter()
  return (
    <>
      <div className={'titleSection'} id={'blog'}>
        <h2>NUESTRO BLOG</h2>
        <h2>DEL FREE TOUR!</h2>
        <h1>EL DÍA A DÍA</h1>
        <hr />
      </div>
      <div className={styles.Blog} style={{padding: '2rem'}}>
        {
          posts?.map((post: IPost) => {
            return(
              <BlogCard key={post.imageLink} post={post}/>
            )
          })
        }

      </div>
      <button className='Button' onClick={() => {router.push('blog')}}><span>Visitá Nuestro Blog Completo</span></button>
    </>
  )
}

export default BlogGrid