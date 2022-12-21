import React from 'react'
import styles from '../../../styles/Places.module.css'
import { ImClock2 } from "react-icons/im"
import { IoFootstepsSharp } from "react-icons/io5"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io5"
import { IoLogoWhatsapp } from "react-icons/io5"
import { IoLocationSharp } from "react-icons/io5"

const AboutCard = ({icon, text}: {icon: any, text: string}) => {
  return (
    <div className={styles.AboutCard}>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default AboutCard