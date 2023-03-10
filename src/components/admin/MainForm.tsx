import React, { useRef, useState } from 'react'
import styles from '../../../styles/Admin.module.css'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { classNames } from 'primereact/utils'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import Image from 'next/image'
import PointDialog from './PointDialog'
import GalleryDialog from './GalleryDialog'
import { uploadOne } from '../../services/cloudinary/uploadOne'
import { IComment, IGallery, IPoint, ITour } from '../../models/Tour'
import { useMutation } from 'react-query'
import { updateTour } from '../../services/tours/updateTour'
import { Toast } from 'primereact/toast'
import useScreenWidth from '../../hooks/useScreenWidth'
import { Accordion, AccordionTab } from 'primereact/accordion'

export const MainForm = ({tour}: { tour: ITour}) => {
  const defaultValues = {
    logoImageLink: tour.logoImageLink,
    name: tour.name,

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
  const [comment, setComment] = useState(tour.comments.map((element) => element))
  const [logoImage, setLogoImage] = useState<string | undefined>(defaultValues.logoImageLink)
  const [coverImage, setCoverImage] = useState<string | undefined>(defaultValues.coverImageLink)
  const { isMobile } = useScreenWidth() 

  const [loading, setLoading] = useState(false)
  const toast = useRef<any>()
  const mutation = useMutation(
    (data: ITour) => updateTour(data),
        {
            onSuccess: () => {
                setLoading(false)
                toast.current.show({severity: 'success', summary: 'Realizado', detail: 'Tour Actualizado!'})
            },
            onError: () => {
                setLoading(false)
                toast.current.show({severity: 'error', summary: 'Error', detail: 'Ocurri?? un Error Inesperado'})
            }
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
    data.comments = comment
    setLoading(true)
    mutation.mutate(data)
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
    toast.current.show({severity: 'error', summary: 'Realizado', detail: 'Elemento Eliminado'})
  }
  const removePointItem = (route: IPoint) => {
    setRoute((prev) => prev.filter((prevItem) => prevItem.imageLink !== route.imageLink))
    toast.current.show({severity: 'error', summary: 'Realizado', detail: 'Elemento Eliminado'})
  }
  const removeCommentItem = (comment: IComment) => {
    setComment((prev) => prev.filter((prevItem) => prevItem.date !== comment.date))
    toast.current.show({severity: 'error', summary: 'Realizado', detail: 'Elemento Eliminado'})
  }
  return (
    <>
      <div className={styles.MainInfo}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">

            <div className={styles.ImageField}>
              <label htmlFor="inputLogo">
                Seleccionar Logo
                <input id='inputLogo' type="file" accept=".png, .jpg, .jpeg" name='logoImageLink' onChange={handleOnChange}/>
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

            {/* <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="password" control={control} rules={{ required: 'Ingrese Contrase??a.' }} render={({ field, fieldState }) => (
                        <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Contrase??a*</label>
                </span>
                {errors['password'] && <small className="p-error">{errors['password'].message}</small>}
            </div> */}

            <div className={styles.ImageField}>
              <label htmlFor="inputCover">
                Seleccionar Principal
                <input id='inputCover' type="file" accept=".png, .jpg, .jpeg" name='coverImageLink' onChange={handleOnChange}/>
              </label>
              <Image src={coverImage || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
            </div>
            
            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="coverDescription" control={control} rules={{ required: 'Ingrese Descripci??n' }} render={({ field, fieldState }) => (
                        <InputTextarea id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} autoResize />
                    )} />
                    <label htmlFor="coverDescription" className={classNames({ 'p-error': errors.name })}>Descripci??n Imagen Portada*</label>
                </span>
                {errors['coverDescription'] && <small className="p-error">{errors['coverDescription'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="shortDescription" control={control} rules={{ required: 'Ingrese Descripci??n.' }} render={({ field, fieldState }) => (
                        <InputTextarea id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} autoResize />
                    )} />
                    <label htmlFor="shortDescription" className={classNames({ 'p-error': errors.name })}>Descripci??n Corta Encabezado*</label>
                </span>
                {errors['shortDescription'] && <small className="p-error">{errors['shortDescription'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="longerDescription" control={control} rules={{ required: 'Ingrese Descripci??n.' }} render={({ field, fieldState }) => (
                        <InputTextarea id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} autoResize />
                        )} />
                    <label htmlFor="longerDescription" className={classNames({ 'p-error': errors.name })}>Descripci??n Larga Encabezado*</label>
                </span>
                {errors['longerDescription'] && <small className="p-error">{errors['longerDescription'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="extraInfo" control={control} rules={{ required: 'Ingrese Informaci??n Extra.' }} render={({ field, fieldState }) => (
                        <InputTextarea id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} autoResize />
                        )} />
                    <label htmlFor="extraInfo" className={classNames({ 'p-error': errors.name })}>Informaci??n Extra del Tour*</label>
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
                    <Controller name="duration" control={control} rules={{ required: 'Ingrese Duraci??n.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="duration" className={classNames({ 'p-error': errors.name })}>Duraci??n*</label>
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
                    <Controller name="whatsAppNumber" control={control} rules={{ required: 'Ingrese N??mero WhatsApp.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="whatsAppNumber" className={classNames({ 'p-error': errors.name })}>N??mero WhatsApp*</label>
                </span>
                {errors['whatsAppNumber'] && <small className="p-error">{errors['whatsAppNumber'].message}</small>}
            </div>

            <hr />
            <Accordion>
                <AccordionTab header='Recorrido'>
                    <div className={styles.DataTableField}>
                        <div>
                            <h2>Recorrido</h2>
                            <Button className={styles.TableButton} type='button' label="Nuevo Punto" onClick={() => setShowPointDialog(true)}/>
                        </div>
                        <DataTable value={route} size="small" responsiveLayout="scroll">
                            <Column field="name" header="Nombre"></Column>
                            <Column field="imageLink" header="Imagen" 
                            body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                            <Column body={(rowData) => (<Button type='button' className={styles.RowButton} icon="pi pi-trash" onClick={() => removePointItem(rowData)} />)}/>
                        </DataTable>
                    </div>
                </AccordionTab>
                <AccordionTab header='Galer??a'>
                    <div className={styles.DataTableField}>
                        <div>
                            <h2>Galer??a</h2>
                            <Button className={styles.TableButton} type='button' label="Nueva Imagen" onClick={() => setShowGalleryDialog(true)}/>
                        </div>
                        <DataTable value={gallery} size="small" responsiveLayout="scroll">
                            <Column field="uploadDate" header="Fecha" body={(rowData) => {return rowData.uploadDate.toString().split('T')[0]}}></Column>
                            <Column field="title" header="Titulo"></Column>
                            <Column field="imageLink" header="Imagen" 
                            body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                            <Column body={(rowData) => (<Button className={styles.RowButton} type='button' icon="pi pi-trash" onClick={() => removeGalleryItem(rowData)} />)}/>
                        </DataTable>
                    </div>
                </AccordionTab>
                <AccordionTab header='Comentarios'>
                    <div className={styles.DataTableField}>
                        <div>
                            <h2>Comentarios</h2>
                        </div>
                        <DataTable value={comment} size="small" responsiveLayout="stack" breakpoint="960px">
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="date" header="Fecha" body={(rowData) => {return rowData.date.toString().split('T')[0]}}></Column>
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="name" header="Nombre"></Column>
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="country" header="Pa??s/Provincia"></Column>
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="comment" header="Comentario"></Column>
                            <Column body={(rowData) => (<Button className={styles.RowButton} type='button' icon="pi pi-trash" onClick={() => removeCommentItem(rowData)} />)}/>
                        </DataTable>
                    </div>
                </AccordionTab>
            </Accordion>
            
            <br />
            <div className={styles.saveButtonContainer}>
                <Button type="submit" loading={loading} label="Guardar" className="mt-2" />
                <p>Despu??s de realizar los cambios, Guardalos!</p>
            </div>
            
        </form>
      </div>
      <PointDialog showPointDialog={showPointDialog} hidePointDialog={() => {setShowPointDialog(false)}} setRoute={setRoute} toast={toast}/>
      <GalleryDialog showGalleryDialog={showGalleryDialog} hideGalleryDialog={() => {setShowGalleryDialog(false)}} setGallery={setGallery} tourName={tour.name} toast={toast}/>
      <Toast position="bottom-right" ref={toast}/>
    </>
  )
}
