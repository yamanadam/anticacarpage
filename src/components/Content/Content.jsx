import React from "react";
import "./content.css";
import { FaPlayCircle } from "react-icons/fa";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { TbPlayerRecord } from "react-icons/tb";

const Content = ({ video, setVideo, counter, setCounter, text }) => {
  return (
    <div className="content-container">
      <div className="text">
        <p>{text.text1}</p>
        <p>{text.text2}</p>
      </div>

      <div className="icon">
        {video ? (
          <TbPlayerPauseFilled
            onClick={() => setVideo(!video)}
            size={50}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FaPlayCircle
            onClick={() => setVideo(!video)}
            size={50}
            style={{ cursor: "pointer" }}
          />
        )}

        <TbPlayerRecord
          style={{ cursor: "pointer" }}
          onClick={() => setCounter(0)}
          size={20}
          className={counter === 0 && video === false && "orange"}
        />
        <TbPlayerRecord
          style={{ cursor: "pointer" }}
          onClick={() => setCounter(1)}
          size={20}
          className={counter === 1 && "orange"}
        />
        <TbPlayerRecord
          style={{ cursor: "pointer" }}
          onClick={() => setCounter(2)}
          size={20}
          className={counter === 2 && "orange"}
        />
      </div>
    </div>
  );
};

export default Content;
