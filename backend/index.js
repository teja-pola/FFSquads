import express from "express"
import cors from "cors"
import "dotenv/config"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
import roomRouter from "./routes/roomRoutes.js"
import registrationRouter from "./routes/registrationRoutes.js"

const app = express()
const port =  4000

//middleware
app.use(express.json())
app.use(cors())


//connectdb
connectDB()


//api endpoints
app.use("/api/user",userRouter)
app.use("/api/room",roomRouter)
app.use("/api/registration",registrationRouter)

app.get("/", (req,res) =>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})