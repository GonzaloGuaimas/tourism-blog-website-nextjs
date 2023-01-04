import { useState } from 'react'
import { useMutation } from 'react-query'
import { IPost } from '../../models/Post'
import { ITour } from '../../models/Tour'
import { uploadOne } from '../../services/cloudinary/uploadOne'
import { createPost } from '../../services/posts/createPost'

const useNewPosts = (tour: ITour) => {
    const defaultValues = {
        title: '',
        subtitle: '',
        imageLink: '',
        updateDate: '',
        date: '',
        tourName: '',
        content: []
      }
      const [contents, setContents] = useState([])
      const [image, setImage] = useState<string | undefined>(defaultValues.imageLink)
      const [loading, setLoading] = useState(false)
    
      const mutation = useMutation(
        (data: IPost) => createPost(data),
            {
                onSuccess: () => {
                    setLoading(false)
                    console.log('Update Data')
                },
            }
        )
    
      const onSubmit = async (data: any) => {
        data.imageLink = await uploadOne(image)
        data.content = contents
        data.updateDate = new Date()
        data.date = new Date()
        data.tourName = tour.name
        setLoading(true)
        mutation.mutate(data)
      }
    
      function handleOnChange(changeEvent: any) {
        const reader = new FileReader()
        reader.onload = function(onloadEvent){
            let image = onloadEvent.target?.result?.toString()
            setImage(image)
        }
        reader.readAsDataURL(changeEvent.target.files[0])
      }
    
  return { setContents, contents, image, loading, defaultValues, onSubmit, handleOnChange}
}

export default useNewPosts