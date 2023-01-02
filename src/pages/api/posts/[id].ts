import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Post from '../../../models/Post'


export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const {
		body,
		method
	} = req
	const id = req.query.id
	await dbConnect

	switch (method) {
		case 'GET':
			try {
				const post = await Post.findById(id)
				return res.status(200).json({post})
			} catch(error){
				res.status(400).json({success: false, error})
			}
			break
		case 'PUT':
			try {
				const post = await Post.findByIdAndUpdate(id, body, 
					{new: true, runValidators: true})
				return res.status(200).send({post})
			} catch(error){
				res.status(400).json({success: false, error})
			}
			break
		case 'DELETE':
			try {
				const post = await Post.findByIdAndDelete(id)
				return res.status(200).send({post})
			} catch (error) {
				res.status(400).json({success: false, error})
			}
			
			break
		default:
			res.status(400).json({success: false})
			break
	}
}