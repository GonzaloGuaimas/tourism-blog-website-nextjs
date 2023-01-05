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
    tourName: {
        require: true,
        type: String
    }
})
export interface IGallery extends Document{
    title: string,
    uploadDate: Date,
    imageLink: string,
    tourName: string
}

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
export interface IComment extends Document{
    name: string,
    date: Date,
    country: string,
    comment: string
}
const CommentSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    date: {
        type: Date, 
        default: Date.now
    },
    country: {
        require: true,
        type: String
    },
    comment: {
        require: true,
        type: String
    }
})
export interface IPoint extends Document{
    name: string,
    locationLink: string,
    imageLink: string,
}

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
    comments: {
        type: [CommentSchema],
    },
})

export interface ITour extends Document {
    name: string
    meetingPoint: string
    shortDescription: string
    coverDescription: string
    longerDescription: string
    extraInfo: string
    logoImageLink: string
    coverImageLink: string
    schedules: string
    duration: string
    instagramUser: string
    facebookUser: string
    whatsAppNumber: string
    meetingPointLink: string
    ownerFullName: string
    password: string
    gallery: [IGallery],
    route: [IPoint],
    comments: [IComment]
}

export default mongoose.models.Tour || mongoose.model('Tour', TourSchema)