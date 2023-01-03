import axiosInstance from '../../pages/api/axios'

export const getAwards = async () => {
    const awards = await axiosInstance.get('awards')
    return awards.data.awards
}