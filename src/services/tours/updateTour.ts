import { ITour } from '../../models/Tour'
import axiosInstance from '../../pages/api/axios'

export const updateTour = async (data: ITour) => {
    const tour = await axiosInstance.put('/tours/'+data.name, data)
    return tour
}