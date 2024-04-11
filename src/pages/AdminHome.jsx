import React, { useState } from 'react'
import './AdminHome.css';
import SongsInterface from './SongsInterface';

export default function AdminHome() {
  const [inform,setInform] = useState(
    [
      <a href='/addSong'>Add a New Song</a>,
      <a href='/addPlaylist'>Add a New PlayList</a>,
      'Search'
    ])
  return (
    <div>
 			  {/* <div className='inform'> */}
          {/* <div className='informAnchor'><a href="/addSong">Click here to Add a New Song</a></div> */}
          {/* <div className='informAnchor'><a href="displaySongs">Click here to View all Songs</a></div> */}
          {/* <div className='informAnchor'><a href="/addPlaylist">Click here to Create PlayList</a></div> */}
          {/* <div className='informAnchor'><a href="/customerHome">Click here to view Songs</a></div> */}
          {/* <div className='informAnchor'><a href="displayPlaylists">Click here to view all Playlists</a></div> */}
        {/* </div> */}
        <SongsInterface inform={inform}/>
        
    </div>
  )
}
