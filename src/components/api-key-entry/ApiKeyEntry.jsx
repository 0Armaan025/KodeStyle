import React from "react";

const APIKeyEntry = ({ apiKey, timestamp, onDelete }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
  };

  return (
    <div className="api-key-entry flex justify-between items-center py-2 px-4 border-b border-gray-20 w-full">
      <div className="w-full">
        <span className="text-gray-800">{apiKey.slice(0, 12)}...</span>
        <span className="text-gray-400 ml-6">({timestamp})</span>
      </div>
      <button
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded mr-4"
        onClick={handleCopy}
      >
        Copy
      </button>
      <button
        className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded"
        onClick={onDelete}
      >
        🗑️
      </button>
    </div>
  );
};

export default APIKeyEntry;
