import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";

const SocialMediaManager = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [tone, setTone] = useState("");
  const [token, setToken] = useState("");
  const [description, setDescription] = useState("");
  const [generatedPost, setGeneratedPost] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShareTwitter = () => {
    const textToShare = encodeURIComponent(
      "Check out my amazing creation! " + generatedPost
    ); // Adjust the text to share as needed
    const url = `https://twitter.com/intent/tweet?text=${textToShare}`;
    window.open(url, "_blank");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "repoUrl":
        setRepoUrl(value);
        break;
      case "tone":
        setTone(value);
        break;
      case "token":
        setToken(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleMagic = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:5000/get_social_media_post",
        {
          repo_url: repoUrl,
          tone: tone,
          token: token,
          description: description,
        }
      );
      setGeneratedPost(response.data.post);
    } catch (error) {
      console.error("Error generating social media post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-col md:flex-row items-start">
        <DashboardSideBar />
        <div className="createDocsPage mt-8 ml-16 md:ml-0 md:mr-8 flex flex-col">
          <h2 className="text-3xl" style={{ fontFamily: "Poppins" }}>
            🔥 Let's let more people know about your amazing CREATION! ✨
          </h2>
          <label className="ml-4 text-xl">
            Please enter your GitHub repo link:
          </label>
          <input
            type="text"
            placeholder="Your GitHub repo link"
            name="repoUrl"
            value={repoUrl}
            onChange={handleChange}
            className="ml-4 px-2 py-2 w-full md:w-[350px] mt-4 outline-none rounded-sm"
          />
          <br />
          <label className="ml-4 font-bold" style={{ fontFamily: "Poppins" }}>
            Choose a tone:
          </label>
          <select
            value={tone}
            onChange={handleChange}
            name="tone"
            className="ml-4 p-2"
          >
            <option value="">Choose a tone</option>
            <option value="Informal">Informal</option>
            <option value="Formal">Formal</option>
            <option value="Fun">Fun</option>
            <option value="Emojified and Formal!">Emojified and Formal!</option>
            <option value="Emojified and Informal!">
              Emojified and Informal!
            </option>
          </select>
          <label className="ml-4 text-xl">
            Please enter a short description here:
          </label>
          <textarea
            placeholder="A short description here would work amazingly!"
            name="description"
            value={description}
            onChange={handleChange}
            className="ml-4 p-4 w-full md:w-[22rem] h-52 mt-4 outline-none rounded-lg"
          />
          <input
            type="button"
            value="Magic! ✨"
            onClick={handleMagic}
            disabled={loading}
            className="ml-4 mt-4 w-[150px] rounded-sm hover:bg-[#642222] cursor-pointer bg-[#e13232] text-white px-2 py-2 text-center"
            style={{ fontFamily: "Poppins" }}
          />
          <textarea
            placeholder="Your generated post will be here!"
            value={generatedPost}
            className="ml-4 p-4 w-full md:w-[22rem] h-40 outline-none rounded-lg mt-4"
          />
          <div className="buttonsRow ml-4 flex flex-col md:flex-row justify-evenly mt-4  mb-4 w-full md:w-[22rem]">
            <input
              type="button"
              value="Re-generate :("
              onClick={handleMagic}
              className="py-2 px-2 rounded-sm text-white bg-[rgb(123,12,12)] transition-all hover:bg-[rgb(61,19,19)] w-full md:w-auto md:mr-2"
            />
            <input
              onClick={handleShareTwitter}
              type="button"
              value="Share it!"
              style={{ fontFamily: "Poppins" }}
              className="py-2 px-2 rounded-sm text-white font-bold bg-[#1383ac] transition-all hover:bg-[#246c87] w-full md:w-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SocialMediaManager;
