import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


const Footer = ({refValue}: {refValue: any}) => {

  return (
    <>
      <div style={{height: 50, overflow: 'hidden', width:'100%', transform: 'translateY(2px)'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#FE5500'}}></path></svg></div>
      <div className={styles.Footer} ref={refValue} >
        <Image src={'/assets/logoPositive.png'} alt={''} height={45} width={350} className={styles.FooterImage}/>
        <hr />
        <a href="https://www.instagram.com/omegaa.si/"><p>Desarrollado por Omega</p></a>
        <div className={styles.FooterLegal}>
          <div>
            <a>Condiciones Generales</a>
            <a>Politica de Privacidad</a>
            <a>Cookies</a>
            <a>Aviso Legal</a>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Footer