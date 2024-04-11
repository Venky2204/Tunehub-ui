import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const AddPlaylist = () => {
    const [songsData,setSongsData] = useState([]);
    const [name,setName] = useState('');
    const [songsIds,setSongsIds] = useState([]);
    const [list,setList] = useState([]);

    useEffect( () => {
      axios.get('http://localhost:8080/displaysongs')
      .then(response => setSongsData(response.data))
      .catch(error => console.error(error));
    } , []);

    const [songs,setSongs] = useState([]);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
        
    };
    const checkChangeHandler = (event,id) => {
        if(event.target.checked){
            setSongsIds([...songsIds,id]);
        }else{
            setSongsIds(songsIds.filter(item => item !== id));
        }
        
    }

    // useEffect(()=>{
        
    // },[songs])
   
    const [allOk,setAllOk] = useState('');
    useEffect( () => {
        sendData();
     },[allOk])
    
    const addSongsIdsToList = (e) => {
        e.preventDefault();
        setList([...list,...songsIds]);
        setSongsIds([]);
    
        console.log(songsData);
        console.log(songsIds);
        setSongs(songsData.filter(songData => songsIds.includes(songData.id)));
        if(name === ''){
            return alert("Enter name");
        }else{
           setAllOk('All OK');
        }
    }
    
var [response,setResponse] = useState();
const navigate = useNavigate();

const sendData = async () => {
    var count = 0;
    if(songs.length === 0 && count === 1){
        return alert('select songs');
    }
    count = count +1;
    console.log('songs:',songs);
    console.log(songs.length);
    console.log(name);
    
    
    if(response !== undefined){
        response =  await axios.post('http://localhost:8080/addplaylist',{name,songs});
        if(response.data === "Playlist added successfully"){
            alert(response.data);
            navigate('/adminHome');
        }else{
            alert(response.data);
        }
    }
    
    setResponse('.');
    // navigate("/adminHome");
   
}

  return (
    <div>
        <fieldset className='apFieldset'>
            <legend>AddPlaylist</legend>
        <form onSubmit={addSongsIdsToList}>
        <label>Playlist Name:</label> <input type="text" name="name" value={name} onChange={nameChangeHandler}></input>
        <br></br><br></br>
        
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Artist</th>
                <th></th>
                <th>Select songs</th>
                </tr>
            </thead>
            <tbody>
                {songsData.map(song => (
                    <tr key={song.id}>
                        <td>{song.name}</td>
                        <td>{song.artist}</td>
                        <td><img src={song.image} alt='Not found'/></td>
                        <td><input type='checkbox'  checked={songsIds.includes(song.id)} name="songs" onChange={(event) => checkChangeHandler(event,song.id)} ></input></td>
                    </tr>
                ))}
            </tbody> 
            </table>
            <br></br>
            {/* <p style={{textAlign:"center"}}>{msg}</p> */}
        <input type='submit'></input>
        </form>
        </fieldset>
    </div>
  )
}

export default AddPlaylist