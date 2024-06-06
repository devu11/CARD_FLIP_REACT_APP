import React, { useState } from "react";
import { FaLessThan ,FaGreaterThan } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 10;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const slidesContent = [
    "Eve has 9 apples and she was given 7 more. How many apples does she have now?",
    "Lucas had 14 candies. He ate 5. How many candies does he have left?",
    "There are 11 cats in a Room. 6 cats leave. How many cats are left in the room?",
    "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now?",
    "Maria had 20 cupcakes. she gave 11 cupcakes to her friends. How many cupcakes does Maria have left?",
    "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?",
    "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total?",
    "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
    "Lisa had 12 balloons, and 7 flew away. How many balloons does Lisa have now?",
    "Michael had $15, and his father gave him $5 more. How much money does Michael have now?"
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="slider-nav prev" onClick={handlePrevClick}>
        <FaLessThan  style={{ fontSize: "15px" }} />
        </button>
        <div className="slider-content">
          <div className={`slider-card ${currentIndex === 0 ? "active" : ""}`}>{slidesContent[0]}</div>
          <div className={`slider-card ${currentIndex === 1 ? "active" : ""}`}>{slidesContent[1]}</div>
          <div className={`slider-card ${currentIndex === 2 ? "active" : ""}`}>{slidesContent[2]}</div>
          <div className={`slider-card ${currentIndex === 3 ? "active" : ""}`}>{slidesContent[3]}</div>
          <div className={`slider-card ${currentIndex === 4 ? "active" : ""}`}>{slidesContent[4]}</div>
          <div className={`slider-card ${currentIndex === 5 ? "active" : ""}`}>{slidesContent[5]}</div>
          <div className={`slider-card ${currentIndex === 6 ? "active" : ""}`}>{slidesContent[6]}</div>
          <div className={`slider-card ${currentIndex === 7 ? "active" : ""}`}>{slidesContent[7]}</div>
          <div className={`slider-card ${currentIndex === 8 ? "active" : ""}`}>{slidesContent[8]}</div>
          <div className={`slider-card ${currentIndex === 9 ? "active" : ""}`}>{slidesContent[9]}</div>
        </div>
        <button className="slider-nav next" onClick={handleNextClick}>
        <FaGreaterThan  style={{ fontSize: "15px" }}/>
        </button>
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default Slider;
