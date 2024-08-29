import roomModel from "../models/roommodel.js";


//add room details

export const addRoom = async (req,res) => {
   console.log(req.body);

    const room = new roomModel({
        roomId: req.body.roomId,
        EventDate: req.body.EventDate,
        time:req.body.time,
        map:req.body.map,
        prize:req.body.prize,
        winners:req.body.winners,
        ticket:req.body.ticket,
    })

    try{
        await room.save();
        res.json({success:true,message:"Room added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all room list
const listRoom = async (req,res) => {
    try {
        const rooms = await roomModel.find({});
        res.json({success:true,data:rooms})
    } catch (error) {
        console.log(error);
       res.json({success:false,message:"Error"})
    }
}

//remove room
const removeRoom = async (req,res) => {
    try {
        await roomModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Room Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {listRoom,removeRoom};