import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from 'react-toastify'

const List = ({url}) => {

  const [list,setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/room/list`);

    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async(ID) => {
    const response = await axios.post(`${url}/api/room/remove`,{id:ID});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Rooms List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>RoomId</b>
          <b>Date</b>
          <b>Time</b>
          <b>Map</b>
          <b>Prize Money</b>
          <b>winners</b>
          <b>Ticket</b>
          <b>Remove</b>
        </div>
        {list.map((room,index)=>{
          return(
            <div key={index} className="list-table-format">
              <p>{room.roomId}</p>
              <p>{room.EventDate}</p>
              <p>{room.time}</p>
              <p>{room.map}</p>
              <p>{room.prize}</p>
              <p>TOP: {room.winners}</p>
              <p>Rs{room.ticket}</p>
              <p onClick={()=>removeFood(room._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List