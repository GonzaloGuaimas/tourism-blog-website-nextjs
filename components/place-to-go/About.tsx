import React from 'react'
import styles from '../../styles/Places.module.css'
import AboutCard from '../pure/place-to-go/AboutCard'

const About = () => {
  return (
    <div className={styles.About} id='about'>
        <h2>Descubrí las <strong>Actividades</strong> que podes realizar en este <strong>Free Tour</strong></h2>
        <p>El recorrido comienza con una introducción sobre la ubicación geográfica y varias curiosidades del gran lago, luego nos lleva por el casco histórico, a conocer el pasado de San Carlos de Bariloche a través de su gente.Cómo influyeron las comunidades europeas, especialmente la Alemana, entendiendo la idiosincrasia de los habitantes de principios del siglo 20 hasta nuestros días.Recorremos sus calles para conocer las edificaciones más icónicas de la ciudad, sus variados estilos, la importancia que tuvieron y cómo se fueron transformando con el transcurso del tiempo.Conoceremos cómo se fue formando culturalmente la ciudad, cuáles fueron las principales influencias y como de un pueblo agrícola ganadero se fue transformando en el destino turístico más importante del sur Argentino.Mitos, Leyendas y verdades sobre el pasado de la Alemania nazi de la postguerra en la ciudad, enriqueciendo las miradas del participante a través de los diferentes lugares documentados.Un paseo necesario, para comenzar a comprender lo que la mayoría de los visitantes la denominan la JOYA PATAGONICA</p>
        <div className={styles.AboutGrid}>
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
        </div>
    </div>
  )
}

export default About