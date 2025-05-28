import React from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { PersonRounded } from "@mui/icons-material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Search from "../../components/Search/Search";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MuscleSkeleton from "../../assets/muscle-skeleton.png";
import Bone from "../../assets/bone.png";
import Lung from "../../assets/lung.png";
import Tooth from "../../assets/tooth.png";
import BodyItem from "../../components/BodyItem/BodyItem";
import healthData from "../../data/healthData";
import Activities from "../../components/Activities/Activities";
import {
  appointmentsData,
  doctorsData,
} from "../../data/upcommingAppointments";
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import Calendar from "../../components/Calendar/Calendar";

function Home() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content-wrapper">
        <main className="main-content">
          <div className="mc-header">
            <Search />
          </div>
          <div className="mc-header-title">
            <h1 className="mcht-title">Dashboard</h1>
            <div className="mcht-subtitle">
              This week <KeyboardArrowDownRoundedIcon />
            </div>
          </div>
          <div className="mc-body">
            <div className="mc-main">
              <div className="mc-main-box">
                <img src={MuscleSkeleton} alt="muscle-skeleton" />

                <div className="mcmb-indicator ind-1">❤️ Healthy Heart</div>
                <div className="mcmb-indicator ind-2">🦵 Healthy Leg</div>
                <p id="rcorners1"></p>
                <p id="rcorners2"></p>
              </div>
              <div className="mc-secondary-box">
                {healthData.map((item, index) => (
                  <div
                    className="mc-secondary-box-item"
                    key={`body-item-${index}`}
                  >
                    <BodyItem
                      image={item.image}
                      title={item.title}
                      date={item.date}
                      progress={item.progress}
                      progressColor={item.progressColor}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mc-footer">
              <div className="mcf-header">
                <div className="mcfh-title">Activity</div>
                <div className="mcfh-subtitle">3 appointment on this week</div>
              </div>
              <div className="mcf-body">
                <Activities />
              </div>
            </div>
          </div>
        </main>
        <div className="right-content">
          <header className="rc-header">
            <div className="rc-header-icon rchi-user">
              <div>
                <img src=""></img>
              </div>
              <PersonRounded />
            </div>
            <div className="rc-header-icon">
              <AddRoundedIcon />
            </div>
          </header>
          <div className="rc-calendar">
            <Calendar />
          </div>
          <div className="rc-body">
            <div className="rcb-row">
              {doctorsData?.map((item, index) => (
                <AppointmentCard key={`doctor-card-${index}`} data={item} />
              ))}
            </div>
            <div className="rcb-appointments-header">The Upcoming Schedule</div>

            <div className="rcb-appointments">
              {appointmentsData?.map((item, index) => (
                <div
                  className="rcb-appointments-row"
                  key={`appointment-row-${index}`}
                >
                  <div className="rcb-appointments-row-day">On {item.day}</div>
                  <div className="rcb-appointments-row-appointments">
                    {item.appointments?.map((appointment, index) => (
                      <AppointmentCard
                        key={`appointment-card-${index}`}
                        data={appointment}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
