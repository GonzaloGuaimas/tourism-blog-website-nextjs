import React, { useState } from 'react'
import styles from '../../../styles/Places.module.css'
import Image from 'next/image'

const SlideShow = ({images}: {images: string[]}) => {
    const [index, setIndex] = useState(0)
    const next = () => {
      if (index === images.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(images.length - 1)
      } else {
        setIndex(index - 1)
      }
    }
  
    return (
        <div className={styles.slideshow}>
            <Image src={images[index]} alt={''} height={500} width={350}/>
            <div className={styles.actions}>
                <div className={styles.area} onClick={prev}></div>
                <div className={styles.area} onClick={next}></div>
            </div>
        </div>
    )
}

export default SlideShow