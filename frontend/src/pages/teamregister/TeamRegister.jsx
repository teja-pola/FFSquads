import React, { useState } from 'react';
import './TeamRegister.css';
import { useLocation } from 'react-router-dom';

const TeamRegister = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomId = queryParams.get('roomId');
  const ticket = queryParams.get('ticket');

  console.log("Query Params Room ID:", roomId);
  console.log("Query Params Ticket:", ticket);

  const [teamName, setTeamName] = useState('');
  const [teamLeader, setTeamLeader] = useState({
    name: '',
    phone: '',
    freeFireId: '',
  });
  const [teamMembers, setTeamMembers] = useState([
    { name: '', freeFireId: '' },
    { name: '', freeFireId: '' },
    { name: '', freeFireId: '' },
  ]);

  const handleInputChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index === null) {
      setTeamLeader({ ...teamLeader, [name]: value });
    } else {
      const members = [...teamMembers];
      members[index][name] = value;
      setTeamMembers(members);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
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
          <label htmlFor='teamName'>Team Name</label>
          <input
            type='text'
            id='teamName'
            name='teamName'
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
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
            value={teamLeader.name}
            onChange={(e) => handleInputChange(e)}
            required
          />
          <label htmlFor='leaderPhone'>Phone Number</label>
          <input
            type='tel'
            id='leaderPhone'
            name='phone'
            value={teamLeader.phone}
            onChange={(e) => handleInputChange(e)}
            required
          />
          <label htmlFor='leaderFreeFireId'>Free Fire ID</label>
          <input
            type='text'
            id='leaderFreeFireId'
            name='freeFireId'
            value={teamLeader.freeFireId}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <h3>Other Team Members</h3>
          {teamMembers.map((member, index) => (
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
          Register Team
        </button>
      </form>
    </div>
  );
};

export default TeamRegister;
