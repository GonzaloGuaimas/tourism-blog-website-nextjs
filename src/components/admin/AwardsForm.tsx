import React, { useState } from 'react'
import { IAward } from '../../models/Award'
import { ITour } from '../../models/Tour'
import styles from '../../../styles/Admin.module.css'
import Image from 'next/image'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import AwardDialog from '../pure/admin/AwardDialog'
import useDeleteAward from '../../hooks/admin/useDeleteAward'


const AwardsForm = ({tour, awardsData}: { tour: ITour, awardsData: IAward[]}) => {
    const [showAwardDialog, setShowAwardDialog] = useState(false)
    const [awards, setAwards] = useState(awardsData)
    const { mutation, removeItem } = useDeleteAward(setAwards)
  return (
    <>
      <div className={styles.MainInfo}>
            <div className={styles.DataTableField}>
                <div>
                    <h2>Reconocimientos</h2>
                    <Button className={styles.TableButton} type='button' label="Nuevo Reconocimiento" onClick={() => setShowAwardDialog(true)}/>
                </div>
                <DataTable value={awards} size="small" responsiveLayout="scroll">
                    {/* <Column field="uploadDate" header="Fecha Subida"></Column> */}
                    {/* <Column field="date" header="Fecha"></Column> */}
                    <Column field="name" header="Nombre"></Column>
                    <Column field="tourName" header="Usuario"></Column>
                    <Column field="imageLink" header="Imagen" 
                    body={(rowData) => (<Image src={rowData.imageLink} alt={''} height={500} width={500}/>)}/>
                    <Column body={(rowData) => (<Button className={styles.RowButton} type='button' icon="pi pi-trash" onClick={() => {
                        mutation.mutate(rowData)
                        removeItem(rowData)
                    }} />)}/>
                </DataTable>
            </div>
      </div>
      <AwardDialog showAwardDialog={showAwardDialog} hideAwardDialog={() => setShowAwardDialog(false)} setAwards={setAwards} tourName={tour.name}/>
    </>
  )
}
export default AwardsForm