import React from 'react';
import axios from 'axios'; // You can use Axios for making HTTP requests
import { useNavigate } from 'react-router-dom';

const Pay = () => {
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const email = searchParams.get('email') || 'Default message';
  const navigate = useNavigate();
  const createOrder = async () => {
    var email = localStorage.getItem("email")
    console.log(email);
    try {
      const response = await axios.post('http://localhost:8080/createOrder',{email});

      const order = response.data;
      const options = {
        "key": "rzp_test_jrdXfvB0AGKBI5",
        "amount": order.amount_due.toString(),
        "currency": "INR",
        "name": "Tune Hub",
        "description": "Test Transaction",
        "order_id": order.id,
        "prefill": {
          "name": "Your Name",
          "email": "test@example.com",
          "contact": "9999999999"
        },
        "notes": {
          "address": "Your Address"
        },
        "theme": {
          "color": "#F37254"
        },
        "handler": function(response) {
          // verifyPayment(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature);
          paymentDone(email);
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error:", error);
      // Handle error appropriately (e.g., display an error message to the user)
    }
  };

  const paymentDone = async (email) => {
    const res = await axios.post('http://localhost:8080/paymentsuccess',{email});
          console.log('res: ',res);
          alert("Payment-success");
          navigate('/customerHome?status=customerHomePremium');
  }
  // const verifyPayment = async (orderId, paymentId, signature) => {
  //   try {
  //     const response = await axios.post("http://localhost:8080/verify", {
  //       orderId,
  //       paymentId,
  //       signature
  //     });
  //     if (response.data.isValid) {
  //       alert("Payment successful");
  //       // Redirect to payment success page using React Router
  //       // history.push('/payment-success');
  //     } else {
  //       alert("Payment failed");
  //       // Redirect to payment failure page using React Router
  //       // history.push('/payment-failure');
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // Handle error appropriately (e.g., display an error message to the user)
  //   }
  // };

  const handlePayButtonClick = () => {
    createOrder();
  };

  return (
    <button className="buy-button" onClick={handlePayButtonClick}>Pay</button>
  );
}

export default Pay;
