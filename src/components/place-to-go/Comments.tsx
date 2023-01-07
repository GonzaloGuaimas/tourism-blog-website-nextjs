import React, { useState } from 'react'
import styles from '../../../styles/Places.module.css'
import { IComment, ITour } from '../../models/Tour'
import CommentCard from '../pure/place-to-go/CommentCard'
import CommentDialog from './CommentDialog'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import useScreenWidth from '../../hooks/useScreenWidth'

const Comments = ({ tour }: { tour: ITour}) => {
  const [showCommentDialog, setShowCommentDialog] = useState(false)
  const { isMobile } = useScreenWidth() 
  return (
    <>
        <div className={'titleSection'} id={'blog'}>
          <h3>Opiniones del Tour</h3>
          <hr />
        </div>
        <Swiper slidesPerView={isMobile ? 1 : 3} pagination={{clickable: true}} modules={[Pagination]} className="mySwiper" style={{ height: '40vh'}}>
          <div className={styles.Comments}>
          {
            tour?.comments.map((comment: IComment) => {
              return(
                <SwiperSlide key={comment?.name}>
                <CommentCard  name={comment?.name} date={comment?.date.toString().split('T')[0]} country={comment?.country} comment={comment?.comment}/>
                </SwiperSlide>
              )
            })
          }
          </div>
        </Swiper>
        <button className='Button' onClick={() => setShowCommentDialog(true)}><span>Agregar Opinión</span></button>
        <CommentDialog tour={tour} showCommentDialog={showCommentDialog} hideCommentDialog={() => setShowCommentDialog(false)}/>
    </>
  )
}

export default Comments