import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './Profile.css';
import { Context } from '../../context/Context.jsx';

const Profile = () => {
  const { token } = useContext(Context);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserInfo(response.data.user);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (token) {
      fetchUserInfo();
    }
  }, [token]);

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <div className="profile-details">
        <img src="profile_icon.png" alt="" />
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        
        
      </div>
    </div>
  );
};

export default Profile;
