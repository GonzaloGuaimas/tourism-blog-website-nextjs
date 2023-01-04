import React from 'react'
import { ITour } from '../models/Tour'
import styles from '../../styles/Home.module.css'

import DestinationCard from './pure/DestinationCard'

const DestinationGrid = ({tourQuery}: {tourQuery: any}) => {
  return (
    <>
      <div className={'titleSection'} id={'destination'}>
        <h2>DESCUBRÍ</h2>
        <h1>NUESTRAS EXCURSIONES</h1>
        <hr />
        <p>Reservá ahora mismo tu excursión. <strong>Hacé click en tu Destino!</strong></p>
      </div>
      <div className={styles.Destination}>
          {tourQuery.isLoading ? <h2>¡¡Cargando Free Tours!!</h2> :
            tourQuery?.data?.map((tour: ITour)=> {
              return (
                <DestinationCard key={tour.name} image={tour.coverImageLink} title={tour.name} description={tour.coverDescription}/>
              )
            })
          }
      </div>
    </>
  )
}

export default DestinationGrid