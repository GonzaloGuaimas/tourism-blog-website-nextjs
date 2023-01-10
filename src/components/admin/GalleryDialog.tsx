import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import styles from '../../../styles/Admin.module.css'
import Image from 'next/image'
import { Button } from 'primereact/button'
import { handleOnSubmit } from '../../services/cloudinary/handleOnSubmit'

const PointDialog = ({ showGalleryDialog, hideGalleryDialog, setGallery, tourName, toast } : { showGalleryDialog: boolean, hideGalleryDialog: any, setGallery: any, tourName: string, toast: any }) => {
    const defaultGallery = {
        title: '',
        uploadDate: '',
        imageLink: '',
        tourName: ''
      }
    const [submitted, setSubmitted] = useState<any>(false)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<string | undefined>('/assets/emptyImage.png')
    const [galleryItem, setGalleryItem] = useState<any>(defaultGallery)
    const [imgValidator, setImgValidator] = useState(false)

    const onInputChange = (e: any, name: string) => {
        const val = (e.target && e.target.value) || ''
        let _galleryItem = {...galleryItem}
        _galleryItem[`${name}`] = val
        setGalleryItem(_galleryItem)
    }
    function handleOnChange(changeEvent: any) {
        const reader = new FileReader()
        reader.onload = function(onloadEvent){
            onloadEvent.target?.result === undefined ? setImgValidator(false) : setImgValidator(true)
            setImage(onloadEvent.target?.result?.toString())
        }
        reader.readAsDataURL(changeEvent.target.files[0])
    }
    async function submitForm(e: any) {
        e.preventDefault()
        if(imgValidator){
            setLoading(true)
            setSubmitted(true)
            let _galleryItem = {...galleryItem}
            _galleryItem['tourName'] = tourName
            _galleryItem['uploadDate'] = new Date()
            _galleryItem['imageLink'] = await handleOnSubmit(e)
            setGalleryItem(_galleryItem)
            setGallery((prev: any) => [...prev, _galleryItem])
            toast.current.show({severity: 'success', summary: 'Realizado', detail: 'Elemento Agregado'})
            setLoading(false)
            setImgValidator(false)
            setImage('/assets/emptyImage.png')
            setGalleryItem(defaultGallery)
            hideGalleryDialog()
        } else {
            toast.current.show({severity: 'error', summary: 'Error', detail: 'Seleccione Imagen'})
        }
        
    }

  return (
    <Dialog visible={showGalleryDialog} style={{ margin: '1rem' }} header='Nueva Imagen Galería' modal className="p-fluid" onHide={hideGalleryDialog}>
        <form method='post' onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label htmlFor="title">Título</label>
                <InputText id="title" value={galleryItem.title} onChange={(e) => onInputChange(e, 'title')} required autoFocus className={classNames({ 'p-invalid': submitted && !galleryItem.title })} />
                {submitted && !galleryItem.title && <small className="p-error">Ingresar Título.</small>}
            </div>
            <div className={styles.ImageField}>
                <label htmlFor="imageLink">
                    Seleccionar Imagen
                    <input id='imageLink' type="file" accept=".png, .jpg, .jpeg" name='file' onChange={handleOnChange}/>
                </label>
                <Image src={image || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
            </div>
            <Button type='submit' loading={loading} label='Guardar'></Button>
        </form>
    </Dialog>
  )
}

export default PointDialog