import React from 'react'
import styles from '../../../styles/Home.module.css'

import Image from 'next/image'

const BlogCard = ({ image, title, subtitle, date, tourName, tourLogo }: {image: string, title: string, subtitle: string, date: string, tourName: string, tourLogo: string}) => {
  return (
    <div className={styles.BlogCard}>
        <Image src={image} alt={''} height={1080} width={1080} className={styles.BlogImage}/>
        <div className={styles.BlogCardDate}>
          <p>{date}</p>
        </div>

        <div className={styles.BlogInfo}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <hr />
            <div className={styles.BlogCardAuthor}>
              <p>{tourName}</p>
              <Image src={tourLogo} alt={''} height={250} width={250} className={styles.AutorImage}/>
            </div>
        </div>
    </div>
  )
}

export default BlogCard