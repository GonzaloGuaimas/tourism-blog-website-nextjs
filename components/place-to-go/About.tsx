import React from 'react'
import styles from '../../styles/Places.module.css'
import AboutCard from '../pure/place-to-go/AboutCard'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { IoLogoInstagram } from 'react-icons/io5'
import { AiOutlineFacebook } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import { IoFlagOutline } from 'react-icons/io5'
import { RxCounterClockwiseClock } from 'react-icons/rx'
import { ITour } from '../../models/Tour'

const About = ({tour}: {tour: ITour}) => {
  return (
    <div>
      <div style={{height: 70, overflow: 'hidden', width: '100%', transform: 'translateY(-60px)'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width:'100%'}}><path d="M-29.62,118.92 C149.99,150.00 315.18,48.86 517.21,118.92 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff'}}></path></svg></div>
      <div className={styles.About} id='about'>
        <h3 className={styles.AboutH3}>Descubrí las <strong>Actividades</strong> que podes realizar en este <strong>Free Tour</strong></h3>
        <p className={styles.AboutP}>{tour?.longerDescription}</p>
        <div className='titleSection'style={{ marginTop: '2rem' }} >
            <h1>INFORMACIÓN ÚTIL</h1>
            <hr />
        </div>
        <div className={styles.AboutGrid}>
            <AboutCard text={tour?.schedules} icon={<IoCalendarNumberOutline className={styles.AboutCardIcon}/>} title={'Horarios'} />
            <AboutCard text={tour?.duration} icon={<RxCounterClockwiseClock className={styles.AboutCardIcon} />} title={'Duración'}/>
            <AboutCard text={tour?.instagramUser} icon={<IoLogoInstagram className={styles.AboutCardIcon} />} title={'Instagram'}/>
            <AboutCard text={tour?.facebookUser} icon={<AiOutlineFacebook className={styles.AboutCardIcon} />} title={'Facebook'}/>
            <AboutCard text={tour?.whatsAppNumber} icon={<IoLogoWhatsapp className={styles.AboutCardIcon} />} title={'WhatsApp'}/>
            <AboutCard text={tour?.meetingPoint} icon={<IoLocationOutline style={{ fontSize: '3rem'}} className={styles.AboutCardIcon} />} title={'Punto Encuentro'}/>
            <AboutCard text={'Español / Ingles'} icon={<IoFlagOutline style={{ fontSize: '2rem'}} className={styles.AboutCardIcon} />} title={'Idioma/s'}/>
        </div>
        <p className={styles.AboutP}>{tour?.extraInfo}</p>
      </div>
    </div>
   
  )
}

export default About