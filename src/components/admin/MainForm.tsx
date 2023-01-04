import React, { useState } from 'react'
import styles from '../../../styles/Admin.module.css'
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
import { IGallery, ITour } from '../../models/Tour'
import { useMutation } from 'react-query'
import { updateTour } from '../../services/tours/updateTour'

export const MainForm = ({tour}: { tour: ITour}) => {
  const defaultValues = {
    logoImageLink: tour.logoImageLink,
    name: tour.name,
    password: tour.password,

    coverImageLink: tour.coverImageLink,
    coverDescription: tour.coverDescription,

    shortDescription: tour.shortDescription,
    longerDescription: tour.longerDescription,
    extraInfo: tour.extraInfo,
    
    meetingPoint: tour.meetingPoint,
    meetingPointLink: tour.meetingPointLink,

    schedules: tour.schedules,
    duration: tour.duration,
    instagramUser: tour.instagramUser,
    facebookUser: tour.facebookUser,
    whatsAppNumber: tour.whatsAppNumber,
    gallery: [],
    route: []
  }
  {/*PointDialog params */}
  const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues })

  const [showPointDialog, setShowPointDialog] = useState(false)
  const [showGalleryDialog, setShowGalleryDialog] = useState(false)

  const [route, setRoute] = useState(tour.route.map((element) => element))
  const [gallery, setGallery] = useState(tour.gallery.map((element) => element))
  //const [showMessage, setShowMessage] = useState(false)
  const [logoImage, setLogoImage] = useState<string | undefined>(defaultValues.logoImageLink)
  const [coverImage, setCoverImage] = useState<string | undefined>(defaultValues.coverImageLink)

  const [loading, setLoading] = useState(false)

  const mutation = useMutation(
    (data: ITour) => updateTour(data),
        {
            onSuccess: () => {
                setLoading(false)
                console.log('Update Data')
            },
        }
    )

  const onSubmit = async (data: any) => {
    if(logoImage !== defaultValues.logoImageLink){
        data.logoImageLink = await uploadOne(logoImage)
    }else{
        data.logoImageLink = defaultValues.logoImageLink
    }
    if(coverImage !== defaultValues.coverImageLink){
        data.coverImageLink = await uploadOne(coverImage)
    }else{
        data.coverImageLink = defaultValues.coverImageLink
    }
    data.route = route
    data.gallery = gallery
    setLoading(true)
    mutation.mutate(data)
    // await createTour(data)
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

  const removeGalleryItem = (gallery: IGallery) => {
    setGallery((prev) => prev.filter((prevItem) => prevItem.imageLink !== gallery.imageLink))
  }

  return (
    <>
      <div className={styles.MainInfo}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

            <div className={styles.ImageField}>
              <label htmlFor="inputLogo">
                Seleccionar Logo
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
                Seleccionar Principal
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
                    <Column body={(rowData) => (<Button type='button' className={styles.RowButton} icon="pi pi-trash" onClick={() => console.log('delete', rowData.id)} />)}/>
                    <Column body={(rowData) => (<Button type='button' className={styles.RowButton} icon="pi pi-pencil" onClick={() => console.log('delete', rowData.id)} />)}/>
                </DataTable>
            </div>

            <hr />
           
            <div className={styles.DataTableField}>
                <div>
                    <h2>Galería</h2>
                    <Button className={styles.TableButton} type='button' label="Nueva Imagen" onClick={() => setShowGalleryDialog(true)}/>
                </div>
                <DataTable value={gallery} size="small" responsiveLayout="scroll">
                    {/* <Column field="uploadDate" header="Fecha"></Column> */}
                    <Column field="title" header="Titulo"></Column>
                    <Column field="imageLink" header="Imagen" 
                    body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                    <Column body={(rowData) => (<Button className={styles.RowButton} type='button' icon="pi pi-trash" onClick={() => removeGalleryItem(rowData)} />)}/>
                </DataTable>
            </div>
            <br />
            <Button type="submit" loading={loading} label="Guardar" className="mt-2" />
            <p>Después de realizar los cambios, Guardalos!</p>
        </form>
      </div>
      <PointDialog showPointDialog={showPointDialog} hidePointDialog={() => {setShowPointDialog(false)}} setRoute={setRoute}/>
      <GalleryDialog showGalleryDialog={showGalleryDialog} hideGalleryDialog={() => {setShowGalleryDialog(false)}} setGallery={setGallery} tourName={tour.name}/>
    </>
  )
}
