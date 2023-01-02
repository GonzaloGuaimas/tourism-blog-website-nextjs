// import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
// import Award from '../../../models/Award'

export default async function (req: any, res: any) {
    const { method } = req
    try {
        await dbConnect()
        switch (method){
            case 'GET':
                try {
                    return res.status(200).send({ message: 'hola'})
                } catch(error){
                    res.status(400).json({ success: false })
                }
                break
        } 
        return res.status(200).send({success: 'se conect'})
    } catch (error) {
        console.log(error)
        return res.status(200).send({error})
    }
   
    // switch (method) {
    //     case 'GET':
    //         try {
    //             const awards = await Award.find()
    //             return res.status(200).send({awards})
    //         } catch (error) {
    //             res.status(400).json({ success: false, error })
    //         }
    //         break
    //     case 'POST': 
    //         try {
    //             const award = await Award.create(body)
    //             return res.status(200).json({award})
    //         } catch (error) {
    //             res.status(400).json({success: false, error})
    //         }
    //         break
    //     default:
    //         res.status(400).json({success: false})
    //         break
    // }
}