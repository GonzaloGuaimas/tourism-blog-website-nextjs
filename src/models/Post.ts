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
export interface IContent extends Document{
    title: string,
    paragraph: string,
    imageLink: string
}
export interface IPost extends Document{
    _id: string,
    title: string,
    subtitle: string,
    imageLink: string,
    updateDate: Date,
    date: Date,
    tourName: string,
    content: [IContent]
}

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
    tourName: {
        require: true,
        type: String
    },
    content: {
        require: false,
        type: [ContentSchema]
    }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)