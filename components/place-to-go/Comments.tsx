import React from 'react'
import styles from '../../styles/Places.module.css'
import CommentCard from '../pure/place-to-go/CommentCard'

const Comments = () => {
  return (
    <>
        <div className={'titleSection'} id={'blog'}>
          <h3>Opiniones del Tour</h3>
          <hr />
        </div>
        <div className={styles.Comments}>
            <CommentCard name={'Gonzalo'} date={'Dic 2022'} country={'Francia'} comment={'Cesar ha sido fenomenal: puntual, preciso, preparado, simpatico, disponible y super agradable. Tiene todo lo que tiene que tener un guía, ha sido especial. Le hemos hecho un montón de preguntas "fuera" del tour y ha sido exaustivo y ha respondido sin ninguna duda y con miles de detalles y recursos.'}/>
            <CommentCard name={'Gonzalo'} date={'Dic 2022'} country={'Francia'} comment={'Cesar ha sido fenomenal: puntual, preciso, preparado, simpatico, disponible y super agradable. Tiene todo lo que tiene que tener un guía, ha sido especial. Le hemos hecho un montón de preguntas "fuera" del tour y ha sido exaustivo y ha respondido sin ninguna duda y con miles de detalles y recursos.'}/>
            <CommentCard name={'Gonzalo'} date={'Dic 2022'} country={'Francia'} comment={'Cesar ha sido fenomenal: puntual, preciso, preparado, simpatico, disponible y super agradable. Tiene todo lo que tiene que tener un guía, ha sido especial. Le hemos hecho un montón de preguntas "fuera" del tour y ha sido exaustivo y ha respondido sin ninguna duda y con miles de detalles y recursos.'}/>
        </div>
    </>
  )
}

export default Comments