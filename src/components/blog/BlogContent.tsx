import React from 'react'
import styles from '../../../styles/Home.module.css'

import Image from 'next/image'
import { IContent } from '../../models/Post'

export const BlogContent = ({ content }: { content: IContent }) => {
  return (
    <div className={styles.BlogContent}>
        <div>
            <h2>{content?.title}</h2>
            <br />
            <p>{content?.paragraph.replace(/\\n/g, '\n')}</p>
        </div>
        {content?.imageLink !== undefined ? <Image src={content?.imageLink} alt={''} height={1080} width={1080} className={styles.BlogImage}/> : null}
    </div>
  )
}