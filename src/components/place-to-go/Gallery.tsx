import React from 'react'
import styles from '../../../styles/Places.module.css'
import Image from 'next/image'
import { IGallery, ITour } from '../../models/Tour'

const Gallery = ({tour}: {tour:  ITour}) => {
  return (
    <>
      <div style={{height: 70, overflow: 'hidden', width: '100%', zIndex:'10', transform: 'translateY(10px)'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-27.93,7.42 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg></div>  
      <div className={styles.Gallery} id='gallery'>
        <div className={styles.GallerySlider}>
            {
              tour?.gallery.map((gallery: IGallery) => {
                return( 
                  <Image key={gallery.imageLink} src={gallery.imageLink} alt={''} height={1080} width={1080} className={styles.BlogImage}/> 
                )
              })
            }
        </div>
      </div>
      <div style={{height: 70, overflow: 'hidden', width: '100%', transform: 'translateY(-120px)'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg></div>
    </>
    
  )
}

export default Gallery