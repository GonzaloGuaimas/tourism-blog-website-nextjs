import React from 'react'
import styles from '../../styles/Home.module.css'

import BlogCard from './pure/BlogCard'
import { useRouter } from 'next/router'
const BlogGrid = () => {
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
        <BlogCard image={'/assets/blogExample/1.jpg'} title={'-2°C En Bariloche!!'} subtitle={'Llegó el invierno a nuestra ciudad'} date={'19 dic 22'} tourName={'asdsadsa'} tourLogo={'/assets/blogExample/1.jpg'}/>
        <BlogCard image={'/assets/blogExample/main.jpg'} title={'Este fin de Semana estuvimos Con todo!'} subtitle={'llegaron turistas de todas partes'} date={'19 dic 22'} tourName={'asdasd'} tourLogo={'/assets/blogExample/1.jpg'}/>
        <BlogCard image={'/assets/blogExample/main.png'} title={'Que Calor en Catamarca'} subtitle={'a pesar de las altas temperaturas acá estuvimos'} date={'19 dic 22'} tourName={'asdsad'} tourLogo={'/assets/blogExample/1.jpg'}/>
        <BlogCard image={'/assets/blogExample/main.jpg'} title={'Este fin de Semana estuvimos Con todo!'} subtitle={'llegaron turistas de todas partes'} date={'19 dic 22'} tourName={'asdasd'} tourLogo={'/assets/blogExample/1.jpg'}/>
        <BlogCard image={'/assets/blogExample/1.jpg'} title={'-2°C En Bariloche!!'} subtitle={'Llegó el invierno a nuestra ciudad'} date={'19 dic 22'} tourName={'asdsadsa'} tourLogo={'/assets/blogExample/1.jpg'}/>
        <BlogCard image={'/assets/blogExample/main.jpg'} title={'Este fin de Semana estuvimos Con todo!'} subtitle={'llegaron turistas de todas partes'} date={'19 dic 22'} tourName={'asdasd'} tourLogo={'/assets/blogExample/1.jpg'}/>

      </div>
      <button className='Button' onClick={() => {router.push('blog')}}><span>Visitá Nuestro Blog Completo</span></button>
    </>
  )
}

export default BlogGrid