import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarItems}>
        <Link href={'/'}>Inicio</Link>
        <Link href={'/'}>Destinos</Link>
        <Link href={'/'}>Novedades</Link>
      </div>
      <div>
        <Image src={'/assets/logo.png'} alt={''} height={45} width={350} className={styles.navBarImage}/>
      </div>
      <div className={styles.navBarMenu}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </div>
  )
}
