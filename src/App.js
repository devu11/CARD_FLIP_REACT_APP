import React, { useState } from "react";
import "./App.css";
import logo from "./images/logo.jpg";
import { FaVolumeMute, FaVolumeUp, FaPlay, FaCheck } from "react-icons/fa";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isBackgroundAnimationPaused, setIsBackgroundAnimationPaused] =
    useState(false);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handlePlayButtonClick = () => {
    setShowSlider(true);
    setIsBackgroundAnimationPaused(true);
  };

  const handleCloseSlider = () => {
    setShowSlider(false);
    setIsBackgroundAnimationPaused(false);
  };

  const handleAnimationChange = (animating) => {
    setIsAnimating(animating);
  };

  return (
    <div className="App">
      <div
        className={`background ${
          isAnimating && !isBackgroundAnimationPaused && !showSlider
            ? ""
            : "paused"
        }`}
      >
        <div className="content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="company-name">Cloudifyapp Pvt.Ltd</div>
          <div className="person-name">By Devika Nakulan</div>
          <div className="mute-icon" onClick={handleToggleMute}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </div>
          <div className={`main-content ${showSlider ? "hidden" : ""}`}>
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
              Let's Play
            </button>
          </div>
          <Footer />
        </div>
        {showSlider && (
          <Slider
            onClose={handleCloseSlider}
            onAnimationChange={handleAnimationChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;
