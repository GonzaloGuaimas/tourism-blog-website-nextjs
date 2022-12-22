import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Awards = () => {
  return (
    <div className={styles.Awards}>
        <div className={'titleSection'} id={'blog'}>
            <h2>NUESTRAS INSIGNIAS</h2>
            <h1>RECONOCIMIENTOS</h1>
            <hr />
            <h2>DE NUESTROS TOURS</h2>
        </div>
        <div className={styles.AwardsSlider}>
            <Image src={'/assets/awards/trip2018.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
            <Image src={'/assets/awards/trip2019.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
            <Image src={'/assets/awards/trip2020.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
            <Image src={'/assets/awards/trip2022.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
            <Image src={'/assets/awards/trip2018.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
            <Image src={'/assets/awards/trip2019.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
            <Image src={'/assets/awards/trip2020.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
            <Image src={'/assets/awards/trip2022.png'} alt={''} height={250} width={250} className={styles.BlogImage}/>
        </div>
    </div>
  )
}

export default Awards