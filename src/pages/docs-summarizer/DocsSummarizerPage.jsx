import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const DocsSummarizerPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-row items-start">
        <DashboardSideBar />
        <div className="codeAnalyserPage mt-8 ml-16">
          <h3 className="text-3xl" style={{ fontFamily: "Poppins" }}>
            Let's summarize some coding docs!
          </h3>
          <br />
          <label className=" text-xl">Please paste the docs link here:</label>

          <br />
          <input
            type="text"
            placeholder="link here"
            className="p-2 w-[300px] mt-4 outline-none rounded-sm"
          />
          <br />
          <br />
          <h3 className="text-2xl" style={{ fontFamily: "Poppins" }}>
            Docs Review🤓:
          </h3>
          <br />
          <h2>
            Do consectetur do exercitation quis dolor culpa anim. Deserunt Lorem
            sunt veniam reprehenderit ex incididunt magna consectetur laboris
            incididunt reprehenderit mollit aliquip pariatur. Aliquip laboris
            laboris nisi labore laborum. Nulla excepteur laborum commodo
            pariatur nostrud officia anim adipisicing ullamco cillum fugiat esse
            irure. Labore sit in sint minim elit aliqua officia laborum dolor
            non aute minim ipsum esse.
          </h2>
          <br />
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default DocsSummarizerPage;
