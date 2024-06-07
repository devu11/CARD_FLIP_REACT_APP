import React from "react";
import { FaRedo } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import "./CheckBox.css";

function CheckBox({ onPlayAgain, onClose }) {
  const handlePlayAgainClick = () => {
    onPlayAgain();
    onClose();
  };

  return (
    <div className="completion-message-container">
      <div className="tick-circle">
        <div className="tick">
          <TiTick className="tick-icon" />
        </div>
      </div>
      <div className="completion-message-text">
        Hope you learned something new!
      </div>
      <button className="play-again-button" onClick={handlePlayAgainClick}>
        <FaRedo style={{ marginRight: "5px" }} />
        Play Again
      </button>
    </div>
  );
}

export default CheckBox;
