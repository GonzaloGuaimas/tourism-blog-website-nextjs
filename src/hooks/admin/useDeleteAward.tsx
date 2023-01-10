import { useMutation } from 'react-query'
import { IAward } from '../../models/Award'
import { deleteAward } from '../../services/awards/deleteAward'

const useDeleteAward = ( setAwards: any, toast: any ) => {
    const mutation = useMutation(
        (data: IAward) => deleteAward(data),
            {
                onSuccess: () => {
                    toast.current.show({severity: 'Error', summary: 'Realizado', detail: 'Reconocimiento Eliminado'})
                },
            }
    )
    const removeItem = (award: IAward) => {
        setAwards((prev: any) => prev.filter((prevItem: any) => prevItem.imageLink !== award.imageLink))
    }


  return { mutation, removeItem }
}

export default useDeleteAward