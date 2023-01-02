import React from 'react'
import styles from '../../../../styles/Places.module.css'
import Link from 'next/link'

const AboutCard = ({title, icon, text, link}: {title: string, icon: any, text: string, link: string | undefined}) => {
  return (
    <Link href={link != undefined ? link : '#about'}>
       <div className={styles.AboutCard}>
        {icon}
        <p><strong>{title}</strong> {text}</p>
      </div>
    </Link>
  )
}

export default AboutCard