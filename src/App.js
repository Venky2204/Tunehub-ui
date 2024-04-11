import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import CustomerHome from "./pages/CustomerHome";
import AdminHome from "./pages/AdminHome";
import Home from "./pages/Home";
import Navbar from './pages/Navbar';
import DisplaySongs from "./pages/DisplaySongs";
import DisplayPlaylists from "./pages/DisplayPlaylists";
import AddSong from "./pages/AddSong";
import AddPlaylist from "./pages/AddPlaylist";
import Pay from "./pages/Pay";

function App() {
  
  return (
   <div className="body">
    <Navbar/>
    <div className="content">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/customerHome" exact element={<CustomerHome />} />
          <Route path="/adminHome" exact element={<AdminHome />} />
          <Route path="/displaySongs" exact element={<DisplaySongs />} />
          <Route path="/displayPlaylists" exact element={< DisplayPlaylists/>} />
          <Route path="/addSong" exact element={< AddSong/>} />
          <Route path="/addPlaylist" exact element={< AddPlaylist/>} />
          <Route path="/pay" exact element={< Pay/>} />
          
        </Routes>
      </Router> 
    </div>
   </div>
  );
}

export default App;
