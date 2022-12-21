import React from 'react'
import styles from '../../styles/Places.module.css'
import { IoLocationSharp } from "react-icons/io5"

const Map = ({refValue, mapVisible}: {refValue: any, mapVisible: boolean}) => {
  return (
    <div className={styles.MapContainer} ref={refValue}>  
        <div className={`titleSection ${mapVisible ? 'titleSectionAnimate' : ''}`} style={{ marginTop: '2rem' }} id='map'>
            <IoLocationSharp className={styles.AboutCardIcon} style={{ fontSize: '8rem'}}/>
            <h2 style={{color: 'black'}}>PUNTO DE ENCUENTRO</h2>
            <hr />
        </div>
        <div className={`${styles.Map} ${mapVisible ? styles.MapAnimate : ''}`}>
            <div className={styles.MapElement}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.020644064762!2d-71.3143718!3d-41.13407529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b0c2fdf9c4b%3A0xa63b892449ab76ff!2sSan%20Mart%C3%ADn%20398%2C%20R8400%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1657042826572!5m2!1ses-419!2sar" width="400" height="300" style={{ border: 0}} loading="lazy"></iframe>
            </div>
            <p>información adicional: *Valor pago libre (Al finalizar cada asistente entrega al guía la cantidad que considere, de acuerdo a la satisfacción obtenida) *Ropa adecuada para las condiciones del clima y calzado cómodo *Apto para todas las edades | Incluido *Caminata *Guías | No Incluido *Extras de ningún tipo</p>
        </div>
    </div>
  )
}

export default Map