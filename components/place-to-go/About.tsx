import React from 'react'
import styles from '../../styles/Places.module.css'
import AboutCard from '../pure/place-to-go/AboutCard'
import { IoFootstepsSharp } from 'react-icons/io5'
import { ImClock2 } from 'react-icons/im'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoLogoFacebook } from 'react-icons/io5'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { IoLocationSharp } from 'react-icons/io5'
const About = () => {
  return (
    <div>
      <div style={{height: 70, overflow: 'hidden', width: '100%', transform: 'translateY(-60px)'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg></div>
      <div className={styles.About} id='about'>
        <h3 className={styles.AboutH3}>Descubrí las <strong>Actividades</strong> que podes realizar en este <strong>Free Tour</strong></h3>
        <p className={styles.AboutP}>El recorrido comienza con una introducción sobre la ubicación geográfica y varias curiosidades del gran lago, luego nos lleva por el casco histórico, a conocer el pasado de San Carlos de Bariloche a través de su gente.Cómo influyeron las comunidades europeas, especialmente la Alemana, entendiendo la idiosincrasia de los habitantes de principios del siglo 20 hasta nuestros días.Recorremos sus calles para conocer las edificaciones más icónicas de la ciudad, sus variados estilos, la importancia que tuvieron y cómo se fueron transformando con el transcurso del tiempo.Conoceremos cómo se fue formando culturalmente la ciudad, cuáles fueron las principales influencias y como de un pueblo agrícola ganadero se fue transformando en el destino turístico más importante del sur Argentino.Mitos, Leyendas y verdades sobre el pasado de la Alemania nazi de la postguerra en la ciudad, enriqueciendo las miradas del participante a través de los diferentes lugares documentados.Un paseo necesario, para comenzar a comprender lo que la mayoría de los visitantes la denominan la JOYA PATAGONICA</p>
        <div className='titleSection'style={{ marginTop: '2rem' }} >
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
        <p>información adicional: *Valor pago libre (Al finalizar cada asistente entrega al guía la cantidad que considere, de acuerdo a la satisfacción obtenida) *Ropa adecuada para las condiciones del clima y calzado cómodo *Apto para todas las edades | Incluido *Caminata *Guías | No Incluido *Extras de ningún tipo</p>
      </div>
    </div>
   
  )
}

export default About