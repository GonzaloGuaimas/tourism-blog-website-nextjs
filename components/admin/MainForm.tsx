import React, { useState } from 'react'
import styles from '../../styles/Admin.module.css'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import Image from 'next/image'
import PointDialog from '../pure/admin/PointDialog'
import GalleryDialog from '../pure/admin/GalleryDialog'
import { uploadOne } from '../../services/cloudinary/uploadOne'

export const MainForm = () => {
  const defaultValues = {
    logoImageLink: '',
    name: '',
    password: '',

    coverImageLink: '',
    coverDescription: '',

    shortDescription: '',
    longerDescription: '',
    extraInfo: '',
    
    meetingPoint: '',
    meetingPointLink: '',

    schedules: '',
    duration: '',
    instagramUser: '',
    facebookUser: '',
    whatsAppNumber: '',
    gallery: [],
    route: []
  }
  {/*PointDialog params */}
  const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues })

  const [showPointDialog, setShowPointDialog] = useState(false)
  const [showGalleryDialog, setShowGalleryDialog] = useState(false)

  const [route, setRoute] = useState([])
  const [gallery, setGallery] = useState([])
  //const [showMessage, setShowMessage] = useState(false)
  const [logoImage, setLogoImage] = useState<string | undefined>('/assets/emptyImage.png')
  const [coverImage, setCoverImage] = useState<string | undefined>('/assets/emptyImage.png')

  const onSubmit = async (data: any) => {
    data.logoImageLink = await uploadOne(logoImage)
    data.coverImageLink = await uploadOne(coverImage)
    data.route = route
    data.gallery = gallery
    console.log(data)
    // setShowMessage(true)
  }

  function handleOnChange(changeEvent: any) {
    const reader = new FileReader()
    reader.onload = function(onloadEvent){
        let image = onloadEvent.target?.result?.toString()
        changeEvent.target.id === 'inputLogo'
        ? setLogoImage(image)
        : setCoverImage(image)
    }
    reader.readAsDataURL(changeEvent.target.files[0])
  }

  return (
    <>
      <div className={styles.MainInfo}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

            <div className={styles.ImageField}>
              <label htmlFor="inputLogo">
                Seleccionar Imagen
                <input id='inputLogo' type="file" name='logoImageLink' onChange={handleOnChange}/>
              </label>
              <Image src={logoImage || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="name" control={control} rules={{ required: 'Ingrese Nombre del Tour.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Nombre del Tour*</label>
                </span>
                {errors['name'] && <small className="p-error">{errors['name'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="password" control={control} rules={{ required: 'Ingrese Contraseña.' }} render={({ field, fieldState }) => (
                        <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Contraseña*</label>
                </span>
                {errors['password'] && <small className="p-error">{errors['password'].message}</small>}
            </div>

            <div className={styles.ImageField}>
              <label htmlFor="inputCover">
                Seleccionar Imagen
                <input id='inputCover' type="file" name='coverImageLink' onChange={handleOnChange}/>
              </label>
              <Image src={coverImage || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="coverDescription" control={control} rules={{ required: 'Ingrese Descripción' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="coverDescription" className={classNames({ 'p-error': errors.name })}>Descripción Imagen Portada*</label>
                </span>
                {errors['coverDescription'] && <small className="p-error">{errors['coverDescription'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="shortDescription" control={control} rules={{ required: 'Ingrese Descripción.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="shortDescription" className={classNames({ 'p-error': errors.name })}>Descripción Corta Encabezado*</label>
                </span>
                {errors['shortDescription'] && <small className="p-error">{errors['shortDescription'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="longerDescription" control={control} rules={{ required: 'Ingrese Descripción.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="longerDescription" className={classNames({ 'p-error': errors.name })}>Descripción Larga Encabezado*</label>
                </span>
                {errors['longerDescription'] && <small className="p-error">{errors['longerDescription'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="extraInfo" control={control} rules={{ required: 'Ingrese Información Extra.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="extraInfo" className={classNames({ 'p-error': errors.name })}>Información Extra del Tour*</label>
                </span>
                {errors['extraInfo'] && <small className="p-error">{errors['extraInfo'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="meetingPoint" control={control} rules={{ required: 'Ingrese Punto de Encuentro.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="meetingPoint" className={classNames({ 'p-error': errors.name })}>Nombre Punto de Encuentro*</label>
                </span>
                {errors['meetingPoint'] && <small className="p-error">{errors['meetingPoint'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="meetingPointLink" control={control} rules={{ required: 'Ingrese Link Google Maps Punto de Encuentro.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="meetingPointLink" className={classNames({ 'p-error': errors.name })}>Link Google Maps Punto de Encuentro*</label>
                </span>
                {errors['meetingPointLink'] && <small className="p-error">{errors['meetingPointLink'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="schedules" control={control} rules={{ required: 'Ingrese Horarios.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="schedules" className={classNames({ 'p-error': errors.name })}>Horarios*</label>
                </span>
                {errors['schedules'] && <small className="p-error">{errors['schedules'].message}</small>}
            </div>

            
            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="duration" control={control} rules={{ required: 'Ingrese Duración.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="duration" className={classNames({ 'p-error': errors.name })}>Duración*</label>
                </span>
                {errors['duration'] && <small className="p-error">{errors['duration'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="instagramUser" control={control} rules={{ required: 'Ingrese Usuario Instagram.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="instagramUser" className={classNames({ 'p-error': errors.name })}>Usuario Instagram*</label>
                </span>
                {errors['instagramUser'] && <small className="p-error">{errors['instagramUser'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="facebookUser" control={control} rules={{ required: 'Ingrese Usuario Facebook.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="facebookUser" className={classNames({ 'p-error': errors.name })}>Usuario Facebook*</label>
                </span>
                {errors['facebookUser'] && <small className="p-error">{errors['facebookUser'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="whatsAppNumber" control={control} rules={{ required: 'Ingrese Número WhatsApp.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="whatsAppNumber" className={classNames({ 'p-error': errors.name })}>Número WhatsApp*</label>
                </span>
                {errors['whatsAppNumber'] && <small className="p-error">{errors['whatsAppNumber'].message}</small>}
            </div>

            <hr />
            
            <div className={styles.DataTableField}>
                <div>
                    <h2>Recorrido</h2>
                    <Button className={styles.TableButton} type='button' label="Nuevo Punto" onClick={() => setShowPointDialog(true)}/>
                </div>
                <DataTable value={route} size="small" responsiveLayout="scroll">
                    <Column field="name" header="Nombre"></Column>
                    <Column field="locationLink" header="Mapa"></Column>
                    <Column field="imageLink" header="Imagen" 
                    body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                    <Column body={(rowData) => (<Button type='button' icon="pi pi-trash" onClick={() => console.log('delete', rowData.id)} />)}/>
                    <Column body={(rowData) => (<Button type='button' icon="pi pi-pencil" onClick={() => console.log('delete', rowData.id)} />)}/>
                </DataTable>
            </div>

            <hr />
           
            <div className={styles.DataTableField}>
                <div>
                    <h2>Galería</h2>
                    <Button className={styles.TableButton} type='button' label="Nueva Imagen" onClick={() => setShowGalleryDialog(true)}/>
                </div>
                <DataTable value={gallery} size="small" responsiveLayout="scroll">
                    <Column field="uploadDate" header="Fecha"></Column>
                    <Column field="userRegisterId" header="Usuario"></Column>
                    <Column field="imageLink" header="Imagen" 
                    body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                    <Column body={(rowData) => (<Button type='button' icon="pi pi-trash" onClick={() => console.log('delete', rowData.id)} />)}/>
                </DataTable>
            </div>
            <br />
            <Button type="submit" label="Guardar" className="mt-2" />
        </form>
      </div>
      <PointDialog showPointDialog={showPointDialog} hidePointDialog={() => {setShowPointDialog(false)}} setRoute={setRoute}/>
      <GalleryDialog showGalleryDialog={showGalleryDialog} hideGalleryDialog={() => {setShowGalleryDialog(false)}} setGallery={setGallery}/>
    </>
  )
}
