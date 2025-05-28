import React from "react";
import "./Activities.css";
import activityData, { activityColors } from "../../data/ActivityData";

const Activities = () => {
  return (
    <div className="activities-comp">
      {activityData?.map((item, index) => (
        <div className="activities-item" key={`activity-item-${index}`}>
          <div className="activities-item-items">
            {item.items.map((item, index) => (
              <div
                className="activities-item-item"
                key={`activity-item-${index}`}
              >
                <div
                  className="activities-item-item-bar"
                  style={{
                    height: `${item}%`,
                    backgroundColor: activityColors[index],
                  }}
                ></div>
              </div>
            ))}
          </div>
          <div className="activities-item-day">{item.day}</div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
