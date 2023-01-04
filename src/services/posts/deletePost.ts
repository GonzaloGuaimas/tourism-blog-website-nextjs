import { IPost } from '../../models/Post'
import axiosInstance from '../../pages/api/axios'

export const deletePost = async (data: IPost) => {
    const post = await axiosInstance.delete('/posts/'+data._id)
    return post
}