import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Award from '../../../models/Award'

export default async function (req: NextApiRequest, res: NextApiResponse){
	const {
		body,
		method
	} = req
	const id = req.query.id
	await dbConnect

	switch (method) {
		case 'GET':
			try {
				const award = await Award.findById(id)
				return res.status(200).json({award})
			} catch(error){
				res.status(400).json({success: false, error})
			}
			break
		case 'PUT':
			try {
				const award = await Award.findByIdAndUpdate(id, body, 
					{new: true, runValidators: true})
				return res.status(200).send({award})
			} catch(error){
				res.status(400).json({success: false, error})
			}
			break
		case 'DELETE':
			try {
				const award = await Award.findByIdAndDelete(id)
				return res.status(200).send({award})
			} catch (error) {
				res.status(400).json({success: false, error})
			}
			
			break
		default:
			res.status(400).json({success: false})
			break
	}
}