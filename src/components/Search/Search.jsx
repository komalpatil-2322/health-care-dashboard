import React from "react";
import "./Search.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

const Search = () => {
  return (
    <div className="search-container">
      <SearchRoundedIcon className="sc-search-icon" />
      <input className="sc-input" type="text" placeholder="Search" />
      <NotificationsRoundedIcon className="sc-notification-icon" />
    </div>
  );
};

export default Search;
