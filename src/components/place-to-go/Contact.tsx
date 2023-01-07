import React from 'react'
import styles from '../../../styles/Places.module.css'
import Link from 'next/link'

const Contact = ({ whatsAppNumber }: { whatsAppNumber: string}) => {
  return (
    <div className={styles.Contact}>
        <div className={'titleSection'} id={'blog'}>
          <h3>RESERVÁ TU LUGAR EN NUESTRO TOUR!</h3>
          <hr />
        </div>
        
        <Link href={`https://wa.me/${whatsAppNumber}?text=Hola!!%20Quiero%20Anotarme%20Al%20Tour`} style={{ width: '100%'}}>
          <button className='Button' style={{ width: '100%'}}><span>Reservar</span> </button>
        </Link>
        <p>Reservá tu lugar vía WhatsApp!</p>
    </div>
  )
}

export default Contact