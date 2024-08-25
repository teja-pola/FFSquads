import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect("mongodb+srv://ganesh4419:freefire123@cluster0.9pcxm.mongodb.net/freefire").then(()=>console.log("DB Connected"))
}

