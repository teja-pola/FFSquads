import React, { useState, useEffect, useContext } from 'react';
import './TeamRegister.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';

const TeamRegister = () => {
  const { token, url } = useContext(Context);

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const roomId = queryParams.get('roomId');
  const ticket = queryParams.get('ticket');
  const EventDate = queryParams.get('EventDate'); 
  const time = queryParams.get('time');
  const map = queryParams.get('map');


  const [teamData, setTeamData] = useState({
    teamName: '',
    teamLeader: {
      name: '',
      phone: '',
      freeFireId: '',
    },
    teamMembers: [
      { name: '', freeFireId: '' },
      { name: '', freeFireId: '' },
      { name: '', freeFireId: '' },
    ],
  });

  useEffect(() => {
    if (!token) {
      navigate('/login');
      alert('Please login');
    }
  }, [token, navigate]);

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index === null) {
      setTeamData(prevData => ({
        ...prevData,
        teamLeader: { ...prevData.teamLeader, [name]: value },
      }));
    } else {
      const members = [...teamData.teamMembers];
      members[index][name] = value;
      setTeamData(prevData => ({ ...prevData, teamMembers: members }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      roomId: roomId || '',
      EventDate: EventDate || " ",
      time: time || '',
      map: map || '',
      ticket: ticket || '',
      teamDetails: teamData,
    };
    
    try {
      const response = await axios.post(`${url}/api/registration/register`, registrationData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert(`Registration failed: ${response.data.message}`);
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='team-register-container'>
      <h2>Team Registration</h2>
      <form onSubmit={handleSubmit} className='team-register-form'>
        <div className='form-group'>
          <label htmlFor='roomId'>Room ID</label>
          <input
            type='text'
            id='roomId'
            name='roomId'
            value={roomId || ''}
            readOnly
          />
        </div>
        <div className='form-group'>
          <label htmlFor='ticket'>Ticket</label>
          <input
            type='text'
            id='ticket'
            name='ticket'
            value={ticket ? `Rs ${ticket}` : ''}
            readOnly
          />
        </div>
        <div className='form-group'>
          <label htmlFor='EventDate'>Date</label>
          <input
            type='text'
            id='EventDate'
            name='EventDate'
            value={EventDate || ''}
            readOnly
          />
        </div>
        <div className='form-group'>
          <label htmlFor='time'>Time</label>
          <input
            type='text'
            id='time'
            name='time'
            value={time || ''}
            readOnly
          />
        </div>
        <div className='form-group'>
          <label htmlFor='map'>Map</label>
          <input
            type='text'
            id='map'
            name='map'
            value={map || ''}
            readOnly
          />
        </div>
        <div className='form-group'>
          <label htmlFor='teamName'>Team Name</label>
          <input
            type='text'
            id='teamName'
            name='teamName'
            value={teamData.teamName}
            onChange={(e) => setTeamData(prevData => ({ ...prevData, teamName: e.target.value }))}
            required
          />
        </div>
        <div className='form-group'>
          <h3>Team Leader Details</h3>
          <label htmlFor='leaderName'>Name</label>
          <input
            type='text'
            id='leaderName'
            name='name'
            value={teamData.teamLeader.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor='leaderPhone'>Phone Number</label>
          <input
            type='tel'
            id='leaderPhone'
            name='phone'
            value={teamData.teamLeader.phone}
            onChange={handleInputChange}
            required
          />
          <label htmlFor='leaderFreeFireId'>Free Fire ID</label>
          <input
            type='text'
            id='leaderFreeFireId'
            name='freeFireId'
            value={teamData.teamLeader.freeFireId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form-group'>
          <h3>Other Team Members</h3>
          {teamData.teamMembers.map((member, index) => (
            <div key={index} className='team-member'>
              <label htmlFor={`memberName${index}`}>Name</label>
              <input
                type='text'
                id={`memberName${index}`}
                name='name'
                value={member.name}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
              <label htmlFor={`memberFreeFireId${index}`}>Free Fire ID</label>
              <input
                type='text'
                id={`memberFreeFireId${index}`}
                name='freeFireId'
                value={member.freeFireId}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
            </div>
          ))}
        </div>
        <button type='submit' className='submit-btn'>
          PROCEED TO PAYMENT
        </button>
      </form>
    </div>
  );
};

export default TeamRegister;
