import React from 'react'
import styles from '../../../styles/Home.module.css'

import Image from 'next/image'
import { IPost } from '../../models/Post'
import { useQuery } from 'react-query'
import { getTourLogo } from '../../services/tours/getTourLogo'
import { getTours } from '../../services/tours/getTours'

export const BlogInfo = ({ post }: { post: IPost}) => {
  const tourQuery = useQuery('tours', getTours)
  const logo = getTourLogo(tourQuery, post.tourName)
  return (
    <div className={styles.BlogDetailDate}>
        <div>
            <Image src={logo} alt={''} height={250} width={250} className={styles.AutorImage}/>
            <h3>{post?.tourName}</h3>
        </div>
        <hr />
        <p>{post?.date.toString().split('T')[0]}</p>
    </div>
  )
}
