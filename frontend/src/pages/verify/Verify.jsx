import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from 'axios';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success") === "true";  // Convert string to boolean
  const registrationId = searchParams.get("registrationId");
  const { url } = useContext(Context);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/registration/verify`, { success, registrationId });
      if (response.data.success) {
        navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Verification error", error);
      alert("An error occurred during registration verification.");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
