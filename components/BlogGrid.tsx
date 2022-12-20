import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import BlogCard from './pure/BlogCard'
const BlogGrid = () => {
  return (
    <>
      <div className={styles.titleSection}>
        <h2>NUESTRO BLOG</h2>
        <h2>DEL FREE TOUR!</h2>
        <h1>EL DÍA A DÍA</h1>
        <hr />
      </div>
      <div className={styles.Blog}>
        <BlogCard image={'/assets/1.png'} title={'un titulo'} subtitle={'subtitulo'} date={'19 dic 22'}/>
        <BlogCard image={'/assets/1.png'} title={'un titulo'} subtitle={'subtitulo'} date={'19 dic 22'}/>
        <BlogCard image={'/assets/1.png'} title={'un titulo'} subtitle={'subtitulo'} date={'19 dic 22'}/>
      </div>
    </>
  )
}

export default BlogGrid