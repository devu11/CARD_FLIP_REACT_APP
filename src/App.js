import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.jpg";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function App() {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className="App">
      <div className="background">
        <div className="content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <div className="company-name">Cloudifyapp Pvt.Ltd</div>

          <div className="person-name">By Devika Nakulan</div>
          <div className="mute-icon" onClick={handleToggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
