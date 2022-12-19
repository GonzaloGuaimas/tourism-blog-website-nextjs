import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Delimiter = ({image, title}: {image: string, title: string}) => {
  return (
    <div className={styles.Delimiter}>
        <div style={{height: 50, overflow: 'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#F19705'}}></path></svg></div>
        <div className={styles.DelimiterContent}>
            <h2>{title}</h2>
            <Image src={image} alt={''} height={200} width={200} className={styles.DelimiterImage}/>
        </div>
        <div style={{height: 50, overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-27.93,7.42 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#F19705'}}></path></svg></div>  
    </div>
  )
}

export default Delimiter