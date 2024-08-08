import React from "react";
import "./background.css";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import carvideo from "../assets/carvideo.mp4";

const Background = ({ video, counter }) => {
  if (video) {
    return (
      <video src={carvideo} muted autoPlay loop className="bg-car fade"></video>
    );
  } else if (counter === 0) {
    return <img src={car1} alt="car" className={"bg-car fade"} />;
  } else if (counter === 1) {
    return <img src={car2} alt="car" className="bg-car fade" />;
  } else if (counter === 2) {
    return <img src={car3} alt="car" className="bg-car fade" />;
  }
};

export default Background;
