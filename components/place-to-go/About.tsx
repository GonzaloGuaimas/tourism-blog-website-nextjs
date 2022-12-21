import React from 'react'
import styles from '../../styles/Places.module.css'
import AboutCard from '../pure/place-to-go/AboutCard'
import { IoFootstepsSharp } from "react-icons/io5"
import { ImClock2 } from "react-icons/im"
import { IoLogoInstagram } from "react-icons/io5"
import { IoLogoFacebook } from "react-icons/io5"
import { IoLogoWhatsapp } from "react-icons/io5"
import { IoLocationSharp } from "react-icons/io5"
const About = () => {
  return (
    <div className={styles.About} id='about'>
        <h2>Descubrí las <strong>Actividades</strong> que podes realizar en este <strong>Free Tour</strong></h2>
        <p>El recorrido comienza con una introducción sobre la ubicación geográfica y varias curiosidades del gran lago, luego nos lleva por el casco histórico, a conocer el pasado de San Carlos de Bariloche a través de su gente.Cómo influyeron las comunidades europeas, especialmente la Alemana, entendiendo la idiosincrasia de los habitantes de principios del siglo 20 hasta nuestros días.Recorremos sus calles para conocer las edificaciones más icónicas de la ciudad, sus variados estilos, la importancia que tuvieron y cómo se fueron transformando con el transcurso del tiempo.Conoceremos cómo se fue formando culturalmente la ciudad, cuáles fueron las principales influencias y como de un pueblo agrícola ganadero se fue transformando en el destino turístico más importante del sur Argentino.Mitos, Leyendas y verdades sobre el pasado de la Alemania nazi de la postguerra en la ciudad, enriqueciendo las miradas del participante a través de los diferentes lugares documentados.Un paseo necesario, para comenzar a comprender lo que la mayoría de los visitantes la denominan la JOYA PATAGONICA</p>
        <div className='titleSection'style={{ marginTop: '2rem' }}>
            <h1>INFORMACIÓN ÚTIL</h1>
            <hr />
        </div>
        <div className={styles.AboutGrid}>
            <AboutCard text={'Lunes a Sábados 09:45hs'} icon={<IoFootstepsSharp className={styles.AboutCardIcon}/>}/>
            <AboutCard text={'Lunes a Sábados 09:45hs'} icon={<ImClock2 className={styles.AboutCardIcon}/>}/>
            <AboutCard text={'Lunes a Sábados 09:45hs'} icon={<IoLogoInstagram className={styles.AboutCardIcon}/>}/>
            <AboutCard text={'Lunes a Sábados 09:45hs'} icon={<IoLogoFacebook className={styles.AboutCardIcon}/>}/>
            <AboutCard text={'Lunes a Sábados 09:45hs'} icon={<IoLogoWhatsapp className={styles.AboutCardIcon}/>}/>
            <AboutCard text={'Lunes a Sábados 09:45hs'} icon={<IoLocationSharp className={styles.AboutCardIcon}/>}/>
        </div>
    </div>
  )
}

export default About