import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const DestinationCard = ({ image, title, description }: {image: string, title: string, description: string}) => {
  return (
    <div className={styles.DestinationCard}>
        <Image src={image} alt={''} height={250} width={250} className={styles.DestinationImage}/>
        <div className={styles.DestinationCardInfo}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Más Info</button>
        </div>
        
    </div>
  )
}

export default DestinationCard