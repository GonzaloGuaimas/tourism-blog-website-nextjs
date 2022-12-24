import mongoose from 'mongoose'
import Gallery from './Gallery'
import Point from './Point'

const TourSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    location: {
        require: true,
        type: Point
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
    instagramLink: {
        require: true,
        type: String
    },
    facebookLink: {
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
        type: [Gallery],
    },
    route: {
        type: [Point],
    },
})

export default mongoose.models.TourSchema || mongoose.model('TourSchema', TourSchema)