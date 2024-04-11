import React, { useState } from 'react'
import axios from 'axios';
// import {BrowserRouter, Route, Router} from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import './Credentials.css';

const Login = () => {
    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const [err,setErr] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("email",email);
        const response = await axios.post('http://localhost:8080/validate',{email, password});
        if(response.data === 'adminHome'){
            navigate("/AdminHome");
        }else if(response.data === 'Incorrect Password'){
            setErr(response.data);
        }else if(response.data === 'Email / Phone number not register'){
            setErr(response.data);
        }else{
          console.log(response.data);
          navigate(`/customerHome?status=${response.data}&email=${email}`);
        }
      };

  return (
    <div className='loginform'>
      <div className="navbar">
      <div className="navbar-container">
        <a href="/" className='back'>Back</a>
        <center>
           <h1 className='lglogo'>TUNEHUB</h1>
        </center>
      </div>
    </div>
        <h1>Login</h1>
        <fieldset>
          <legend>Login</legend>
        <form onSubmit={handleSubmit}>
            <label>Email or Phone number: </label>
            <input  type='text'
                    name='email'
                    value={email}
                    placeholder='Enter your email address or Phone number '
                    onChange={(e) => setEmail(e.target.value)}/>
            <br></br><br></br>
            <label>Password: </label>
            <input  type='password'
                    name='password'
                    value={password}
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}/>
            {/* <br></br> */}
            <p style={{textAlign:"center"}}>{err}</p>
            
            <input type='submit' value='LOGIN'/>
         </form>
         </fieldset>
    </div>
  )
}
export default Login
