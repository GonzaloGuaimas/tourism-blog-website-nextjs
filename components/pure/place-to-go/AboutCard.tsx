import React from 'react'
import styles from '../../../styles/Places.module.css'

const AboutCard = ({icon, text}: {icon: any, text: string}) => {
  return (
    <div className={styles.AboutCard}>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default AboutCard