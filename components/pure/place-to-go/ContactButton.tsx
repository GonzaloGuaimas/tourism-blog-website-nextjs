import React from 'react'
import styles from '../../../styles/Places.module.css'
import { IoLogoWhatsapp } from "react-icons/io5"

const ContactButton = () => {
  return (
    <div className={styles.ContactButton}>
        <button><p>Quiero Participar del Free Tour</p><IoLogoWhatsapp/></button>
    </div>
  )
}

export default ContactButton