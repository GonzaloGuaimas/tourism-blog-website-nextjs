import React from 'react'
import styles from '../../../styles/Home.module.css'
import { IPost } from '../../models/Post'


export const Header = ({ post }: { post: IPost }) => {
  return (
    <>
      <div className={styles.Header} style={{ backgroundImage: `linear-gradient(rgb(44 44 42 / 52%), rgb(0 0 0 / 37%)),url(${post?.imageLink})` }}>
        <div className={styles.HeaderText}>
          <h2>{post?.title}</h2>
          <hr />
          <p>{post?.subtitle}</p>
        </div>
      </div>
      <div style={{height: 70, overflow: 'hidden', width: '100%', transform: 'translateY(-70px)'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg></div>
    </>

  )
}