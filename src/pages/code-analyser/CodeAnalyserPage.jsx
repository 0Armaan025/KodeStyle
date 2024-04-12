import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const CodeAnalyserPage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-row items-start">
        <DashboardSideBar />
        <div className="codeAnalyserPage mt-8 ml-16">
          <h3 className="text-3xl" style={{ fontFamily: "Poppins" }}>
            Let's analyse your{" "}
            <span className="text-yellow-500 font-black">code!</span> 😁
          </h3>
          <br />
          <label className=" text-xl">Please paste your code here:</label>

          <br />
          <textarea
            placeholder="<h1>Hi! Its made by Armaan</h1>"
            className="p-4 w-[22rem] h-52 mt-4 outline-none rounded-lg"
          />
          <br />
          <br />
          <h3 className="text-2xl" style={{ fontFamily: "Poppins" }}>
            Explaination and Analysis 🤓:
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
          <h3 className="font-black text-red text-3xl">
            Score For Coding Practice 📃:{" "}
          </h3>
          <br />
          <div
            className="scoreDiv flex flex-row justify-center ml-32 rounded-lg border-separate items-center w-[5rem] h-[5rem] blur-[0.5px]"
            style={{ background: "RGB(255,255,255,0.4)" }}
          >
            6/10
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default CodeAnalyserPage;
