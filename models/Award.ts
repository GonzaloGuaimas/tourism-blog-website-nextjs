import mongoose, { Schema } from 'mongoose'

const AwardSchema = new mongoose.Schema({
    uploadDate: {
        type: Date, 
        default: Date.now
    },
    date: {
        require: true,
        type: Date
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

export default mongoose.models.Award || mongoose.model('Award', AwardSchema)