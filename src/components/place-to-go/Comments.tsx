import React, { useState } from 'react'
import styles from '../../../styles/Places.module.css'
import { IComment, ITour } from '../../models/Tour'
import CommentCard from '../pure/place-to-go/CommentCard'
import CommentDialog from '../pure/place-to-go/CommentDialog'

const Comments = ({ tour }: { tour: ITour}) => {
  const [showCommentDialog, setShowCommentDialog] = useState(false)
  return (
    <>
        <div className={'titleSection'} id={'blog'}>
          <h3>Opiniones del Tour</h3>
          <hr />
        </div>
        <div className={styles.Comments}>
          {
            tour?.comments.map((comment: IComment) => {
              return(
                <CommentCard key={comment?.name} name={comment?.name} date={comment?.date.toString().split('T')[0]} country={comment?.country} comment={comment?.comment}/>
              )
            })
          }
        </div>
        <button className='Button' onClick={() => setShowCommentDialog(true)}><span>Agregar Opinión</span></button>
        <CommentDialog tour={tour} showCommentDialog={showCommentDialog} hideCommentDialog={() => setShowCommentDialog(false)}/>
    </>
  )
}

export default Comments