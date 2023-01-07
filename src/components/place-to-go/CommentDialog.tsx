import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import useUpdateTour from '../../hooks/tours/useUpdateTour'
import { ITour } from '../../models/Tour'
import styles from '../../../styles/Admin.module.css'

const CommentDialog = ({ tour, showCommentDialog, hideCommentDialog }: { tour: ITour, showCommentDialog: any, hideCommentDialog: any }) => {
    const defaultValues = {
        name: '',
        date: '',
        country: '',
        comment: ''
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues })
    const { loading, onSubmit } = useUpdateTour(tour, hideCommentDialog, reset, defaultValues)
  return (
    <Dialog visible={showCommentDialog} style={{ margin: '1rem' }} header='Nuevo Comentario' modal className="p-fluid" onHide={hideCommentDialog}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
            <br />
            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="name" control={control} rules={{ required: 'Nombre.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Ingrese su Nombre (puede ser anónimo)*</label>
                </span>
                {errors['name'] && <small className="p-error">{errors['name'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="country" control={control} rules={{ required: 'País / Provincia.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="country" className={classNames({ 'p-error': errors.country })}>Ingrese País / Provincia*</label>
                </span>
                {errors['country'] && <small className="p-error">{errors['country'].message}</small>}
            </div>

            <div className={styles.field}>
                <span className="p-float-label">
                    <Controller name="comment" control={control} rules={{ required: 'Ingrese Comentario.' }} render={({ field, fieldState }) => (
                        <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                    <label htmlFor="comment" className={classNames({ 'p-error': errors.comment })}>Comentario*</label>
                </span>
                {errors['comment'] && <small className="p-error">{errors['comment'].message}</small>}
            </div>
            
            <Button type='submit' loading={loading} label='Guardar'></Button>
        </form>
    </Dialog>
  )
}

export default CommentDialog