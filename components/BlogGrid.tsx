import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import BlogCard from './pure/BlogCard'
const BlogGrid = () => {
  return (
    <div className={styles.Blog}>
        <BlogCard image={'/assets/1.png'} title={'un titulo'} subtitle={'subtitulo'} date={'19 dic 22'}/>
        <BlogCard image={'/assets/1.png'} title={'un titulo'} subtitle={'subtitulo'} date={'19 dic 22'}/>
        <BlogCard image={'/assets/1.png'} title={'un titulo'} subtitle={'subtitulo'} date={'19 dic 22'}/>
    </div>
  )
}

export default BlogGrid