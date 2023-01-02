import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Post from '../../../models/Post'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req

    await dbConnect() 
    switch (method) {
        case 'GET':
            try {
                const posts = await Post.find()
                return res.status(200).send({posts})
            } catch (error) {
                res.status(400).json({ success: false, error })
            }
            break
        case 'POST': 
            try {
                const post = await Post.create(body)
                return res.status(200).json({post})
            } catch (error) {
                res.status(400).json({success: false, error})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}