import React from 'react'
import styles from '../../../styles/Places.module.css'
import Image from 'next/image'
import { IPoint, ITour } from '../../models/Tour'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Link from 'next/link'
const Route = ({tour}: {tour:  ITour}) => {
  return (
    <div className={styles.RouteContainer}>
        <div className={'titleSection'} id='map'>
            <h3 style={{color: 'black'}}>RECORRIDO</h3>
            <hr />
            <h2>Estos son los puntos que conoceremos</h2>
        </div>
      <div className={styles.Route} id='route'>
        <Swiper spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          {
              tour?.route?.map((point: IPoint) => {
                return( 
                  <SwiperSlide key={point.imageLink}>
                    <Link href={point.locationLink}>
                        <div className={styles.RouteElement}>
                            <Image src={point.imageLink} alt={''} height={500} width={500}/>
                            <div className={styles.RouteInfo}>
                                <p>{point.name}</p>
                                <hr />
                            </div>
                        </div>
                    </Link>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
      </div>    </div>
    
  )
}

export default Route