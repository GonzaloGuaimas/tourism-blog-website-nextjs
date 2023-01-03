import React from 'react'
import styles from '../../styles/Home.module.css'

import Image from 'next/image'
import Link from 'next/link'
import { ITour } from '../models/Tour'

const Gallery = ({ tours }: { tours: ITour[]}) => {
  return (
    <div className={styles.Gallery} id={'gallery'}>
        {
            tours?.map((tour: ITour) => {
                return (
                    <div key={tour?.name} className={styles.GalleryElement}>
                        <Link href={'tour/'+tour?.name}>
                            <Image src={tour?.gallery[0].imageLink} alt={''} height={500} width={500} className={styles.DestinationImage}/>
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Gallery