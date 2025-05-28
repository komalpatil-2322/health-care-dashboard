import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = ({ data = {}, style = {} }) => {
  return (
    <div
      className={"appointment-card " + (data?.active ? " active" : "")}
      style={style}
    >
      <div className="appointment-card-header">
        <div className="appointment-card-header-title">{data.title}</div>
        <div className="appointment-card-header-icon">{data.icon}</div>
      </div>
      <div className="appointment-time">{data.time}</div>
      <div className="appointment-doctor">{data.doctor}</div>
    </div>
  );
};

export default AppointmentCard;
