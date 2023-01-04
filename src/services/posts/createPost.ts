
import { IPost } from '../../models/Post'
import axiosInstance from '../../pages/api/axios'

export const createPost = async (data: IPost) => {
    const post = await axiosInstance.post('/posts', data)
    return post
}