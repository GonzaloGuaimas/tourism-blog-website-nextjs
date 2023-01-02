import React from 'react'
import styles from '../../styles/Home.module.css'

import { Link } from 'react-scroll'

const HomeComponent = () => {
  return (
    <div className={styles.Home} id={'home'}>
        <div className={styles.HomeText}>
          <h2>Descubrí Argentina.</h2>
          <h2>Con los mejores guías de cada destino.</h2>
          <p>
            Encontrá en Free Tours Argentina toda la información de cada destino: Ciudades, horarios, punto de encuentros y consejos de viaje.
          </p>
          <Link to='destination' smooth offset={-100} duration={900} >
            <button className='Button'><span>Descubrir Nuestros Destinos</span></button>
          </Link>
        </div>
    </div>
  )
}

export default HomeComponent