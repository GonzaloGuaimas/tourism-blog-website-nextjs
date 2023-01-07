import React from 'react'
import styles from '../../../styles/Home.module.css'

import Image from 'next/image'
import { useRouter } from 'next/router'

const DestinationCard = ({ image, logo, title, description }: {image: string, logo: string, title: string, description: string}) => {
  const router = useRouter()
  return (
    <div className={styles.DestinationCard}>
        <Image src={image} alt={''} height={250} width={250} className={styles.DestinationImage}/>
        <div className={styles.DestinationCardInfo}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => {router.push(`tour/${title}`)}}>Más Info del Tour</button>
        </div>
        <div className={styles.TourInfo}>
          <p>{title}</p>
        </div>
        <div className={styles.BookingNow}>
          <p>Reservá Ahora</p>
        </div>
        <div className={styles.TourImage}>
          <Image src={logo} alt={''} height={250} width={250}/>
        </div>
    </div>
  )
}

export default DestinationCard