import React from 'react'
import styles from '../../../../styles/Places.module.css'
import Image from 'next/image'

const CommentCard = ({name, date, comment, country}: {name: string, date: string, comment: string, country: string}) => {
  return (
    <div className={styles.CommentCard}>
        <div className={styles.CommentCardProfile}>
            <Image src={'/assets/avatar.png'} alt={''} height={250} width={250}/>
            <div className={styles.CommentCardProfileData}>
                <h4>{name}</h4>
                <p>{country}</p>
            </div>
            <p style={{ alignSelf: 'center'}}>{date}</p>
        </div>
        <hr />
        <p>{comment}</p>
    </div>
  )
}

export default CommentCard