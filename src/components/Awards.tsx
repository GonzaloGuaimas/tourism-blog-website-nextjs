import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { IAward } from '../models/Award'

const Awards = ({ awards }: { awards: IAward[] }) => {
  let triplicateAwards = awards.concat(awards)
  return (
    <div className={styles.Awards}>
        <div className={'titleSection'} id={'blog'}>
            <h2>NUESTROS</h2>
            <h1>RECONOCIMIENTOS</h1>
            <hr />
        </div>
        <div className={styles.AwardsSlider}>
          {
            triplicateAwards?.map((award: IAward) => {
              return(
                <Image key={award.imageLink} src={award.imageLink} alt={''} height={250} width={250} className={styles.BlogImage}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default Awards