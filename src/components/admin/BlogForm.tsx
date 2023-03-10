import React, { useRef, useState } from 'react'
import ContentDialog from './ContentDialog'
import styles from '../../../styles/Admin.module.css'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Button } from 'primereact/button'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { IContent, IPost } from '../../models/Post'
import useNewPosts from '../../hooks/admin/useNewPosts'
import { ITour } from '../../models/Tour'
import useDeletePost from '../../hooks/admin/useDeletePost'
import { Toast } from 'primereact/toast'
import { Accordion, AccordionTab } from 'primereact/accordion'
import useScreenWidth from '../../hooks/useScreenWidth'

const BlogForm = ({ postsData, tour }: { postsData: IPost[], tour: ITour}) => {
    const defaultValues = {
        title: '',
        subtitle: '',
        imageLink: '',
        updateDate: '',
        date: '',
        tourName: '',
        content: []
      }
    const { isMobile } = useScreenWidth() 
    const [showContentDialog, setShowContentDialog] = useState(false)
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues })
    const toast = useRef<any>()
    const { setContents, contents, image, loading, onSubmit, handleOnChange } = useNewPosts(tour, reset, defaultValues, toast)
    const [posts, setPosts] = useState(postsData)
    const { mutation, removeItem }= useDeletePost(setPosts, toast)
  return (
    <>
        <div className={styles.MainInfo}>
            <Accordion activeIndex={0}>
                <AccordionTab header="Publicaciones">
                    <div className={styles.DataTableField}>
                        <div>
                            <h2>Publicaciones</h2>
                        </div>
                        <DataTable value={posts} size="small" responsiveLayout="stack" breakpoint="960px">
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="date" header="Fecha" body={(rowData) => {return rowData.date.toString().split('T')[0]}}></Column>
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="title" header="T??tulo"></Column>
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="subtitle" header="Subt??tulo"></Column>
                            <Column className={isMobile ? 'mobileRowTable' : ''} field="imageLink" header="Imagen" 
                            body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                            <Column body={(rowData) => (<Button className={styles.RowButton} type='button' icon="pi pi-trash" onClick={() => {
                                mutation.mutate(rowData)
                                removeItem(rowData)
                            }} />)}/>
                        </DataTable>
                    </div>
                </AccordionTab>
                <AccordionTab header="Nueva Publicaci??n">
                    <div>
                        <h2>Nueva Publicaci??n</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className={styles.ImageField}>
                            <label htmlFor="imageLink">
                                Seleccionar Imagen
                                <input id='imageLink' type="file" accept=".png, .jpg, .jpeg" name='file' onChange={handleOnChange}/>
                            </label>
                            <Image src={image || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
                        </div>

                        <div className={styles.field}>
                            <span className="p-float-label">
                                <Controller name="title" control={control} rules={{ required: 'Ingrese T??tulo de la Publicaci??n.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="title" className={classNames({ 'p-error': errors.title })}>T??tulo de la Publicaci??n*</label>
                            </span>
                            {errors['title'] && <small className="p-error">{errors['title'].message}</small>}
                        </div>

                        <div className={styles.field}>
                            <span className="p-float-label">
                                <Controller name="subtitle" control={control} rules={{ required: 'Ingrese Subt??tulo de la Publicaci??n.' }} render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                                )} />
                                <label htmlFor="subtitle" className={classNames({ 'p-error': errors.subtitle })}>Subt??tulo de la Publicaci??n*</label>
                            </span>
                            {errors['subtitle'] && <small className="p-error">{errors['subtitle'].message}</small>}
                        </div>

                        <h2>Contenido de la publicaci??n</h2>
                        <Button className={styles.TableButton} type='button' label="Nuevo P??rrafo" onClick={() => setShowContentDialog(true)}/>
                        <h2>Vista Previa</h2>
                        <div className={styles.BlogPreview}>
                            {
                                contents.map((content: IContent) => {
                                    return (
                                        <div key={content.title} className={styles.BlogContent}>
                                            <div>
                                                <h2>{content.title}</h2>
                                                <p>{content.paragraph}</p>
                                            </div>
                                            {content.imageLink !== undefined ? <Image src={content.imageLink} alt={''} height={1080} width={1080} className={styles.BlogImage}/> : null}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    

                        <Button type="submit" loading={loading} label="Guardar" className="mt-2" />
                        <p>Despu??s de realizar los cambios, Guardalos!</p>
                    </form>
                </AccordionTab>
            </Accordion>
            
            

        </div>
        <ContentDialog showContentDialog={showContentDialog} hideContentDialog={() => setShowContentDialog(false)} setContents={setContents} toast={toast}/>
        <Toast ref={toast} position='bottom-right'/>
    </>
    )
}

export default BlogForm