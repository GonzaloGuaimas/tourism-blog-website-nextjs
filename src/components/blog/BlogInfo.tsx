import React from 'react'
import styles from '../../../styles/Home.module.css'

import Image from 'next/image'

export const BlogInfo = () => {
  return (
    <div className={styles.BlogDetailDate}>
        <div>
            <Image src={'/assets/blogExample/1.jpg'} alt={''} height={250} width={250} className={styles.AutorImage}/>
            <h3>Free Tour Bariloche</h3>
        </div>
        <hr />
        <p>22 Marzo 2022</p>
    </div>
  )
}
