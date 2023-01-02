import React from 'react'
import styles from '../../../styles/Places.module.css'

const Home = ({placeName, description}: {placeName: string, description: string}) => {
  return (
    <div className={styles.Home} id={'home'}>
        <div className={styles.HomeInfo}>
            <h2>{placeName}</h2>
            <hr />
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Home