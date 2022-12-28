import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export const BlogContent = () => {
  return (
    <div className={styles.BlogContent}>
        <div>
            <h2>titulo asdsa</h2>
            <p>parrafoas dsajdklasjdklnaslkdnajskl dlas ndlajknaslndkl</p>
        </div>
        <Image src={'/assets/blogExample/1.jpg'} alt={''} height={1080} width={1080} className={styles.BlogImage}/>
    </div>
  )
}