import { useState } from 'react'
import { useMutation } from 'react-query'
import { IPost } from '../../models/Post'
import { ITour } from '../../models/Tour'
import { uploadOne } from '../../services/cloudinary/uploadOne'
import { createPost } from '../../services/posts/createPost'

const useNewPosts = (tour: ITour, reset: any, defaultValues: any, toast: any) => {

      const [contents, setContents] = useState([])
      const [image, setImage] = useState<string | undefined>(defaultValues.imageLink)
      const [loading, setLoading] = useState(false)
      const [imgValidator, setImgValidator] = useState(false)

      const mutation = useMutation(
        (data: IPost) => createPost(data),
            {
                onSuccess: () => {
                    reset(defaultValues)
                    setLoading(false)
                    setImgValidator(false)
                    toast.current.show({severity: 'success', summary: 'Realizado', detail: 'Publicación Realizada'})
                },
            }
        )
    
      const onSubmit = async (data: any) => {
        if(imgValidator){
          setLoading(true)
          data.imageLink = await uploadOne(image)
          data.content = contents
          data.updateDate = new Date()
          data.date = new Date()
          data.tourName = tour.name
          mutation.mutate(data)
        } else {
          toast.current.show({severity: 'error', summary: 'Error', detail: 'Seleccione Imagen'})
        }
       
      }
    
      function handleOnChange(changeEvent: any) {
        const reader = new FileReader()
        reader.onload = function(onloadEvent){
            onloadEvent.target?.result === undefined ? setImgValidator(false) : setImgValidator(true)
            let image = onloadEvent.target?.result?.toString()
            setImage(image)
        }
        reader.readAsDataURL(changeEvent.target.files[0])
      }
    
  return { setContents, contents, image, loading, defaultValues, onSubmit, handleOnChange}
}

export default useNewPosts