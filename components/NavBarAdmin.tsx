import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoLogOut } from 'react-icons/io5'

export const NavBar = ({showIcon, logOut}: {showIcon: boolean, logOut: any}) => {
  const router = useRouter()
    return (
    <nav className={styles.navBar}>
      <Image src={'/assets/logoPositive.png'} alt={''} height={45} width={350} className={styles.navBarImage} onClick={() => {router.back()}}/>
      {showIcon ? <IoLogOut className={styles.NavBarIcon} onClick={() => logOut()}/> : null}
    </nav>
  )
}
