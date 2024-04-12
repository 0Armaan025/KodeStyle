import React from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";
// import ReactDropdown from "react-dropdown";
import { useState } from "react";

const SocialMediaManager = () => {
const [selectedOption, setSelectedOption] = useState("");

const handleChange = (event) => {
  setSelectedOption(event.target.value);
};

  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-row justify-start items-start ">
        <DashboardSideBar />
        <div className="createDocsPage mt-8 ml-16">
          <h2 style={{ fontFamily: "Poppins" }} className="text-3xl">
            🔥 Let's let more people know about your amazing CREATION! ✨
          </h2>
          <br />
          <label className="ml-4 text-xl">
            Please enter your github repo link:
          </label>
          <br />
          <input
            type="text"
            placeholder="Your github repo link"
            className="ml-4 px-2 py-2 w-[350px] mt-4 outline-none rounded-sm"
          />
          <br />
          <br />
          <label className="ml-4 font-bold" style={{ fontFamily: "Poppins" }}>
            Choose a tone:
          </label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleChange}
            className="ml-4 p-2"
          >
            <option value="">Choose a tone</option>
            <option value="option1">Informal</option>
            <option value="option2">Formal</option>
            <option value="option3">Fun</option>
            <option value="option4">Emojified and Formal!</option>
            <option value="option5">Emojified and Informal!</option>
          </select>
          <br />
          <br />
          <label className="ml-4 text-xl">
            Please enter a short description here:
          </label>
          <br />
          <textarea
            placeholder="A short description here would work amazingly!"
            className="ml-4 p-4 w-[22rem] h-52 mt-4 outline-none rounded-lg"
          />
          <br />
          <input
            type="button"
            value="Magic! ✨"
            className="ml-4 mt-4 w-[150px] rounded-sm hover:bg-[#642222] cursor-none bg-[#e13232] text-white px-2 py-2 text-center"
            style={{ fontFamily: "Poppins" }}
          />
          <br />
          <br />
          <textarea
            placeholder="Your generated post will be here!"
            className="ml-4 p-4 w-[22rem] h-40 outline-none rounded-lg"
          />
          <br />
          <div className="buttonsRow ml-4 flex flex-row justify-evenly w-[22rem]">
            <input
              type="button"
              value="Re-generate :("
              className="py-2 px-2 rounded-sm text-white bg-[rgb(123,12,12)] transition-all hover:bg-[rgb(61,19,19)] w-[100%] mr-2"
            />
            <input
              type="button"
              value="Share it!"
              style={{ fontFamily: "Poppins" }}
              className="py-2 px-2 rounded-sm text-white font-bold bg-[#1383ac] transition-all hover:bg-[#246c87] w-[100%]"
            />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default SocialMediaManager;
