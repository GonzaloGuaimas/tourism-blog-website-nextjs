import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'
import React from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { Button } from 'primereact/button'
import { Password } from 'primereact/password'

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter()
    const defaultValues = {name: '', password: ''}
    const { control, formState: { errors }, handleSubmit } = useForm({ defaultValues })

    const onSubmit = async (data: any) => {
        signIn('credentials', {...data, redirect: false}).then(res => {
            if(res?.ok){
                router.push('/admin')
            }
        }).catch(error => console.log(error, 'tira error'))
      }
    return (
      <>
        <Head>
          <title>Free Tours Argentina</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/assets/logoMundo.png" />
        </Head>
        <main className={styles.main}>
            <div className={styles.loginForm}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <h2>Iniciar Sesión</h2>
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
                                <Password type='submit' id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} feedback={false}/>
                            )} />
                            <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Contraseña*</label>
                        </span>
                        {errors['password'] && <small className="p-error">{errors['password'].message}</small>}
                    </div>
                    <Button type="submit" label="Guardar" className="mt-2" />
                </form>
            </div>
        </main>
      </>
    )
  }
  