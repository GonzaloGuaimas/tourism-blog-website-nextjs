import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const NavBar = () => {
  const [active, setActive] = useState("navBarMenu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "navBarMenu") {
      setActive("navBarMenu nav__active");
    } else setActive("navBarMenu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={styles.navBar}>
      <Image src={'/assets/logo.png'} alt={''} height={45} width={350} className={styles.navBarImage}/>
      <div className={active}>
          <Link href={'/'}>
            <h3>INICIO</h3>
            <hr />
          </Link>
          <Link href={'/'}>
            <h3>DESTINOS</h3>
            <hr />
          </Link>
          <Link href={'/'}>
            <h3>BLOG</h3>
            <hr />
          </Link>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}
