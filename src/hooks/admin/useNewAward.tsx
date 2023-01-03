import { useState } from 'react'
import { useMutation } from 'react-query'
import { IAward } from '../../models/Award'
import { createAward } from '../../services/awards/createAward'
import { handleOnSubmit } from '../../services/cloudinary/handleOnSubmit'

const useNewAward = (setAwards: any, tourName: string, hideAwardDialog: any) => {
    const defaultValues = {
        uploadDate: '',
        date: '',
        name: '',
        imageLink: '',
        tourName: ''
    }
    const [submitted, setSubmitted] = useState<any>(false)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<string | undefined>('/assets/emptyImage.png')
    const [awardItem, setAwardItem] = useState<any>(defaultValues)

    const mutation = useMutation(
        (data: IAward) => createAward(data),
            {
                onSuccess: () => {
                    setLoading(false)
                    setImage('/assets/emptyImage.png')
                    hideAwardDialog()
                    console.log('Created Data')
                },
            }
     )
    const onInputChange = (e: any, name: string) => {
        const val = (e.target && e.target.value) || ''
        let _awardItem = {...awardItem}
        _awardItem[`${name}`] = val
        setAwardItem(_awardItem)
    }
    function handleOnChange(changeEvent: any) {
        const reader = new FileReader()
        reader.onload = function(onloadEvent){
            setImage(onloadEvent.target?.result?.toString())
        }
        reader.readAsDataURL(changeEvent.target.files[0])
    }
    async function submitForm(e: any) {
        setLoading(true)
        e.preventDefault()
        setSubmitted(true)
        let _awardItem = {...awardItem}
        _awardItem['uploadDate'] = new Date()
        _awardItem['date'] = new Date()
        _awardItem['tourName'] = tourName
        _awardItem['imageLink'] = await handleOnSubmit(e)
        setAwardItem(_awardItem)
        mutation.mutate(_awardItem)
        setAwards((prev: any) => [...prev, _awardItem])
    }

  return { submitted, loading, image, awardItem, onInputChange, handleOnChange, submitForm }
}

export default useNewAward