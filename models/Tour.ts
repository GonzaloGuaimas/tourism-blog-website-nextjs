import mongoose, { Schema } from 'mongoose'

const GallerySchema = new Schema({
    title: {
        require: true,
        type: String
    },
    uploadDate: {
        type: Date, 
        default: Date.now
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

const PointSchema = new Schema({
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


const TourSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    meetingPoint: {
        require: true,
        type: String
    },
    shortDescription: {
        require: true,
        type: String
    },
    coverDescription: {
        require: true,
        type: String
    },
    longerDescription: {
        require: true,
        type: String
    },
    extraInfo: {
        require: true,
        type: String
    },
    logoImageLink: {
        require: true,
        type: String
    },
    coverImageLink: {
        require: true,
        type: String
    },
    schedules: {
        require: true,
        type: String
    },
    duration: {
        require: true,
        type: String
    },
    instagramUser: {
        require: true,
        type: String
    },
    facebookUser: {
        require: true,
        type: String
    },
    whatsAppNumber: {
        require: true,
        type: String
    },
    meetingPointLink: {
        require: true,
        type: String
    },
    ownerFullName: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    gallery: {
        type: [GallerySchema],
    },
    route: {
        type: [PointSchema],
    },
})

export default mongoose.models.Tour || mongoose.model('TourSchema', TourSchema)