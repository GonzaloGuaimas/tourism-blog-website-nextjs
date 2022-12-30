import { ITour } from '../../models/Tour'

export const getTour = (query: any, name: string) => {
    const tourResult: ITour = query.data?.find((tour: ITour) => tour.name = name)!
    return tourResult
}