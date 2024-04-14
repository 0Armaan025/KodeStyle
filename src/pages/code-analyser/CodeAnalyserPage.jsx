import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";

const CodeAnalyserPage = () => {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [codeScore, setCodeScore] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyseCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://manual-lina-none-new.koyeb.app/analyse_code", {
        code: code,
      });
      setExplanation(response.data.analysis);
      setCodeScore(response.data.code_score);
    } catch (error) {
      console.error("Error analysing code:", error);
    } finally {
      setLoading(false);
    }
  };

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
          <label className="text-xl">
            Please paste your code here(please do not input a very long code):
          </label>
          <br />
          <textarea
            placeholder="<h1>Hi! It's made by Armaan</h1>"
            className="p-4 w-[22rem] h-52 mt-4 outline-none rounded-lg"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <br />
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAnalyseCode}
            disabled={loading}
          >
            {loading ? "Analysing..." : "Analyse Code"}
          </button>
          <br />
          <br />
          <h3 className="text-2xl" style={{ fontFamily: "Poppins" }}>
            Explanation and Analysis 🤓:
          </h3>
          <br />
          <h2>{explanation}</h2>
          <br />
          <h3 className="font-black text-red text-3xl">
            Score For Coding Practice 📃:{" "}
          </h3>
          <br />
          <div
            className="scoreDiv flex flex-row justify-center ml-32 rounded-lg border-separate items-center w-[5rem] h-[5rem] blur-[0.5px]"
            style={{ background: "RGB(255,255,255,0.4)" }}
          >
            {codeScore}/10
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default CodeAnalyserPage;
