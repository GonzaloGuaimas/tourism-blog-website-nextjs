import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const HomeComponent = () => {
  return (
    <div className={styles.Home}>
        <Image src={'/assets/1.png'} alt={''} height={788} width={940} className={styles.HomeImage}/>
        <div className={styles.HomeText}>
          <h2>Descubrí Argentina con los mejores guías de cada destino.</h2>
          <p>
            Argentina es uno de los países con más diversidad geográfica del mundo. Su extensión incluye distintos paisajes, variedad de climas, distintas costumbres y en consecuencia experiencias muy variadas. Nuestra propuesta es que conozcas cada destino caminando junto a guías expertos que te darán un profundo conocimiento sobre cada ciudad y los mejores consejos para seguir viajando.
          </p>
          <p>
            Encontrá en Free Tours Argentina toda la información de cada destino: Ciudades, horarios, punto de encuentros y consejos de viaje.
          </p>
          <button><span>Descubrir Nuestros Destinos</span></button>
        </div>
    </div>
  )
}

export default HomeComponent