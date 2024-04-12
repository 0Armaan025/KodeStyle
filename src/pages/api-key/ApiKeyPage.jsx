import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomModal from "../../components/modal/CustomModal";
import APIKeyEntry from "../../components/api-key-entry/ApiKeyEntry";
import "./apikeypage.css";

const APIKeyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiKeys, setApiKeys] = useState([
    { apiKey: "abc123xyz456", timestamp: "2022-04-15 10:30:00" },
    { apiKey: "def789uvw012", timestamp: "2022-04-14 15:20:00" },
    { apiKey: "ghi345rst678", timestamp: "2022-04-13 08:45:00" },
  ]);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const notify = () => {
    toast("Wow so easy!");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteApiKey = (index) => {
    const updatedApiKeys = [...apiKeys];
    updatedApiKeys.splice(index, 1);
    setApiKeys(updatedApiKeys);
  };

  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-row items-start">
        <DashboardSideBar />
        <div className="codeAnalyserPage mt-8 ml-16">
          <h3 className="text-3xl" style={{ fontFamily: "Poppins" }}>
            Welcome developer! ⭐
          </h3>
          <br />
          <button
            type="button"
            onClick={notify}
            className="bg-red-600 text-white hover:bg-red-500 transition-all p-2 rounded"
            style={{ fontFamily: "Poppins" }}
          >
            Create an API Key
          </button>
          <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />
          <div className="api-keys-list mt-4 max-h-80 overflow-y-auto w-[60rem]">
            {apiKeys.map((key, index) => (
              <APIKeyEntry
                key={index}
                apiKey={key.apiKey}
                timestamp={key.timestamp}
                onDelete={() => handleDeleteApiKey(index)}
              />
            ))}
          </div>
          <br />
        </div>
      </div>
      <ToastContainer />
      <br />
      <Footer />
    </>
  );
};

export default APIKeyPage;
