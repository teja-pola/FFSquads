import React from 'react';

const Payment = () => {
  const handlePayment = () => {
    // Here, integrate the UPI payment gateway
    // Redirect to success page once payment is complete
    window.location.href = '/prize';
  };

  return (
    <div className="payment-page">
      <h2>Complete Your Payment</h2>
      <p>Pay using your preferred UPI method (PhonePe, Google Pay, etc.)</p>
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default Payment;
