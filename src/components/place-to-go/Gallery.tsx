import React from 'react'
import styles from '../../../styles/Places.module.css'
import Image from 'next/image'
import { IGallery, ITour } from '../../models/Tour'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Gallery = ({tour}: {tour:  ITour}) => {
  return (
    <>
      <div className={styles.Gallery} id='gallery'>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 1500, disableOnInteraction: false, }} pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
          {
              tour?.gallery?.map((gallery: IGallery) => {
                return( 
                  <SwiperSlide key={gallery.imageLink}>
                    <Image  src={gallery.imageLink} alt={''} height={1080} width={1080} className={styles.BlogImage}/> 
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
      </div>    </>
    
  )
}

export default Gallery