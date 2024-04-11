import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const AddSong = () => {
    const[songData,setSongData] = useState({
        name:'',
        artist:'',
        genre:'',
        link:'',
        image:''
    });
    const {name,artist,genre,link,image} = songData;
    const changeHandler = (e) => {
      setSongData({...songData,[e.target.name]:e.target.value})
    }

    const navigate = useNavigate();
    const [msg,setMsg] = useState('');

    const submitHandler = async (e) => {
      e.preventDefault();

      if(name === ''){
        setMsg('Enter name of the song');
      }else if(link === ''){
        setMsg('Insert link of the Song from the github');
      }else if(!link.includes("raw")){
        setMsg('Insert proper song link from github of raw type');
      }else if(image === ''){
        setMsg('Insert image link from github, then user can identify the song easily');
      }else if(!image.includes("raw") && !image.includes("blob")){
        setMsg('Insert proper image link from github');
      }else{
        const response = await axios.post('http://localhost:8080/addsong',{name,artist,genre,link,image});
        if(response.data === 'Song already exists'){
            setMsg(response.data);
          }else{
            alert(response.data);
            navigate("/adminHome");
          }
        
      }
    };
  return (
    <div>
      
        <fieldset>
          <legend>AddSong</legend>
        <form onSubmit={submitHandler}>
            <label>Song Name:</label>
            <input type="text" name="name" value={name} placeholder="Enter Name of the Song" onChange={changeHandler}></input>
            <br></br><br></br>
            <label>Song Artist:</label>
            <input type="text" name="artist" value={artist} placeholder="Enter Name of the Artist" onChange={changeHandler}></input>
            <br></br><br></br>
            <label>Song Genre:</label>
            <input type="text" name="genre" value={genre} placeholder="Enter Genre" onChange={changeHandler}></input>
            <br></br><br></br>
            <label>Song Link:</label>
            <input type="text" name="link" value={link} placeholder="Enter Link of the Song from github or any source" onChange={changeHandler}></input>
            <br></br><br></br>
            <label>Image Link:</label>
            <input type="text" name="image" value={image} placeholder="Enter Link of the Image from github or any source" onChange={changeHandler}></input>
    
            <p style={{textAlign:"center"}}>{msg}</p>
            <input type="submit"></input>
        </form>
        </fieldset>
    </div>
  )
}

export default AddSong