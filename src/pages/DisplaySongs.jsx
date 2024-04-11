import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplaySongs = () => {
   
    const [songs,setSongs] = useState([]);

    useEffect( () => {
      axios.get('http://localhost:8080/displaysongs')
      .then(response => setSongs(response.data))
      .catch(error => console.error(error));
    } , []);

  return (
    <div>
        <h1>List of Songs</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(song => (
                  <tr key={song.id}>
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
              ))}
          </tbody> 
        </table>
    </div>
  );
}

export default DisplaySongs