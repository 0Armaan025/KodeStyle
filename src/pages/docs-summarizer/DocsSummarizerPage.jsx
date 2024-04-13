import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const DocsSummarizerPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-col md:flex-row items-start">
        <DashboardSideBar />
        <div className="codeAnalyserPage mt-8 ml-16 md:ml-0 md:mr-8 flex flex-col">
          <h3 className="text-3xl" style={{ fontFamily: "Poppins" }}>
            Let's summarize some coding docs!
          </h3>
          <br />
          <label className="text-xl">Please paste the docs link here:</label>

          <br />
          <input
            type="text"
            placeholder="link here"
            className="p-2 w-full md:w-[300px] mt-4 outline-none rounded-sm"
          />
          <br />
          <br />
          <label className="text-xl">Please input your prompt: </label>

          <br />
          <input
            type="text"
            placeholder="prompt to do with the docs"
            className="p-2 w-full md:w-[300px] mt-4 outline-none rounded-sm"
          />
          <br />
          <br />
          <h3 className="text-2xl" style={{ fontFamily: "Poppins" }}>
            Docs Review🤓:
          </h3>
          <br />
          <h2>
            This feature is in progress, it has not been completed yet due to
            6144 characters limitation, I'm unable to scrape and process the
            whole data of the docs.
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
