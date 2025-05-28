import React from "react";
import "./Calendar.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import calendarData from "../../data/calendarData";
import { Style } from "@mui/icons-material";

const Calendar = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-header-title">January 2025</div>
        <div className="calendar-header-icon">
          <KeyboardBackspaceRoundedIcon />
          <EastRoundedIcon />
        </div>
      </div>
      <div className="calendar-body">
        {calendarData.map((item, index) => (
          <div className="calendar-day" key={`calendar-day-${index}`}>
            <div className="calendar-day-day">{item.day}</div>
            <div className="calendar-day-date">{item.date}</div>
            <div className="calendar-day-active-dates">
              {Array(24)
                .fill("")
                .map((time, index) => (
                  <div
                    className={
                      "calendar-day-active-date " +
                      (item?.activeDates.includes(index + 1) ? "active" : "")
                    }
                    key={`calendar-day-active-date-${item?.day}-${index}`}
                  >
                    {(index + 1).toString().padStart(2, "0")}:00
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
