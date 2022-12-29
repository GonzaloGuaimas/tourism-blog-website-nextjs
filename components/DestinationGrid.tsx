import React from 'react'
import { ITour } from '../models/Tour'
import styles from '../styles/Home.module.css'
import DestinationCard from './pure/DestinationCard'

const DestinationGrid = ({tours}: {tours: ITour[]}) => {
  return (
    <>
      <div className={'titleSection'} id={'destination'}>
        <h2>DESCUBRÍ</h2>
        <h1>NUESTRAS EXCURSIONES</h1>
        <hr />
        <p>Reservá ahora mismo tu excursión. <strong>Hacé click en tu Destino!</strong></p>
      </div>
      <div className={styles.Destination}>
          {tours.map((tour: ITour)=> {
            return (
              <DestinationCard key={tour.name} image={tour.coverImageLink} title={tour.name} description={tour.coverDescription}/>
            )
          })}
          <DestinationCard image={'/assets/cover/cafayate.jpg'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/cover/catamarca.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/cover/iguazu.jpg'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/cover/mendoza.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/cover/puertopiramides.jpg'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/cover/rosario.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/cover/salta.jpg'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
      </div>
    </>
  )
}

export default DestinationGrid