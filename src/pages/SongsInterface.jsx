import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './SongsInterface.css';
import Card from './Card';

const SongsInterface = (props) => {
    
    const [playLists,setPlayLists] = useState([]);
    const [songs,setSongs] = useState([
      { id: 1, name: 'Item 1', genre: 'Genre 1' },
      { id: 2, name: 'Item 2', genre: 'Genre 2' },
      { id: 3, name: 'Item 3', genre: 'Genre 3' }
    ]);

    useEffect( () => {
      fetchData();
    } , []);
    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8080/viewplaylists');
            setPlayLists(response.data);
        }catch(error){
            console.log('Error fetching data: ',error);
        }
    };

    const songsHandler = (getSongs) => {
      setSongs(getSongs);
    };

    const [song,setSong] = useState(
      {name: 'Tarun Gadi Raagam',
       artist:'Tarun',
       genre: 'Global',
       link:  'https://github.com/Venky2204/Audio-Files/raw/main/tarun.opus',
       image: 'https://github.com/Venky2204/Tunehub-Images/blob/main/tarun.jpg?raw=true'
      }
    );
    const cardHandler = (fetchedSong) => {
      setSong(fetchedSong);
      // <Card songdetails={fetchedSong} />;
    };
    
  return (
    <div className='body'>
          <div className='full'>
          <div className='home' >
              <div className='homePage'>
                    <ul>
                        <li>Profile</li>
                    </ul>
                {
                    props.inform.map((inform,index)=>(
                        <ul>
                            <li key={props.inform[index]}>{props.inform[index]}</li>
                        </ul>
                    ))
                }
              </div>
              <div className='playlist'>
                <h2>Albums</h2>
                  <table>
                    <tbody>
                      {playLists.map(PlayList => (
                        <tr key={PlayList.id} onClick={() => songsHandler(PlayList.songs)} >
                          <td >{PlayList.songs.map((song,index) =>{
                                if(index === 0){
                                  return <img  alt='Not found' src={song.image}/>
                                }
                                return null;
                            })}
                          </td>
                          <td key={PlayList.id}>{PlayList.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
          </div>
          <div className='songCard'>
                <div className='cardref'>
                  <Card songdetails={song}/>
                  </div>
                <div className='songs'>
                <table className='songsTable'>
                  <thead>
                    <th>Name</th>
                    <th>Artist</th>
                  </thead>
                  <tbody>
                    {songs.map(song => (
                      <tr key={song.id} onClick={() => cardHandler(song)}>
                        <td>{song.name}</td>
                        <td>{song.artist}</td>
                        {/* <td>
                          <audio controls>
                              <source src={song.link} type="audio/mpeg" />
                              Your browser does not support the audio tag.
                          </audio>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
          </div>
          <div className='allSongs'>
              <div>
              <h2>All Songs</h2>
                  <table>
                    <tbody>
                      {playLists.map(PlayList => (
                          PlayList.songs.map(song => (
                            <tr key={song.id} onClick={() => cardHandler(song)}>
                              <td><img src={song.image} alt='Not found'/></td>
                              <td>{song.name}</td>
                            </tr>
                          ))
                      ))}
                    </tbody>
                  </table>
              </div>
          </div>
          </div>
    </div>
  )
}

export default SongsInterface