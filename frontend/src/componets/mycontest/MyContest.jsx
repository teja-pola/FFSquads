import React, { useContext, useEffect, useState } from 'react';
import './MyContest.css';
import { Context } from "../../context/Context";
import axios from 'axios';

const MyContests = () => {
  const { url, token } = useContext(Context);
  const [contests, setContests] = useState([]);

  const fetchContests = async () => {
    try {
      if (!token) {
        throw new Error("No token found. User is not authenticated.");
      }

      const response = await axios.post(`${url}/api/registration/userRegistrations`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        // Assuming `payment` field is the one indicating payment status
        const updatedContests = response.data.data.filter(contest => contest.payment);
        setContests(updatedContests);
      } else {
        console.error("Failed to fetch contests:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching contests:", error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchContests();
    }
  }, [token]);

  // Optionally, create a function to refresh the contests manually
  const handleRefresh = () => {
    fetchContests();
  };

  return (
    <div className='my-contests'>
      <h2>My Contests</h2>
      <button onClick={handleRefresh}>Contest Details</button>
      <div className="container">
        {contests.length > 0 ? (
          contests.map((contest, index) => (
            <div key={index} className='my-contests-contest'>
               <button onClick={() => handleRefresh()}> Contest details</button>
              <p><strong>Room ID:</strong> {contest.roomId}</p>
              <p><strong>Team Name:</strong> {contest.teamDetails.teamName}</p>
              <p><strong>Team Leader:</strong> {contest.teamDetails.teamLeader.name}</p>
              <p><strong>Date:</strong> {contest.EventDate}</p>
              <p><strong>Time:</strong> {contest.time}</p>
              <p><strong>Map:</strong> {contest.map}</p>
              <p><strong>Team Leader Free Fire ID:</strong> {contest.teamDetails.teamLeader.freeFireId}</p>
              <div className='team-members'>
                <strong>Team Members:</strong>
                {contest.teamDetails.teamMembers.map((member, i) => (
                  <p key={i}>{member.name} (Free Fire ID: {member.freeFireId})</p>
                ))}
              </div>
              <p><strong>Ticket:</strong> Rs {contest.ticket}</p>
              <p><strong>Payment Status:</strong> {contest.payment ? 'Paid' : 'Pending'}</p>
              {/* Consider removing or modifying the button below if it’s not needed */}
             
            </div>
          ))
        ) : (
          <p>No contests found.</p>
        )}
      </div>
    </div>
  );
};

export default MyContests;
