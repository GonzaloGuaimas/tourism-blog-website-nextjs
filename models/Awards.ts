import mongoose, { Schema } from 'mongoose'

const AwardsSchema = new mongoose.Schema({
    uploadDate: {
        require: true,
        type: String
    },
    date: {
        require: true,
        type: String
    },
    name: {
        require: true,
        type: String
    },
    imageLink: {
        require: true,
        type: String
    },
    userRegisterId: {
        require: true,
        type: Schema.Types.ObjectId
    }
})

export default mongoose.models.AwardsSchema || mongoose.model('Awards', AwardsSchema)