import axiosInstance from '../../pages/api/axios'

export const getTours = async () => {
    const tours = await axiosInstance.get('/tours')
    return tours.data.tours
}