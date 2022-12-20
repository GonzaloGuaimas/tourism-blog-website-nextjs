import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const About = () => {
    const aboutText1 = 'Los Free Tours o Free Walking Tours son paseos que se hacen caminando por las ciudades más importantes del mundo acompañado por un Guía de turismo local. Son aptos para todas las edades y se realizan en grupos reducidos. Tienen una duración de entre 2 a 3 horas.'
    const aboutText2 = 'Si bien son conocidos internacionalmente como “Free”, estos recorridos se realizan en base a pagos libres y voluntarios. Al finalizar el tour cada participante decide individualmente el importe que considere justo abonar. La traducción al español es diversa ya que, si bien "Free" puede significar "gratis" también significa "libre". En este caso, "sentirse libre" de abonar lo que decida el viajero al finalizar el paseo, basado en la experiencia y satisfacción recibida.'
    const aboutText3 = 'Para quien visite Argentina, reunimos los Free Tours de las ciudades con atractivos turísticos más destacados del país. Estos Walking Tours tienen una impronta histórica y cultural donde cada Guía hace hincapié en los monumentos arquitectónicos, hechos históricos, estilo de vida, curiosidades, secretos y personajes de la historia. En cada lugar también se juega con la geo localización y se interpreta la geografía de forma didáctica y sencilla.'
  return (
    <>
        <div className={styles.titleSection} style={{ marginTop: '2rem' }}>
            <h2>CONOCENOS MÁS</h2>
            <h1>¿QUÉ ES UN FREE TOUR?</h1>
            <hr />
            <h2>ACERCA DE NOSOTROS</h2>
        </div>
  
        <div className={styles.About}>
            <p>{aboutText1}</p>
            <p>{aboutText2}</p>
            <p>{aboutText3}</p>
        </div>
    </>
   
  )
}

export default About