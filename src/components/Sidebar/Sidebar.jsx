import React, { useState } from "react";
import "./Sidebar.css";

import {
  SettingsRounded,
  GridViewRounded,
  HistoryRounded,
  CalendarMonthRounded,
  EventRounded,
  BarChartRounded,
  ChatRounded,
  CallRounded,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [activeHam, setActiveHam] = useState(false);
  const sidebarItems = [
    {
      content: "General",
      items: [
        {
          icon: <GridViewRounded />,
          text: "Dashboard",
        },
        {
          icon: <HistoryRounded />,
          text: "History",
        },
        {
          icon: <CalendarMonthRounded />,
          text: "Calendar",
        },
        {
          icon: <EventRounded />,
          text: "Appointments",
        },
        {
          icon: <BarChartRounded />,
          text: "Statistics",
        },
      ],
    },
    {
      content: "Tools",
      items: [
        {
          icon: <ChatRounded />,
          text: "Chat",
        },
        {
          icon: <CallRounded />,
          text: "Support",
        },
      ],
    },
  ];
  return (
    <aside className="sidebar">
      <h2>
        <span>Health</span>care.
      </h2>

      <div className="sidebar-burger" onClick={() => setActiveHam((ps) => !ps)}>
        <MenuIcon />
      </div>
      <nav className={activeHam ? "active" : ""}>
        <div className="nav-box">
          {sidebarItems.map((item, index) => (
            <List
              activeTab="Dashboard"
              key={index}
              label={item.content}
              items={item.items}
            />
          ))}
        </div>
        <ul className="nav-setting">
          <SidebarItem icon={<SettingsRounded />}>Setting</SidebarItem>
        </ul>
      </nav>
    </aside>
  );
};

const SidebarItem = ({ children, icon = <></>, active = false }) => {
  return (
    <li className={"sidebar-item" + (active ? " active" : "")}>
      {icon}
      {children}
    </li>
  );
};

const List = ({ label = "", items = [], activeTab = "" }) => {
  return (
    <div className={"sidebar-nav-list"}>
      {label && <h3 className="sidebar-nav-label">{label}</h3>}
      <ul>
        {items.map((item, index) => (
          <SidebarItem
            active={activeTab === item.text}
            key={`item-${index}`}
            icon={item.icon}
          >
            {item.text}
          </SidebarItem>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
