import React, { useState } from "react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { LuPointer } from "react-icons/lu";
import "./Slider.css";
import CheckBox from "../CheckBox/CheckBox";

const Slider = ({ onClose, onAnimationChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 10;
  const [isAnimating, setIsAnimating] = useState(true);
  const [isFlipped, setIsFlipped] = useState(Array(totalSlides).fill(false));

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? totalSlides : prevIndex + 1
    );
  };

  const handleCheckBoxDisplay = () => {
    setIsAnimating(false);
    onAnimationChange && onAnimationChange(false);
  };

  const handleCardClick = (index) => {
    setIsFlipped((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const slidesContent = [
    {
      question:
        "Eve has 9 apples and she was given 7 more. How many apples does she have now?",
      answer: "Eve has 16 apples now",
      imageUrl:
        "https://images.smiletemplates.com/uploads/screenshots/225/0000225218/powerpoint-template-450w.jpg",
    },
    {
      question:
        "Lucas had 14 candies. He ate 5. How many candies does he have left?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEUALzAYt_bng5yAaoxcOFnsfhYBLNikXvw&s",
    },
    {
      question:
        "There are 11 cats in a Room. 6 cats leave. How many cats are left in the room?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQFEKBRSSpy3Ia63UKOuitHfFKDf-ZjeBzg&s",
    },
    {
      question:
        "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://qph.cf2.quoracdn.net/main-qimg-45a3e6d0bb04e1553f8012c3c2630aa4",
    },
    {
      question:
        "Maria had 20 cupcakes. she gave 11 cupcakes to her friends. How many cupcakes does Maria have left?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://i.pinimg.com/736x/f8/79/24/f87924c02b0bfd30408f807cda1e820f.jpg",
    },
    {
      question:
        "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://png.pngtree.com/background/20230425/original/pngtree-young-asian-boy-watching-a-gold-fish-in-aquarium-child-care-picture-image_2469015.jpg",
    },
    {
      question:
        "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcztczDu3x-yKHUpdrf1_2KUN6Hv4X0oj7NXvJK885yJCSe2PyBdGHOOSgeX5mi_9k9DE&usqp=CAU",
    },
    {
      question:
        "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://media.istockphoto.com/id/1173921957/photo/cute-little-boy-eating-apple-took-it-from-the-box-full-of-red-apples-picked-up-in-garden.jpg?s=612x612&w=0&k=20&c=6FZXJX4KTJW5xlIlENAwg4sW6Ljq94qvw_oNAS_gXD8=",
    },
    {
      question:
        "Lisa had 12 balloons, and 7 flew away. How many balloons does Lisa have now?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://static.vecteezy.com/system/resources/previews/001/181/654/original/two-women-holding-balloons-vector.jpg",
    },
    {
      question:
        "Michael had $15, and his father gave him $5 more. How much money does Michael have now?",
      answer: "Lucas has 9 candies left",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/6363db420959d00d5a306878/1687320991734-LM69JTJHXBSUN49M9F4T/Kids+counting+money.jpg",
    },
  ];

  return (
    <div className="slider-container">
      {currentIndex < totalSlides && (
        <div className="pagination">
          <span className="slide-number">
            {currentIndex + 1} / {totalSlides}
          </span>
          <div className="dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>
      )}
      {currentIndex < totalSlides ? (
        <div className="slider">
          <button
            className="slider-nav prev"
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            <FaLessThan style={{ fontSize: "15px" }} />
          </button>
          <div className="slider-content">
            {slidesContent.map((content, index) => (
              <div
                key={index}
                className={`slider-card ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`card-inner ${isFlipped[index] ? "flipped" : ""}`}
                >
                  <div className="card-front">
                    <p>{content.question}</p>
                    <div className="tap-to-reveal">
                      <LuPointer className="pointer" />
                      <span>Tap to reveal answer</span>
                    </div>
                  </div>
                  <div className="card-back">
                    <img src={content.imageUrl} alt="Answer" />
                    <p>{content.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="slider-nav next"
            onClick={handleNextClick}
            disabled={currentIndex === totalSlides}
          >
            <FaGreaterThan style={{ fontSize: "15px" }} />
          </button>
        </div>
      ) : (
        <CheckBox
          onPlayAgain={() => setCurrentIndex(0)}
          onClose={onClose}
          onAnimationChange={handleCheckBoxDisplay}
        />
      )}
      {onAnimationChange && onAnimationChange(isAnimating)}
    </div>
  );
};

export default Slider;
