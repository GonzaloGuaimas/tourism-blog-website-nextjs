import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <Image src={'/assets/logoNegative.png'} alt={''} height={45} width={350} className={styles.FooterImage}/>
        <a href="https://www.instagram.com/omegaa.si/"><p>Desarrollado por Omega</p></a>
    </div>
  )
}

export default Footer