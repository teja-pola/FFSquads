import express from "express";
import { addRoom, listRoom, removeRoom } from "../controllers/roomController.js"


const roomRouter = express.Router();

roomRouter.post("/add",addRoom)
roomRouter.get("/list",listRoom)
roomRouter.post("/remove",removeRoom);

export default roomRouter;