import mongoose, { Schema } from 'mongoose'

const ContentSchema = new Schema({
    title: {
        require: true,
        type: String
    },
    paragraph: {
        require: true,
        type: String
    },
    imageLink: {
        require: false,
        type: String
    }
 })

const PostSchema = new mongoose.Schema({
    title: {
        require: true,
        type: String
    },
    subtitle: {
        require: true,
        type: String
    },
    imageLink: {
        require: true,
        type: String
    },
    updateDate: {
        type: Date, 
        default: Date.now
    },
    date: {
        require: true,
        type: Date
    },
    userRegisterId: {
        require: true,
        type: Schema.Types.ObjectId
    },
    content: {
        require: false,
        type: [ContentSchema]
    }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)