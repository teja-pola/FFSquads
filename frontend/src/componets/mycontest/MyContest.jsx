import React from 'react'
import "./MyContest.css"

const MyContest = () => {
  return (
    <div className="my-contest-container" id='my-contest'>
        <h2>My Contests</h2>
    <div className='my-contest'>
        <div className="room-title">
            <h4>First Come First Serve</h4>
            <h4>ID:123456</h4>
        </div>
        <div className="room-details">
            <div className="room-details-date">
            <h4>Date: 01/01/2024</h4>
            </div>
            <div className="room-details-time">
                <h4>Time: 05:00 PM</h4>
            </div>
            <div className="room-details-map">
                <h4>Map: Bermuda</h4>
            </div>
        </div>
        <div className="room-prize">
            <div className="room-prize-pool">
                <h4>Price Pool: 500 Rs</h4>
            </div>
            <div className="room-prize-winners">
                <h4>Winners: Top 3</h4>
            </div>
            <div className="room-prize-coins">
                <h4>Join using : 250 coins</h4>
            </div>
        </div>
        <div className="room-spots">
        <label htmlFor="players-joined"> <h4>20 players joined</h4></label>
         <progress id="players-joined" value="80" max="100">80%</progress>
            <h4>30 players remaining</h4>
           
        </div>
        <div className="join-now"> <button>Join Now</button></div>
     
    </div>
    </div>
  )
}

export default MyContest