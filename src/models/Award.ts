import mongoose from 'mongoose'

export interface IAward extends Document{
    uploadDate: Date,
    date: Date,
    name: string,
    imageLink: string,
    tourName: string,
    _id: string
}

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
    tourName: {
        require: true,
        type: String
    }
})

export default mongoose.models.Award || mongoose.model('Award', AwardSchema)