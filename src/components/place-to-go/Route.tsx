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
   <>
    <div style={{height: 50, overflow: 'hidden', transform: 'translateY(50px)', width: '100%'}} >
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-27.93,7.42 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path>
      </svg>
    </div>  
    <div className={styles.RouteContainer}>
        <div className={'titleSection'} id='map'>
            <h3>RECORRIDO</h3>
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
        </div>    
      </div>
      <div style={{height: 50, overflow: 'hidden', transform: 'translateY(-50px)', width: '100%'}}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg>
      </div>
   </>
    
  )
}

export default Route