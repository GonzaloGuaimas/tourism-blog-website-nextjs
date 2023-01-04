import { useState } from 'react'
import { handleOnSubmit } from '../../services/cloudinary/handleOnSubmit'

const useNewContent = (setContents: any, hideContentDialog: any) => {
    const defaultValues = {
        title: '',
        paragraph: '',
        imageLink: ''
    }
    const [submitted, setSubmitted] = useState<any>(false)
    const [loading, setLoading] = useState(false)
    const [imageContent, setImageContent] = useState<string | undefined>('/assets/emptyImage.png')
    const [contentItem, setContentItem] = useState<any>(defaultValues)

    const onInputChange = (e: any, name: string) => {
        const val = (e.target && e.target.value) || ''
        let _contentItem = {...contentItem}
        _contentItem[`${name}`] = val
        setContentItem(_contentItem)
    }
    function handleOnChange(changeEvent: any) {
        const reader = new FileReader()
        reader.onload = function(onloadEvent){
            setImageContent(onloadEvent.target?.result?.toString())
        }
        reader.readAsDataURL(changeEvent.target.files[0])
    }
    async function submitForm(e: any) {
        setLoading(true)
        e.preventDefault()
        setSubmitted(true)
        let _contentItem = {...contentItem}
        _contentItem['imageLink'] = await handleOnSubmit(e)
        setContentItem(_contentItem)
        setContents((prev: any) => [...prev, _contentItem])
        setLoading(false)
        hideContentDialog()
    }

  return { submitted, loading, imageContent, contentItem, onInputChange, handleOnChange, submitForm }
}

export default useNewContent