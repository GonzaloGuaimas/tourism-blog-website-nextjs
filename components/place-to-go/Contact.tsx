import React from 'react'
import styles from '../../styles/Places.module.css'
import { IoLogoWhatsapp } from 'react-icons/io5'

const Contact = () => {
  return (
    <div className={styles.Contact}>
        <IoLogoWhatsapp className={styles.AboutCardIcon} style={{ fontSize: '5rem'}}/>
        <button className='Button'><span>Pedí +Info por WhatsApp</span> </button>
        <p>Queres participar de este Free Tour? Hace click acá</p>
    </div>
  )
}

export default Contact