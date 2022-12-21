import React, { useEffect, useState } from 'react'
import styles from '../../styles/Places.module.css'
import SlideShow from '../pure/place-to-go/SlideShow'

const Gallery = () => {

  return (
    <>
      <div style={{height: 50, overflow: 'hidden', width: '100%', transform: 'translateY(-70px)'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-27.93,7.42 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#F19705'}}></path></svg></div>  
      <div className={styles.Gallery} id='gallery'>
        <SlideShow 
        images={['/assets/blogExample/main.png', '/assets/blogExample/main.jpg']}
        />
      </div>
      <div style={{height: 70, overflow: 'hidden', width: '100%', transform: 'translateY(-70px)'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg></div>
    </>
    
  )
}

export default Gallery