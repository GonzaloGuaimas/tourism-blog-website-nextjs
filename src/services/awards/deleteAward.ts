import { IAward } from '../../models/Award'
import axiosInstance from '../../pages/api/axios'

export const deleteAward = async (data: IAward) => {
    const award = await axiosInstance.delete('/awards/'+data._id)
    return award
}