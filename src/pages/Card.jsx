import { useEffect, useRef, useState } from 'react';
import './Card.css';

function App({songdetails}) {
  
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1); // Default volume is 1 (100%)
    const [volume2,setVolume2] = useState(volume);
    const [isMute,setIsmute] = useState(false);
    const [playpause,setPlaypause] = useState('play_arrow');
    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setPlaypause('play_arrow');
        } else {
            audioRef.current.play();
            setPlaypause('pause');
        }
        setIsPlaying(!isPlaying);
    };
    const muteUnmute = () => {
      if (volume >= 0.0001) {
          setVolume2(volume);
          setVolume(0);
          audioRef.current.volume = 0;
          setIsmute(true);
      } else {
          setVolume(volume2);
          audioRef.current.volume = volume2;
          setIsmute(false);
      }
  };
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const handleTimeSeek = (e) => {
        const newTime = e.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    setVolume2(volume);
    
  };
  
  function changeSize() {
    var card = document.getElementById("card");
    var currentWidth = card.offsetWidth;
    var currentHeight = card.offsetHeight;
    
    // Change size based on current size
    if(currentWidth === 400 && currentHeight === 500) {
      card.style.width = "200px";
      card.style.height = "300px";
    }else {
      card.style.width = "400px";
      card.style.height = "500px";
    }
  }
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(songdetails);
  useEffect(() => {
    if (songdetails !== currentSong) {
      setPlaypause('pause');
      setCurrentSong(songdetails);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
      }
      
    }
   
  }, [songdetails]);

  
  return (
    <div className='body'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <div className="card" id='card'>
      <i className="material-symbols-outlined"id='drop_down' onClick={changeSize}>arrow_drop_down</i>
        <div className="cardHead">
          <div className="image">
            <img src={currentSong.image} alt="songs" />
          </div>
          <div className="details">
              <ul>
                <li>{songdetails.name}</li>
                <li>{songdetails.artist}</li>
                <li>{songdetails.genre}</li>
              </ul>
          </div>
        </div>
          <div className="audio-player">
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate}>
              <source src={currentSong.link} type="audio/mpeg" />
                  Your browser does not support audio files
            </audio>
            <div className="controls">
            
                <div className='playpause'>
                  <span className="material-symbols-outlined">skip_previous</span>
                  <button className='playpausebutton' onClick={handlePlayPause}>
                      {/* {isPlaying ? <span class="material-symbols-outlined">pause</span> : <span class="material-symbols-outlined">play_arrow</span>} */}
                      {<span className="material-symbols-outlined">{playpause}</span>}
                  </button>
                  <span className="material-symbols-outlined">skip_next</span>
                </div>
                <input
                    type="range"
                    value={currentTime}
                    min="0"
                    max={duration || 0}
                    onChange={handleTimeSeek}
                    className='songrange'
                />
                <span>{formatTime(currentTime)}</span>
                <div className='volumecontrol'>
                  <span onClick={muteUnmute} className='volumesym'>{isMute ? <span className="material-symbols-outlined volume">volume_off</span> : <span className="material-symbols-outlined volume">volume_up</span>}</span>
                  <input
                      type="range"
                      value={volume}
                      min="0"
                      max="1"
                      step="0.01"
                      onChange={handleVolumeChange}
                      className='songvolume'
                  />
                  <span>{Math.ceil(volume*10)}</span>
                </div>
            </div>
          </div>
      </div>
      
      
    </div>
  );
}

export default App;