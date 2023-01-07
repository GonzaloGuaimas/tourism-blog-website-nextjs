import React from 'react'
import styles from '../../../styles/Home.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { IPost } from '../../models/Post'
import { getTours } from '../../services/tours/getTours'
import { getTourLogo } from '../../services/tours/getTourLogo'
import { useQuery } from 'react-query'

const BlogCard = ({ post }: { post: IPost}) => {
  const tourQuery = useQuery('tours', getTours)
  const logo = getTourLogo(tourQuery, post.tourName)
  return (
    <Link href={'/blog/'+post?.title}>
       <div className={styles.BlogCard}>
        <Image src={post?.imageLink} alt={''} height={1080} width={1080} className={styles.BlogImage}/>
        <div className={styles.BlogCardDate}>
          <p>{post?.date.toString().split('T')[0]}</p>
        </div>

        <div className={styles.BlogInfo}>
            <h3>{post?.title}</h3>
            <h4>{post?.subtitle}</h4>
            <hr />
            <div className={styles.BlogCardAuthor}>
              <p>{post?.tourName}</p>
              {tourQuery.isLoading ? null : <Image src={logo} alt={''} height={250} width={250} className={styles.AutorImage}/> }
            </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard