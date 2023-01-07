import React from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import styles from '../../../styles/Admin.module.css'
import Image from 'next/image'
import { Button } from 'primereact/button'
import useNewAward from '../../hooks/admin/useNewAward'

const AwardDialog = ({ showAwardDialog, hideAwardDialog, setAwards, tourName } : { showAwardDialog: boolean, hideAwardDialog: any, setAwards: any, tourName: string }) => {
    const { submitted, loading, image, awardItem, onInputChange, handleOnChange, submitForm  } = useNewAward(setAwards, tourName, hideAwardDialog)
  return (
    <Dialog visible={showAwardDialog} style={{ margin: '1rem' }} header='Nuevo Reconocimiento' modal className="p-fluid" onHide={hideAwardDialog}>
        <form method='post' onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label htmlFor="name">Nombre</label>
                <InputText id="name" value={awardItem.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !awardItem.name })} />
                {submitted && !awardItem.name && <small className="p-error">Ingresar Nombre.</small>}
            </div>
            <div className={styles.ImageField}>
                <label htmlFor="imageLink">
                    Seleccionar Imagen
                    <input id='imageLink' type="file" name='file' onChange={handleOnChange}/>
                </label>
                <Image src={image || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
            </div>
            <Button type='submit' loading={loading} label='Guardar'></Button>
        </form>
    </Dialog>
  )
}

export default AwardDialog