import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const BlogCard = ({ image, title, subtitle, date }: {image: string, title: string, subtitle: string, date: string}) => {
  return (
    <div className={styles.BlogCard}>
        <Image src={image} alt={''} height={250} width={250} className={styles.BlogImage}/>
        
        <div className={styles.BlogInfo}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div>
              <p>{date}</p>
              <div>
                <p>BarilocheFreeTour</p>
                <Image src={image} alt={''} height={250} width={250} className={styles.AutorImage}/>
              </div>
            </div>
            <hr />
            
        </div>
    </div>
  )
}

export default BlogCard