import React from 'react'
import Image from 'next/image'
import styles from '../../../styles/Admin.module.css'

const Header = ({ tourName, tourlogo }: {tourName: string, tourlogo: string}) => {
  return (
    <div className={styles.Header}>
        <div>
          <h2>Bienvenido <strong>{tourName}</strong></h2>
          <hr />
          <h3>A su administrador de Contenido</h3>
        </div>
        <Image src={tourlogo || '/assets/emptyImage.png' } alt={''} height={250} width={250}/>
    </div>
  )
}

export default Header