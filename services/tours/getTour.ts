import axiosInstance from '../../pages/api/axios'

export const getTour = async (name: string | string[] | undefined) => {
    const tour = await axiosInstance.get('/tours/'+name)
    return tour.data.tour[0]
}