import mongoose from 'mongoose'

const PointSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    locationLink: {
        require: true,
        type: String
    },
    imageLink: {
        require: true,
        type: String
    },
})

export default mongoose.models.PointSchema || mongoose.model('Point', PointSchema)