import React from 'react'
import styles from '../../../styles/Places.module.css'
import { ITour } from '../../models/Tour'
const Map = ({tour}: {tour: ITour}) => {
  
  return (
    <div className={styles.MapContainer}>  
        <div className={'titleSection'} id='map'>
            <h3 style={{color: 'black'}}>PUNTO DE ENCUENTRO</h3>
            <hr />
            <h2>{tour?.meetingPoint}</h2>
        </div>
        <div className={styles.Map}>
            <div className={styles.MapElement}>
                <iframe src={tour?.meetingPointLink?.split('"')[1]} width="400" height="300" style={{ border: 0}} loading="lazy"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Map