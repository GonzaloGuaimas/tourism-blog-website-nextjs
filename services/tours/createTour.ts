import { ITour } from '../../models/Tour'
import axiosInstance from '../../pages/api/axios'

export const createTour = async (data: ITour) => {
    const tour = await axiosInstance.post('/tours', data)
    return tour
}