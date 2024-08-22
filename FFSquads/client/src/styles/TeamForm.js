import React, { useState } from 'react';
import axios from 'axios';
import './TeamForm.css';

const TeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [players, setPlayers] = useState([{ name: '', mobile: '', ffid: '' }, { name: '', mobile: '', ffid: '' }, { name: '', mobile: '', ffid: '' }]);

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index][field] = value;
    setPlayers(newPlayers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/register', {
        teamName,
        captainName,
        players
      });
      window.location.href = '/payment';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="team-form">
      <h2>Create Your Squad</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Captain Name"
          value={captainName}
          onChange={(e) => setCaptainName(e.target.value)}
          required
        />
        {players.map((player, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Player ${index + 1} Name`}
              value={player.name}
              onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={player.mobile}
              onChange={(e) => handlePlayerChange(index, 'mobile', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Free Fire ID"
              value={player.ffid}
              onChange={(e) => handlePlayerChange(index, 'ffid', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit">Register and Proceed to Payment</button>
      </form>
    </div>
  );
};

export default TeamForm;
