import React from 'react'
import styles from '../../styles/Home.module.css'

export const Header = () => {
  return (
    <>
      <div className={styles.Header} id={'home'}>
      </div>
      <div style={{height: 70, overflow: 'hidden', width: '100%', transform: 'translateY(-70px)'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg></div>
    </>

  )
}