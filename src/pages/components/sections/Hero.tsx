import "../../../assets/css files/App.css";
import { useEffect, useState } from "react";
import "../../../assets/css files/HeroSlider.css";
import imageSlide from "../../../assets/typeScript Files/HeroSection-data";

export default function Hero() {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentState]);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundSize: "cover",
    // backgroundRepeat:'no-repeat',
    backgroundPosition: "center",
    // backgroundAttachment:'fixed',
    height: "100vh",
    // width:'100vw'
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <div className="container-style">
      <div style={bgImageStyle}>
        {" "}
        <div className="description">
          
            <h1>Welcome HOME</h1>
          {/* <div className="carousel">
            {imageSlide.map((imageSlide, currentState) => (
              <span
                className="primary-background"
                key={currentState}
                onClick={() => goToNext(currentState)}
              ></span>
            ))}
          </div> */}
          </div>
        </div>
        </div>

     
  
  );
}
