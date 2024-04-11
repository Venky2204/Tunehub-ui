import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Card';
import './CustomerHome.css';
import SongsInterface from './SongsInterface';

const CustomerHome = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    //get method to retrieve the data
    const status = searchParams.get('status') || 'Default message';
  
    const [inform,setInform] = useState(
      [
        'Search'
      ])
   
    
  return (
    <div className='body'>

          {status === 'customerHomePremium'?(
            <SongsInterface inform={inform} />
          ):(
            
                <a href='/pay' style={{textDecoration:"none",color:"white",fontWeight:"bold",cursor:"pointer",padding:"50px"}}>Get Premium</a>
                
          )}
          {/* <SongsInterface inform={inform} /> */}
    </div>
  )
}

export default CustomerHome