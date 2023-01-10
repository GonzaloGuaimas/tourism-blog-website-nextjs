import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Tour from '../../../models/Tour'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req

    await dbConnect() 
    switch (method) {
        case 'GET':
            try {
                const tours = await Tour.find()
                return res.status(200).send({tours})
            } catch (error) {
                res.status(400).json({ success: false, error })
            }
            break
        case 'POST': 
            try {
                const tour = await Tour.create(body)
                return res.status(200).json({tour})
            } catch (error) {
                res.status(400).json({success: false, error})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}