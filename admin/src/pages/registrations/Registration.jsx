import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Registrations.css";

const Registration = ({ url }) => {
  const [registration, setRegistration] = useState([]);

  const fetchAllRegistrations = async () => {
    const response = await axios.get(url + "/api/registration/list");
    if (response.data.success) {
      setRegistration(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchAllRegistrations();
  }, []);

  // Group registrations by roomId
  const groupedRegistrations = registration.reduce((acc, reg) => {
    if (!acc[reg.roomId]) {
      acc[reg.roomId] = [];
    }
    acc[reg.roomId].push(reg);
    return acc;
  }, {});

  return (
    <div className="registration-container">
      <h3>Registration Page</h3>
      <div className="registration-list">
        {Object.keys(groupedRegistrations).map((roomId, index) => (
          <div key={index} className="room-group">
            <h4>Room ID: {roomId}</h4>
            {groupedRegistrations[roomId].map((reg, regIndex) => (
              <div key={regIndex} className="registration-item">
                <p><strong>Team Name:</strong> {reg.teamDetails.teamName}</p>
                <p><strong>Team Leader:</strong> {reg.teamDetails.teamLeader.name}</p>
                <p><strong>Team Leader Ph No:</strong> {reg.teamDetails.teamLeader.phone}</p>
                <p><strong>Ticket:</strong> {reg.ticket}</p>
                <p><strong>Date:</strong> {reg.EventDate}</p>
                <p><strong>Payment Status:</strong> {reg.payment ? "Paid" : "Pending"}</p>
                <div className="team-members">
                  <p><strong>Team Members:</strong></p>
                  <ul>
                    {reg.teamDetails.teamMembers.map((member, memberIndex) => (
                      <li key={memberIndex}>
                        {member.name} (Free Fire ID: {member.freeFireId})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registration;
