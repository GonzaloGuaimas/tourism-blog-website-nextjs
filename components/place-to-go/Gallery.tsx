import React, { useEffect, useState } from 'react'
import styles from '../../styles/Places.module.css'
import SlideShow from '../pure/place-to-go/SlideShow'

const Gallery = () => {

  return (
    <div className={styles.Gallery} id='gallery'>
        <SlideShow 
        images={['/assets/blogExample/main.png', '/assets/blogExample/main.jpg']}
        />
    </div>
  )
}

export default Gallery