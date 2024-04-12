import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "./side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const DashboardPage = () => {
  return (
    <>
     
      <Navbar />
      <div className="dashboardPage">
        <DashboardSideBar />
      </div>
      <br />
      <Footer />
    </>
  );
};

export default DashboardPage;
