import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.jpg";
import { FaVolumeMute, FaVolumeUp, FaPlay } from "react-icons/fa";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };
  const handlePlayButtonClick = () => {
    setShowSlider(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
  };
  return (
    <div className="App">
      <div className={`background ${showSlider ? "paused" : ""}`}>
        <div className="content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <div className="company-name">Cloudifyapp Pvt.Ltd</div>

          <div className="person-name">By Devika Nakulan</div>
          <div className="mute-icon" onClick={handleToggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </div>
          <div className="main-content">
            <h1 className="title">
              Addition and Subtraction<br></br> Facts within 20
            </h1>
            <p className="description">
              Test your Knowledge with the following questions, tap a card to{" "}
              <br></br> flip it and uncover the answer, good luck!
            </p>
            <button className="play-button" onClick={handlePlayButtonClick}>
              <div className="circle">
                <FaPlay className="play-icon" />
              </div>
              Lets Play
            </button>

          </div>
          <Footer/>
        </div>
        {showSlider && <Slider onClose={handleCloseSlider} />}
      </div>
    </div>
  );
}

export default App;
