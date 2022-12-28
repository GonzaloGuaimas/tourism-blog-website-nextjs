import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
// import Link from 'next/link'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { useRouter } from 'next/router'
import { IoLogOut } from 'react-icons/io5'
import { IoArrowBack } from 'react-icons/io5'

export const NavBar = ({action, type}: { action: any, type: string}) => {
  const router = useRouter()
  const [active, setActive] = useState('navBarMenu')
  const [icon, setIcon] = useState('navBarToggler')
  const navToggle = () => {
    if (active === 'navBarMenu') {
      setActive('navBarMenu navBarMenuActive')
    } else setActive('navBarMenu')
    if (icon === 'navBarToggler') {
      setIcon('navBarToggler toggle')
    } else setIcon('navBarToggler')
  }
  const placeNavBar = () => {
    return (
      <>
        <label onClick={() => action()}>
          <IoArrowBack className={styles.NavBarIcon}/>
        </label>
        <Image src={'/assets/logoPositive.png'} alt={''} height={45} width={350} className={styles.navBarImage} onClick={() => {router.back()}}/>
        <div className={active}>
            <Link to='home' smooth offset={-100} duration={900} >
              <h3>INICIO</h3>
              <hr />
            </Link>
            <Link to='destination' smooth offset={-100} duration={900} >
              <h3>ACERCA DE</h3>
              <hr />
            </Link>
            <Link to='gallery' smooth offset={-100} duration={900} >
              <h3>GALERÍA</h3>
              <hr />
            </Link>
            <Link to='about' smooth offset={-80} duration={900} >
              <h3>MAPA</h3>
              <hr />
            </Link>
            <Link to='' smooth offset={-80} duration={900} >
              <h3>CONTACTO</h3>
              <hr />
            </Link>
        </div>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </>
    )
  }
  const adminNavBar = () => {
    return (
      <>
        <Image src={'/assets/logoPositive.png'} alt={''} height={45} width={350} className={styles.navBarImage} onClick={() => {router.back()}}/>
        <label onClick={() => action()}>
          <IoLogOut className={styles.NavBarIcon}/>
        </label>
      </>
    )
  }
  const blogNavBar = () => {
    return (
      <>
        <label onClick={() => action()}>
          <IoArrowBack className={styles.NavBarIcon}/>
        </label>
        <Image src={'/assets/logoPositive.png'} alt={''} height={45} width={350} className={styles.navBarImage} onClick={() => {router.back()}}/>  
      </>
    )
  }
  const indexNavBar = () => {
    return (
      <>
        <Image src={'/assets/logoPositive.png'} alt={''} height={45} width={350} className={styles.navBarImage} onClick={() => {router.back()}}/>
        <div className={active}>
            <Link to='home' smooth offset={-100} duration={900} >
              <h3>INICIO</h3>
              <hr />
            </Link>
            <Link to='destination' smooth offset={-100} duration={900} >
              <h3>DESTINOS</h3>
              <hr />
            </Link>
            <Link to='blog' smooth offset={-100} duration={900} >
              <h3>BLOG</h3>
              <hr />
            </Link>
            <Link to='gallery' smooth offset={-100} duration={900} >
              <h3>GALERÍA</h3>
              <hr />
            </Link>
            <Link to='about' smooth offset={-80} duration={900} >
              <h3>ACERCA DE</h3>
              <hr />
            </Link>
        </div>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </>
    )
  }
  return (
    <nav className={styles.navBar}>
      {type === 'index' ? indexNavBar() : null}
      {type === 'blog' ? blogNavBar() : null}
      {type === 'admin' ? adminNavBar() : null}
      {type === 'place' ? placeNavBar() : null}
    </nav>
  )
}
