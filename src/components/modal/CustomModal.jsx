import React from "react";

const CustomModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`custom-modal fixed top-0 left-0 w-full h-full flex justify-center items-center z-999 cursor-pointer ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="custom-modal-content blur-[0.5px] p-6 rounded-md shadow-md"
        style={{ background: "RGB(255,255,255,0.2)" }}
      >
        <div className="custom-modal-header mb-4">
          <h2 className="text-lg font-bold">API Key Created!</h2>
        </div>
        <div className="custom-modal-body ">
          <p>Your API key has been successfully created.</p>
        </div>
        <div className="apiKeyRow mb-3 mt-4 flex flex-row justify-center items-center">
          <input
            type="text"
            disabled={true}
            className="bg-transparent blur-[0.2px] rounded-sm w-[260px]"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/54/54702.png"
            height={40}
            width={40}
            className="ml-4 p-1 bg-transparent "
          />
        </div>
        <div className="custom-modal-footer text-center">
          <button
            className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
