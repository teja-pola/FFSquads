import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listRegistrations, registration,updateRegistrationStatus,verifyRegistration, userRegistrations } from "../controllers/registrationController.js"

const registrationRouter = express.Router();

registrationRouter.post("/register",authMiddleware,registration)
registrationRouter.post("/verify",verifyRegistration)
registrationRouter.post("/userRegistrations",authMiddleware,userRegistrations)
registrationRouter.get("/list",listRegistrations)
registrationRouter.post("/status",updateRegistrationStatus)

export default registrationRouter;