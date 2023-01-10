import { useMutation } from 'react-query'
import { IPost } from '../../models/Post'
import { deletePost } from '../../services/posts/deletePost'

const useDeletePost = ( setPosts: any, toast: any ) => {
    const mutation = useMutation(
        (data: IPost) => deletePost(data),
            {
                onSuccess: () => {
                    toast.current.show({severity: 'error', summary: 'Realizado', detail: 'Publicación Eliminada'})
                },
            }
    )
    const removeItem = (post: IPost) => {
        setPosts((prev: any) => prev.filter((prevItem: any) => prevItem.imageLink !== post.imageLink))
    }


  return { mutation, removeItem }
}

export default useDeletePost