import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import styles from '../../../styles/Admin.module.css'
import Image from 'next/image'
// import { uploadImage } from '../../../services/cloudinary/handleOnSubmit'
import { Button } from 'primereact/button'
import { handleOnSubmit } from '../../../services/cloudinary/handleOnSubmit'

const PointDialog = ({ showPointDialog, hidePointDialog, point, setPoint } : { showPointDialog: boolean, hidePointDialog: any, point: any, setPoint: any }) => {
    const [submitted, setSubmitted] = useState(false)
    const [image, setImage] = useState('/assets/emptyImage.png')
    const onInputChange = (e: any, name: string) => {
        const val = (e.target && e.target.value) || ''
        let _point = {...point}
        _point[`${name}`] = val

        setPoint(_point)
    }
    function handleOnChange(changeEvent: any) {
        const reader = new FileReader()
        reader.onload = function(onloadEvent){
            setImage(onloadEvent.target?.result)
        }
        reader.readAsDataURL(changeEvent.target.files[0])
    }
    
  return (
    <Dialog visible={showPointDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" onHide={hidePointDialog}>
        <form method='post' onSubmit={async (e)=>{
            setSubmitted(true)
            let _point = {...point}
            _point['imageLink'] = await handleOnSubmit(e)
            setPoint(_point)
            console.log(point)
            }}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <InputText id="name" value={point.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !point.name })} />
                {submitted && !point.name && <small className="p-error">Ingresar Nombre.</small>}
            </div>
            <div className="field">
                <label htmlFor="locationLink">Link Google Maps</label>
                <InputText id="locationLink" value={point.locationLink} onChange={(e) => onInputChange(e, 'locationLink')} required autoFocus className={classNames({ 'p-invalid': submitted && !point.name })} />
                {submitted && !point.locationLink && <small className="p-error">Ingresar Link Google Maps.</small>}
            </div>
            <div className={styles.ImageField}>
                <label htmlFor="inputLogo">
                    Seleccionar Imagen
                    <input id='inputLogo' type="file" name='file' onChange={handleOnChange}/>
                </label>
                <Image src={image} alt={''} height={500} width={500}/>
            </div>
            <Button type='submit'>Guardar</Button>
        </form>
    </Dialog>
  )
}

export default PointDialog