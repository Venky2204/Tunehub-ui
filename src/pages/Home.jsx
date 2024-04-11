import { Link } from 'react-router-dom'
import './Home.css';
import tunehub_bg2 from '../images/bg2.jpg';

export default function Home() {

  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   // Trigger animation after a delay
  //   const timeout = setTimeout(() => {
  //     setAnimate(true);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, []);

  // useEffect(() => {
  //   const audio = new Audio({slideSound}); // Replace 'sound.mp3' with the path to your audio file
  //   audio.play();

  //   // Clean up function to stop playing the audio when component unmounts
  //   return () => {
  //     audio.pause();
  //     audio.currentTime = 0;
  //   };
  // }, []);

  return (
    // <div className={`background ${animate ? 'animate' : ''}`}>
    <div >
      <div className='header'></div>
      <div className='footer'></div>
      <div className='logo'>TUNEHUB</div>
      <div className='wall'>
        <div className='speaker1'>
          <div className='speakerInside'></div>
        </div>
        <div className='speaker2'>
          <div className='speakerInside'></div>
        </div>
      </div>
      <img src={tunehub_bg2} className='homebg' alt='Not found'/>
          <div className='lr'>
            <Link to="/login">Login</Link>
            <Link to="/registration">Register</Link>
          </div>
    </div>
  )
}
