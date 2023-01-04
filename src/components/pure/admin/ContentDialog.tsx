import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import styles from '../../../../styles/Admin.module.css'
import Image from 'next/image'
import React from 'react'
import useNewContent from '../../../hooks/admin/useNewContent'

const ContentDialog = ({ showContentDialog, hideContentDialog, setContents } : { showContentDialog: boolean, hideContentDialog: any, setContents: any }) => {
    const { submitted, loading, imageContent, contentItem, handleOnChange, onInputChange, submitForm  } = useNewContent(setContents, hideContentDialog)

  return (
    <Dialog visible={showContentDialog} style={{ margin: '1rem' }} header='Nuevo Párrafo' modal className="p-fluid" onHide={hideContentDialog}>
        <form method='post' onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label htmlFor="title">Subtitulo</label>
                <InputText id="title" value={contentItem.title} onChange={(e) => onInputChange(e, 'title')} required autoFocus className={classNames({ 'p-invalid': submitted && !contentItem.title })} />
                {submitted && !contentItem.title && <small className="p-error">Ingresar Subtitulo.</small>}
            </div>
            <div className="field">
                <label htmlFor="paragraph">Párrafo</label>
                <InputText id="paragraph" value={contentItem.paragraph} onChange={(e) => onInputChange(e, 'paragraph')} required className={classNames({ 'p-invalid': submitted && !contentItem.paragraph })} />
                {submitted && !contentItem.paragraph && <small className="p-error">Ingresar Párrafo.</small>}
            </div>
            <div className={styles.ImageField}>
                <label htmlFor="imageLink2">
                    Seleccionar Imagen
                    <input id='imageLink2' type="file" name='file' onChange={handleOnChange}/>
                </label>
                <Image src={imageContent || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
            </div>
            <Button type='submit' loading={loading} label='Guardar'></Button>
        </form>
    </Dialog>
  )
}

export default ContentDialog