import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import styles from '../../../styles/Admin.module.css'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { handleOnSubmit } from '../../../services/cloudinary/handleOnSubmit'

const PointDialog = ({ showPointDialog, hidePointDialog, route, setRoute } : { showPointDialog: boolean, hidePointDialog: any, route: any, setRoute: any }) => {
    const defaultPoint = {
        name: '',
        locationLink: '',
        imageLink: ''
      }
    const [submitted, setSubmitted] = useState<any>(false)
    const [image, setImage] = useState<string | undefined>('/assets/emptyImage.png')
    const [point, setPoint] = useState<any>({defaultPoint})

    const onInputChange = (e: any, name: string) => {
        const val = (e.target && e.target.value) || ''
        let _point = {...point}
        _point[`${name}`] = val
        setPoint(_point)
    }
    function handleOnChange(changeEvent: any) {
        const reader = new FileReader()
        reader.onload = function(onloadEvent){
            setImage(onloadEvent.target?.result?.toString())
        }
        reader.readAsDataURL(changeEvent.target.files[0])
    }
    async function submitForm(e: any) {
        setSubmitted(true)
        let _point = {...point}
        _point['imageLink'] = await handleOnSubmit(e)
        setPoint(_point)
        let _route = {...route, point}
        setRoute(_route)
        hidePointDialog()
    }

  return (
    <Dialog visible={showPointDialog} style={{ margin: '1rem' }} header='Nuevo/Modificar Punto' modal className="p-fluid" onHide={hidePointDialog}>
        <form method='post' onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label htmlFor="name">Nombre del Punto</label>
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
                <Image src={image || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
            </div>
            <Button type='submit' label='Guardar'></Button>
        </form>
    </Dialog>
  )
}

export default PointDialog