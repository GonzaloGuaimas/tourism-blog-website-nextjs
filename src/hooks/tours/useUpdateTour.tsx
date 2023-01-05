import { useState } from 'react'
import { useMutation } from 'react-query'
import { ITour } from '../../models/Tour'
import { updateTour } from '../../services/tours/updateTour'

const useUpdateTour = ( tour: ITour, hideCommentDialog: any, reset: any, defaultValues: any ) => {
    const [loading, setLoading] = useState(false)

    const mutation = useMutation(
        (data: ITour) => updateTour(data),
            {
                onSuccess: () => {
                    reset(defaultValues)
                    setLoading(false)
                    console.log('Update Data')
                },
            }
    )
    const onSubmit = async (data: any) => {
        setLoading(true)
        data.date = new Date().toISOString()
        let _tour = {...tour}
        _tour.comments.push(data)
        mutation.mutate(_tour)
        setLoading(false)
        hideCommentDialog()
      }

  return { loading, onSubmit }
}

export default useUpdateTour