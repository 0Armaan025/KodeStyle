import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomModal from "../../components/modal/CustomModal";
import APIKeyEntry from "../../components/api-key-entry/ApiKeyEntry";
import axios from "axios";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import { firestore } from "../../firebase_setup/firebase";

const APIKeyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiKeys, setApiKeys] = useState([]);
  const { isAuthenticated, user } = useAuth0();
  const userDocRef = doc(firestore, "users", user.name);

  useEffect(() => {
    const fetchApiKeys = async () => {
      try {
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const apiKeysRef = collection(userDocRef, "api-keys");
          const apiKeysSnapshot = await getDocs(apiKeysRef);
          const keys = [];
          apiKeysSnapshot.forEach((doc) => {
            keys.push({ apiKey: doc.data().api_key });
          });
          setApiKeys(keys);
        } else {
          console.log("User document does not exist");
        }
      } catch (error) {
        console.error("Error fetching API keys:", error);
      }
    };

    if (isAuthenticated) {
      fetchApiKeys();
    }
  }, [isAuthenticated, userDocRef]);

  const notify = async () => {
    try {
      // Send a POST request to the backend server to generate the API key
      const response = await axios.get(
        "https://manual-lina-none-new.koyeb.app/generate_api_key" + "?name=" + user.name
      );

      // Extract the API key from the response
      const apiKey = response.data.api_key;

      // Display a toast notification
      toast(`API Key generated: ${apiKey}`);

      // Open the modal
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error generating API key:", error);
    }
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast("API Key copied to clipboard");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteApiKey = async (index) => {
    try {
      const apiKeysCopy = [...apiKeys];
      const deletedApiKey = apiKeysCopy.splice(index, 1)[0].apiKey;
      setApiKeys(apiKeysCopy);

      // Get a reference to the user's "api-keys" sub-collection
      const apiKeysRef = collection(userDocRef, "api-keys");

      // Query the documents in the "api-keys" sub-collection
      const querySnapshot = await getDocs(apiKeysRef);

      // Loop through the documents and find the one with the matching API key
      querySnapshot.forEach(async (doc) => {
        if (doc.data().api_key === deletedApiKey) {
          // Ensure the field name matches exactly
          // Delete the document from the "api-keys" sub-collection
          await deleteDoc(doc.ref); // Correct method to delete a document
        }
      });
    } catch (error) {
      console.error("Error deleting API key:", error);
    }
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
                onCopy={() => copyToClipboard(key.apiKey)}
                apiKey={key.apiKey}
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
