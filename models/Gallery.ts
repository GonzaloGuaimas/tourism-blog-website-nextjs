import mongoose, { Schema } from 'mongoose'

const GallerySchema = new mongoose.Schema({
    uploadDate: {
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

export default mongoose.models.GallerySchema || mongoose.model('Gallery', GallerySchema)