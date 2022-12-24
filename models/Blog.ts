import mongoose, { Schema } from 'mongoose'
import Content from './Content'

const BlogSchema = new mongoose.Schema({
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
        require: true,
        type: String
    },
    date: {
        require: true,
        type: String
    },
    userRegisterId: {
        require: true,
        type: Schema.Types.ObjectId
    },
    content: {
        require: false,
        type: [Content]
    }
})

export default mongoose.models.BlogSchema || mongoose.model('Blog', BlogSchema)