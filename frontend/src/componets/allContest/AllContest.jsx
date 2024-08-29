import React, { useContext } from 'react'
import './AllContest.css'
import { Context } from '../../context/Context.jsx'
import Card from "../card/Card.jsx"

const AllContest = () => {

  const {roomList, fetchRoomList} = useContext(Context)

  return (
    <div className='room-display' id='all-contest' >
       <h2>Upcoming Contests</h2>
       <div className="room-display-list">
        {
          roomList.map((room,index)=>{
            return <Card key={index} _id={room._id} roomId={room.roomId} EventDate={room.EventDate} time={room.time} map={room.map} prize={room.prize} winners={room.winners} ticket = {room.ticket} />
          })
        }
       </div>
    </div>
  )
}

export default AllContest