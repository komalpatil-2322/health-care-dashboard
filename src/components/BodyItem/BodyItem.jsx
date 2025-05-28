import React from "react";
import "./BodyItem.css";

const BodyItem = ({
  image = "",
  title = "",
  date = "",
  progress = 0,
  progressColor = "#3734a9",
}) => {
  return (
    <div className="body-item">
      <div className="bi-head">
        <img src={image} alt="body-item" className="bih-image" />
        <div className="bih-title">{title}</div>
      </div>
      <div className="bi-date">{date}</div>
      <div className="bi-progress">
        <div
          className="bip-progress"
          style={{ width: `${progress}%`, backgroundColor: progressColor }}
        ></div>
      </div>
    </div>
  );
};

export default BodyItem;
