import { IAward } from '../../models/Award'
import axiosInstance from '../../pages/api/axios'

export const createAward = async (data: IAward) => {
    const award = await axiosInstance.post('/awards', data)
    return award
}