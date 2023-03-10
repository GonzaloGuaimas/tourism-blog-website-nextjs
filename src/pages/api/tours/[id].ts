import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Tour from '../../../models/Tour'

export default async function(req: NextApiRequest, res: NextApiResponse){
	const {
		body,
		method
	} = req
	const id = req.query.id
	await dbConnect

	switch (method) {
		
		case 'PUT':
			try {
				const tour = await Tour.findOneAndUpdate({name: id}, body, 
					{new: true, runValidators: true})
				// const tour = await Tour.findByIdAndUpdate(id, body, 
				// 	{new: true, runValidators: true})
				return res.status(200).send({tour})
			} catch(error){
				res.status(400).json({success: false, error})
			}
			break
		case 'DELETE':
			try {
				const tour = await Tour.findByIdAndDelete(id)
				return res.status(200).send({tour})
			} catch (error) {
				res.status(400).json({success: false, error})
			}
			
			break
		default:
			res.status(400).json({success: false})
			break
	}
}