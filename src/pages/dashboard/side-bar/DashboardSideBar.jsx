import React from "react";
import { Link } from "react-router-dom";

const DashboardSideBar = () => {
  return (
    <div
      className="dashboardSideBar w-[10rem]  blur-[0.3px] flex flex-col justify-center items-start mt-0"
      style={{ background: "RGB(255,255,255,0.3)" }}
    >
      <div className="mainItems flex flex-col jusitfy-center items-start">
        <h2 className="mt-4 ml-2 font-bold" style={{ fontFamily: "Poppins" }}>
          AI TOOLS
        </h2>

        <hr className="border-black border-1 w-[100%]" />

        <div
          className="item py-2 px-2 hover:bg-[#fff] w-[10rem] transition-all cursor-none mt-2 items-start "
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/readme-creator">
            <h3>Create Docs/READMEs!</h3>
          </Link>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item py-2  px-2 hover:bg-[#fff] w-[10rem] transition-all cursor-none mt-2 items-start justify-start"
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/code-analysis">
            <h3>Code Analysis!</h3>
          </Link>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item p-2 hover:bg-[#fff] w-[10rem] transition-all cursor-none"
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/social-media-manager">
            <h3>Social Media Management!</h3>
          </Link>
        </div>

        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item py-2  px-2 hover:bg-[#fff] w-[10rem] transition-all cursor-none mt-2 items-start justify-start"
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/docs-summarizer">
            <h3>Docs Summarizer!</h3>
          </Link>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item p-2 hover:bg-[#fff] w-[10rem] transition-all cursor-none"
          style={{ fontFamily: "Poppins" }}
        >
          <Link to="/apis-manager">
            <h3>API Key!</h3>
          </Link>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item p-2 hover:bg-[#fff] w-[10rem] transition-all cursor-none"
          style={{ fontFamily: "Poppins" }}
        >
          <h3>Settings!</h3>
        </div>
        <hr className="border-gray-500 w-[100%] mt-2" />
        <div className="mainItems flex flex-col jusitfy-center items-start">
          <h2 className="mt-4 ml-2 font-bold" style={{ fontFamily: "Poppins" }}>
            Auth
          </h2>

          <hr className="border-black border-1 w-[100%]" />
          <div
            className="item p-2 hover:bg-[#8e2525] w-[10rem] hover:text-white transition-all cursor-none"
            style={{ fontFamily: "Poppins" }}
          >
            <h3>Log out!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
