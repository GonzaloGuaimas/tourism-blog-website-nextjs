import React, { useState } from 'react'
import ContentDialog from '../pure/admin/ContentDialog'
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

const BlogForm = ({ posts, tour }: { posts: IPost[], tour: ITour}) => {
    const [showContentDialog, setShowContentDialog] = useState(false)
    const { setContents, contents, image, loading, defaultValues, onSubmit, handleOnChange } = useNewPosts(tour)
    const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues })
  return (
    <>
        <div className={styles.MainInfo}>
            <h2>Nueva Publicación</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                <div className={styles.ImageField}>
                    <label htmlFor="imageLink">
                        Seleccionar Imagen
                        <input id='imageLink' type="file" name='file' onChange={handleOnChange}/>
                    </label>
                    <Image src={image || '/assets/emptyImage.png'} alt={''} height={500} width={500}/>
                </div>

                <div className={styles.field}>
                    <span className="p-float-label">
                        <Controller name="title" control={control} rules={{ required: 'Ingrese Título de la Publicación.' }} render={({ field, fieldState }) => (
                            <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                        )} />
                        <label htmlFor="title" className={classNames({ 'p-error': errors.title })}>Título de la Publicación*</label>
                    </span>
                    {errors['title'] && <small className="p-error">{errors['title'].message}</small>}
                </div>

                <div className={styles.field}>
                    <span className="p-float-label">
                        <Controller name="subtitle" control={control} rules={{ required: 'Ingrese Subtítulo de la Publicación.' }} render={({ field, fieldState }) => (
                            <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                        )} />
                        <label htmlFor="subtitle" className={classNames({ 'p-error': errors.subtitle })}>Subtítulo de la Publicación*</label>
                    </span>
                    {errors['subtitle'] && <small className="p-error">{errors['subtitle'].message}</small>}
                </div>

                <h2>Contenido de la publicación</h2>
                <Button className={styles.TableButton} type='button' label="Nuevo Reconocimiento" onClick={() => setShowContentDialog(true)}/>
                <div className={styles.BlogPreview}>
                    <h1>Titulo principal</h1>
                    <h3>subtitulo</h3>
                    {
                        contents.map((content: IContent) => {
                            return (
                                <div key={content.title} className={styles.BlogContent}>
                                    <div>
                                        <h2>{content.title}</h2>
                                        <p>{content.paragraph}</p>
                                    </div>
                                    {content.imageLink !== '' ? <Image src={content.imageLink} alt={''} height={1080} width={1080} className={styles.BlogImage}/> : null}
                                </div>
                            )
                        })
                    }
                </div>
               

                <Button type="submit" loading={loading} label="Guardar" className="mt-2" />
                <p>Después de realizar los cambios, Guardalos!</p>
            </form>
            
            <div className={styles.DataTableField}>
                <div>
                    <h2>Publicaciones</h2>
                </div>
                <DataTable value={posts} size="small" responsiveLayout="scroll">
                    {/* <Column field="uploadDate" header="Fecha Subida"></Column> */}
                    {/* <Column field="date" header="Fecha"></Column> */}
                    <Column field="title" header="Título"></Column>
                    <Column field="subtitle" header="Subtítulo"></Column>
                    <Column field="imageLink" header="Imagen" 
                    body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                    <Column body={(rowData) => (<Button className={styles.RowButton} type='button' icon="pi pi-trash" onClick={() => {
                        console.log('delete', rowData)
                    }} />)}/>
                </DataTable>
            </div>
        </div>
        <ContentDialog showContentDialog={showContentDialog} hideContentDialog={() => setShowContentDialog(false)} setContents={setContents}/>
    </>
    )
}

export default BlogForm