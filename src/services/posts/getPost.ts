import { IPost } from '../../models/Post'

export const getPost = (query: any, title: string) => {
    const postResult: IPost = query.data?.find((tour: IPost) => tour.title === title)
    return postResult
}