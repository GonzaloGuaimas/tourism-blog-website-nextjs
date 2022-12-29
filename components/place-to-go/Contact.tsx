import React from 'react'
import styles from '../../styles/Places.module.css'

const Contact = () => {
  return (
    <div className={styles.Contact}>
        <button className='Button' style={{ width: '100%'}}><span>Reservar</span> </button>
        <p>Reservá tu lugar vía WhatsApp!</p>
    </div>
  )
}

export default Contact