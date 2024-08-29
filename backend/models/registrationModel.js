import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required : true,
    },
    roomId: {
        type: String,
        required: true,
    },
    EventDate: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    map: {
        type: String,
        required: true,
    },
    ticket: {
        type: Number,
        required: true,
    },
    teamDetails: {
        type: Object,
        required: true,
    },
    date:{
        type:Date,
        default:Date.now()
    },
    payment:{
        type:Boolean,
        default:false
    }
})

const registrationModel = mongoose.models.registration || mongoose.model("registration",registrationSchema)

export default registrationModel;