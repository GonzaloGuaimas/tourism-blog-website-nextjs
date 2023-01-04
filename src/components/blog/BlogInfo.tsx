import React from 'react'
import styles from '../../../styles/Home.module.css'

import Image from 'next/image'
import { IPost } from '../../models/Post'

export const BlogInfo = ({ post }: { post: IPost}) => {
  return (
    <div className={styles.BlogDetailDate}>
        <div>
            <Image src={'/assets/blogExample/1.jpg'} alt={''} height={250} width={250} className={styles.AutorImage}/>
            <h3>{post?.tourName}</h3>
        </div>
        <hr />
        <p>{post?.date.toString().split('T')[0]}</p>
    </div>
  )
}
