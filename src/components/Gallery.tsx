import React from 'react'
import styles from '../../styles/Home.module.css'

import Image from 'next/image'
import Link from 'next/link'
const Gallery = () => {
  return (
    <div className={styles.Gallery} id={'gallery'}>
        <div className={styles.GalleryElement}>
            <Link href={'tour/asd'}>
                <Image src={'/assets/blogExample/main.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
            </Link>
        </div>
        <div className={styles.GalleryElement}>
            <Link href={'tour/asd'}>
                <Image src={'/assets/blogExample/main.png'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
            </Link>
        </div>
        <div className={styles.GalleryElement}>
            <Link href={'tour/asd'}>
                <Image src={'/assets/blogExample/main.png'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
            </Link>
        </div>
        <div className={styles.GalleryElement}>
            <Link href={'tour/asd'}>
                <Image src={'/assets/blogExample/1.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
            </Link>
        </div>
        <div className={styles.GalleryElement}>
            <Link href={'tour/asd'}>
                <Image src={'/assets/blogExample/main.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
            </Link>
        </div>
        <div className={styles.GalleryElement}>
            <Link href={'tour/asd'}>
                <Image src={'/assets/blogExample/1.jpg'} alt={''} height={500} width={500} className={styles.DestinationImage}/>
            </Link>
        </div>
    </div>
  )
}

export default Gallery