import React, {useState} from 'react'
import "./Add.css"
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  const [data,setData] = useState({
    roomId:"",
    date:"",
    time:"",
    map:"",
    prize:"",
    winners:"",
    ticket:""
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
 
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("roomId",data.roomId)
    formData.append("date",data.date)
    formData.append("time",data.time)
    formData.append("map",data.map)
    formData.append("prize",data.prize)
    formData.append("winners",data.winners)
    formData.append("ticket",Number(data.ticket))

    const response = await axios.post(`${url}/api/room/add`,data);
    if(response.data.success){
      setData({
        roomId:"",
        date:"",
        time:"",
        map:"",
        prize:"",
        winners:"",
        ticket:""
      })
      //console.log("room details posted")
      toast.success(response.data.message)
    }else{
      //console.log("failed to post room details")
      toast.success(response.data.message)
    }
  }

  
  return (
    <div className='add'>
      <form  className="flex-col" onSubmit={onSubmitHandler}>
      <div className="add-room-roomId flex-col">
          <p>Room ID</p>
          <input onChange={onChangeHandler} value={data.roomId}  type="text" name='roomId' placeholder='Enter RoomID' />
      </div>
      <div className="add-room-date flex-col">
          <p>Date</p>
          <input onChange={onChangeHandler} value={data.date}  type="text" name='date' placeholder='Enter Date' />
      </div>
      <div className="add-room-time flex-col">
          <p>Time</p>
          <input onChange={onChangeHandler} value={data.time}  type="text" name='time' placeholder='Enter Time' />
      </div>
      <div className="add-room-map flex-col">
          <p>Map</p>
          <input onChange={onChangeHandler} value={data.map}  type="text" name='map' placeholder='Enter Map' />
      </div>
      <div className="add-room-prize flex-col">
          <p>Prize Pool</p>
          <input onChange={onChangeHandler} value={data.prize}  type="text" name='prize' placeholder='Enter Prize Pool' />
      </div>
      <div className="add-room-winners flex-col">
          <p>Winners</p>
          <input onChange={onChangeHandler} value={data.winners}  type="text" name='winners' placeholder='Enter no of winners' />
      </div>
      <div className="add-room-ticket flex-col">
          <p>Ticket</p>
          <input onChange={onChangeHandler} value={data.ticket}  type="Number" name='ticket' placeholder='Enter Ticket price' />
      </div>
      <button type='submit' className="add-btn">ADD</button>
      </form>
    </div>
  )
}

export default Add