import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Link href={'/'}>Inicio</Link>
      <Link href={'/'}>Destinos</Link>
      <Link href={'/'}>Novedades</Link>
    </div>
  )
}
