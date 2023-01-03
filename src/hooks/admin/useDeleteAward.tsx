import { useMutation } from 'react-query'
import { IAward } from '../../models/Award'
import { deleteAward } from '../../services/awards/deleteAward'

const useDeleteAward = ( setAwards: any ) => {
    const mutation = useMutation(
        (data: IAward) => deleteAward(data),
            {
                onSuccess: () => {
                    console.log('Delete Data')
                },
            }
    )
    const removeItem = (award: IAward) => {
        setAwards((prev: any) => prev.filter((prevItem: any) => prevItem.imageLink !== award.imageLink))
    }


  return { mutation, removeItem }
}

export default useDeleteAward