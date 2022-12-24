import mongoose from 'mongoose'

const ContentSchema = new mongoose.Schema({
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

export default mongoose.models.ContentSchema || mongoose.model('Content', ContentSchema)