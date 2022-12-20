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
        <BlogCard image={'/assets/blogExample/1.jpg'} title={'-2°C En Bariloche!!'} subtitle={'Llegó el invierno a nuestra ciudad'} date={'19 dic 22'}/>
        <BlogCard image={'/assets/blogExample/main.jpg'} title={'Este fin de Semana estuvimos Con todo!'} subtitle={'llegaron turistas de todas partes'} date={'19 dic 22'}/>
        <BlogCard image={'/assets/blogExample/main.png'} title={'Que Calor en Catamarca'} subtitle={'a pesar de las altas temperaturas acá estuvimos'} date={'19 dic 22'}/>
      </div>
      <button className={styles.Button}><span>Visitá Nuestro Blog Completo</span></button>
    </>
  )
}

export default BlogGrid