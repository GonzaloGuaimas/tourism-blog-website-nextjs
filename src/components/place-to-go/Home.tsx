import React from 'react'
import styles from '../../../styles/Places.module.css'
import { ITour } from '../../models/Tour'

const Home = ({ tour }: { tour: ITour }) => {
  return (
    <div className={styles.Home} id={'home'} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${tour?.gallery[0].imageLink})`}}>
        <div className={styles.HomeInfo}>
            <h2>{tour?.name}</h2>
            <hr />
            <p>{tour?.shortDescription}</p>
        </div>
    </div>
  )
}

export default Home