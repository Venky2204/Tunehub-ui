import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayPlaylists = () => {
    const [playLists,setPlayLists] = useState([]);

    useEffect( () => {
      fetchData();
    } , []);
    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/viewplaylists');
            setPlayLists(response.data);
            console.log(response.data);
        }catch(error){
            console.log('Error fetching data: ',error);
        }
    };
  return (
    <div>
        <h1>List of Playlists</h1>
        <table border="1px">
          <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Songs</th>
            </tr>
          </thead>
          <tbody>
            {playLists.map(PlayList => (
                  <tr key={PlayList.id}>
                    <td>{PlayList.id}</td>
                    <td>{PlayList.name}</td>
                    <td>
                        {/* <ul>
                            {PlayList.songs ? (
                                PlayList.songs.map((song,index) => {
                                    <li key={index}>
                                        <strong>Name: </strong>{song.name} <strong>link: </strong>{song.link}
                                    </li>
                                })
                            ):(
                                <li>No Songs Available</li>
                            )}
                        </ul> */}
                        {<table >
                            {PlayList.songs ? (
                            PlayList.songs.map((song,index) => (
                            <tr key={index}>
                                <td>{song.name}</td>
                                <td>{song.artist}</td>
                                <td>{song.genre}</td>
                                <td>
                                <audio controls>
                                    <source src={song.link} type="audio/mpeg" />
                                    Your browser does not support the audio tag.
                                </audio>
                                </td>
                            </tr>
                            ))
                            ):(
                                <td>No songs Available</td>
                            )
                            }
                        </table>}
                    </td>
                  </tr>
              ))}
          </tbody> 
        </table>
    </div>
  );
}

export default DisplayPlaylists