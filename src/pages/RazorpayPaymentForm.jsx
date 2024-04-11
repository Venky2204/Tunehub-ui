// import React, { useState } from 'react';
// import useRazorpay from "react-razorpay";


// const RazorpayPaymentForm = () => {
//     const [paymentSuccess, setPaymentSuccess] = useState(false);
//     const [paymentError, setPaymentError] = useState(null);

//     const { open } = useRazorpay({
    
//         key: 'rzp_test_7eziogvXP83uex',
//         amount: 1000, // Amount in paise
//         currency: 'INR',
//         name: 'Your Company Name',
//         description: 'Purchase Description',
//         prefill: {
//           name: 'John Doe',
//           email: 'john@example.com',
//           contact: '9876543210'
//         },
//         handler: (response) => {
//           console.log('Payment success:', response);
//           // Handle successful payment
//         },
//         onError: (error) => {
//           console.error('Payment error:', error);
//           // Handle payment error
//         }
//       });
      

//     return (
//         <div>
//             {paymentSuccess ? (
//                 <div style={{color:"white"}}>
//                     <h2>Payment Successful!</h2>
//                     <p>Thank you for your payment.</p>
//                 </div>
//             ) : (
//                 <div style={{color:"white"}}>
//                     <h2>Make Payment</h2>
//                     <button onClick={open}>Pay Now</button>
//                     {paymentError && <p>Error: {paymentError.message}</p>}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RazorpayPaymentForm;
