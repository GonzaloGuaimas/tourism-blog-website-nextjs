import axiosInstance from '../../pages/api/axios'

export const getPosts = async () => {
    const posts = await axiosInstance.get('/posts')
    return posts.data.posts
}