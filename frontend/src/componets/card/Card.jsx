import React, { useContext } from 'react';
import './Card.css';
import { Context } from "../../context/Context.jsx";
import { Link } from "react-router-dom";

const Card = ({ _id, roomId, EventDate, time, map, prize, winners, ticket }) => {
  const { url } = useContext(Context);

  return (
    <div className='room-card'>
      <div className="room-card-info">
        <div className="room-card-id">
          <p>ID : {roomId}</p>
        </div>
        <div className="room-card-timings">
          <div className="room-card-date">
            <p>Date : {EventDate}</p>
          </div>
          <div className="room-card-time">
            <p>Time : {time}</p>
          </div>
          <div className="room-card-map">
            <p>Map : {map}</p>
          </div>
        </div>
        <div className="room-card-prizes">
          <div className="room-card-prize">
            <p>Prize : {prize}</p>
          </div>
          <div className="room-card-winners">
            <p>Winners : Top {winners}</p>
          </div>
          <div className="room-card-ticket">
            <p>Ticket : Rs {ticket}</p>
          </div>
        </div>
        <div className="room-card-btn">
          <Link to={{
            pathname: "/register",
            search: `?roomId=${roomId}&ticket=${ticket}&EventDate=${EventDate}&time=${time}&map=${map}`
          }}>
            <button>Join Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
