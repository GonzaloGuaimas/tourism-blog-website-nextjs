export default async function (req: any, res: any) {
    const { method } = req
    switch (method){
        case 'GET':
            try {
                return res.status(200).send({ message: 'hola'})
            } catch(error){
                res.status(400).json({ success: false })
            }
            break
    }
}