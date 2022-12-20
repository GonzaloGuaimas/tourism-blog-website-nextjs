import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className={styles.Gallery} id={'gallery'}>
        <div className={styles.GalleryElement}>
            <Image src={'/assets/blogExample/main.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
        </div>
        <div className={styles.GalleryElement}>
            <Image src={'/assets/blogExample/main.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
        </div>
        <div className={styles.GalleryElement}>
            <Image src={'/assets/blogExample/main.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
        </div>
        <div className={styles.GalleryElement}>
            <Image src={'/assets/blogExample/main.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
        </div>
    </div>
  )
}

export default Gallery