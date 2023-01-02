import React from 'react'
import styles from '../../../../styles/Places.module.css'
import { IoLogoWhatsapp } from 'react-icons/io5'
import Link from 'next/link'

const ContactButton = ({footerVisible, whatsAppNumber}: {footerVisible: boolean, whatsAppNumber: string}) => {
  return (
    <Link href={`https://wa.me/${whatsAppNumber}?text=Hola!!%20Quiero%20Anotarme%20Al%20Tour`}>
      <div className={`${styles.ContactButton} ${footerVisible ? styles.ContactButtonAnimate : ''}`}>
        <button><p>Reservar mi Lugar</p><IoLogoWhatsapp/></button>
      </div>
    </Link>
  )
}

export default ContactButton