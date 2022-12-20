import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import DestinationCard from './pure/DestinationCard'

const DestinationGrid = () => {
  return (
    <>
      <div className={styles.titleSection}>
        <h2>CONOCÉ</h2>
        <h1>NUESTROS INCREÍBLES</h1>
        <h3>DESTINOS</h3>
        <hr />
      </div>
      <div className={styles.Destination}>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
          <DestinationCard image={'/assets/1.png'} title={'BARILOCHE FREE TOUR'} description={'Su apasionante historia, su arquitectura, cultura y la influencia de los inmigrantes europeos. Caminamos por los barrios del casco histórico.'}/>
      </div>
    </>
  )
}

export default DestinationGrid