import React, { useState } from 'react';
import axios from 'axios';

const CreateTeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [captain, setCaptain] = useState({ name: '', phoneNumber: '', freeFireId: '' });
  const [players, setPlayers] = useState([
    { name: '', phoneNumber: '', freeFireId: '' },
    { name: '', phoneNumber: '', freeFireId: '' },
    { name: '', phoneNumber: '', freeFireId: '' }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/teams/create-team', {
        teamName,
        captain,
        players
      });

      if (response.data.message === 'Team created successfully!') {
        alert('Team created successfully! Proceed to payment.');
        // Redirect to the payment page here
      }
    } catch (error) {
      console.error('Error creating team:', error);
      alert('There was an error creating the team.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Your Team</h2>
      <div>
        <label>Team Name</label>
        <input type="text" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />
      </div>

      <h3>Captain Details</h3>
      <div>
        <label>Captain Name</label>
        <input type="text" value={captain.name} onChange={(e) => setCaptain({ ...captain, name: e.target.value })} required />
      </div>
      <div>
        <label>Captain Phone Number</label>
        <input type="text" value={captain.phoneNumber} onChange={(e) => setCaptain({ ...captain, phoneNumber: e.target.value })} required />
      </div>
      <div>
        <label>Captain Free Fire ID</label>
        <input type="text" value={captain.freeFireId} onChange={(e) => setCaptain({ ...captain, freeFireId: e.target.value })} required />
      </div>

      {players.map((player, index) => (
        <div key={index}>
          <h4>Player {index + 1} Details</h4>
          <div>
            <label>Player Name</label>
            <input
              type="text"
              value={player.name}
              onChange={(e) => {
                const newPlayers = [...players];
                newPlayers[index].name = e.target.value;
                setPlayers(newPlayers);
              }}
              required
            />
          </div>
          <div>
            <label>Player Phone Number</label>
            <input
              type="text"
              value={player.phoneNumber}
              onChange={(e) => {
                const newPlayers = [...players];
                newPlayers[index].phoneNumber = e.target.value;
                setPlayers(newPlayers);
              }}
              required
            />
          </div>
          <div>
            <label>Player Free Fire ID</label>
            <input
              type="text"
              value={player.freeFireId}
              onChange={(e) => {
                const newPlayers = [...players];
                newPlayers[index].freeFireId = e.target.value;
                setPlayers(newPlayers);
              }}
              required
            />
          </div>
        </div>
      ))}

      <button type="submit">Create Team and Proceed to Payment</button>
    </form>
  );
};

export default CreateTeamForm;
