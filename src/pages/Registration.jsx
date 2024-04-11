import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Registration = () => {

  const[data,setData] = useState(
    {
      username : '',
      email : '',
      password : '',
      gender:'',
      role : '',
      address : ''
    }
    );
    const navigate = useNavigate();
    const [msg,setMsg] = useState('');

    const {username,email,password,gender,role,address} = data;

    const changeHandler = (e) => {
      setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = async (e) => {
      e.preventDefault();
      const isValidUsername = /^[a-zA-Z0-9_]+$/.test(username);
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const isValidNumber = /^\d{10}$/.test(email);

      //check username is valid or not
      if(username === ''){
        return setMsg("Enter username");
      }else if(username.length < 8 || username.length > 30){
          return setMsg("Username should not be more than 25 characters or should not less than 8 characters");
      }else if(!isValidUsername){
        return setMsg("Username should only contains (a-z) or (A-Z) or (_)");
      }

      //check user enters mail or number,and check entered value is valid or not
      if(email === ''){
        return setMsg("Enter Email or Phone number")
      }else if(/\d/.test(email)){
        if(!isValidNumber && !isValidEmail){
          return setMsg("Invalid Phone Number");
        }
     }else{
          return setMsg("Invalid Email");
      }
      
      //check password is valid or not
      if(password.length < 8 || password.length > 25){
        return setMsg("Password should not be more than 25 characters or should not less than 8 characters");
      }

      if(role === ''){
        return setMsg("Select Role as Admin or Customer");
      }
      const response = await axios.post('http://localhost:8080/register',{username,email,password,gender,role,address});
      
      if(response.data === 'Email / Phone number is already exist'){
        setMsg(response.data);
      }else{
        alert(response.data);
        navigate("/");
      }
    };
  return (
    <div>
      <div className="navbar">
      <div className="navbar-container">
        <a href="/" className='back'>Back</a>
        <center>
           <h1 className='lglogo'>TUNEHUB</h1>
        </center>
      </div>
    </div>
	  <fieldset className='signupFieldset'>
	<legend><b>Sign up</b></legend>
	<form onSubmit={submitHandler} >
		<label>Username: </label><input type="text" name="username" value={username} placeholder="Enter Username" onChange={changeHandler}></input>
		<br></br>
		<label >Email or Phone number: </label><input type='text' name="email" value={email} placeholder="Enter your Email address or Phone Number" onChange={changeHandler}></input>
		<br></br>
		<label >Password: </label><input type="password" name="password" value={password} placeholder="Enter Password" onChange={changeHandler}></input>
		<br></br>
		<label >Gender: </label> 
      <table>
        <tr><td>Male</td><td><input type="radio" name="gender" value="m" onChange={changeHandler}></input></td></tr>
        <tr><td>Female</td><td><input type="radio" name="gender" value="f" onChange={changeHandler}></input></td></tr>
        <tr><td>Other</td><td><input type="radio" name="gender" value="o" onChange={changeHandler}></input></td></tr>
      </table>
		<br></br>
		<label >Role: </label> 
      <table>
        <tr><td>Admin</td><td><input type="radio" name="role" value="admin" onChange={changeHandler}></input></td></tr>
        <tr><td>Customer</td><td><input type="radio" name="role" value="customer" onChange={changeHandler}></input></td></tr>
      </table>
		<br></br>
		<label >Address: </label>
		<textarea name="address" rows="3" cols="30" value={address} placeholder="Enter your Address" onChange={changeHandler}></textarea>
		
		<p style={{textAlign:"center"}}>{msg}</p>
		<input type="submit"></input>
	</form>
	</fieldset>
	</div>
  )
}

export default Registration