import React from "react";

const DashboardSideBar = () => {
  return (
    <div
      className="dashboardSideBar w-[8rem]  blur-[0.3px] flex flex-col justify-center items-start"
      style={{ background: "RGB(255,255,255,0.3)" }}
    >
      <div className="mainItems flex flex-col jusitfy-center items-start">
        <h2 className="mt-4 ml-2 font-bold" style={{ fontFamily: "Poppins" }}>
          AI TOOLS
        </h2>

        <hr className="border-black border-1 w-[100%]" />

        <div
          className="item py-2 px-4 hover:bg-[#fff] w-[8rem] transition-all cursor-pointer mt-2"
          style={{ fontFamily: "Poppins" }}
        >
          <h3>Create Docs!</h3>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />
        <div
          className="item py-2 px-4 hover:bg-[#fff] w-[8rem] transition-all cursor-pointer mt-2"
          style={{ fontFamily: "Poppins" }}
        >
          <h3>Code Analysis!</h3>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item p-2 hover:bg-[#fff] w-[8rem] transition-all cursor-pointer"
          style={{ fontFamily: "Poppins" }}
        >
          <h3>Social Media Management!</h3>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item p-2 hover:bg-[#fff] w-[8rem] transition-all cursor-pointer"
          style={{ fontFamily: "Poppins" }}
        >
          <h3>Insights!</h3>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item p-2 hover:bg-[#fff] w-[8rem] transition-all cursor-pointer"
          style={{ fontFamily: "Poppins" }}
        >
          <h3>API Key!</h3>
        </div>
        <hr className="border-gray-500 w-[100%] my-2" />

        <div
          className="item p-2 hover:bg-[#fff] w-[8rem] transition-all cursor-pointer"
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
            className="item p-2 hover:bg-[#8e2525] w-[8rem] hover:text-white transition-all cursor-pointer"
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
