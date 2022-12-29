import React from 'react'
import styles from '../../../styles/Places.module.css'

const AboutCard = ({title, icon, text}: {title: string, icon: any, text: string}) => {
  return (
    <div className={styles.AboutCard}>
        {icon}
        <p><strong>{title}</strong> {text}</p>
    </div>
  )
}

export default AboutCard