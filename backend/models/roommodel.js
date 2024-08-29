import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomId:{
        type: String,
        required: true,
    },
    EventDate:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    map:{
        type: String,
        required: true,
    },
    prize:{
        type: String,
        required: true,
    },
    winners:{
        type: String,
        required: true,
    },
    ticket:{
        type: Number,
        required: true,
    },
    

})

const roomModel = mongoose.models.room || mongoose.model("room",roomSchema);


export default roomModel;

