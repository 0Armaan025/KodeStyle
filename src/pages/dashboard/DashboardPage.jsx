import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "./side-bar/DashboardSideBar";

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardPage">
        <DashboardSideBar />
      </div>
      <br />
    </>
  );
};

export default DashboardPage;
