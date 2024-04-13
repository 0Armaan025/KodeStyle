import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import DashboardSideBar from "../dashboard/side-bar/DashboardSideBar";
import Footer from "../../components/footer/Footer";

const CreateDocsPage = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [githubToken, setGithubToken] = useState("");
  const [readmeContent, setReadmeContent] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/readme_creator",
        {
          repo_url: repoUrl,
          description: description,
          tone: "chosen",
          token: githubToken,
        }
      );
      setReadmeContent(response.data.new_readme);
    } catch (error) {
      console.error("Error fetching readme content:", error);
    }
  };

 

  const handlePushToGithub = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/update_readme", {
        readme: readmeContent,
        token: githubToken,
        repo_url: repoUrl,
      });
      alert("Readme updated successfully on GitHub!");
    } catch (error) {
      console.error("Error updating readme on GitHub:", error);
      alert("Failed to update readme on GitHub. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboardPage flex flex-row justify-start items-start ">
        <DashboardSideBar />
        <div className="createDocsPage mt-8 ml-16">
          <h2 style={{ fontFamily: "Poppins" }} className="text-3xl">
            🔥 Docs/READMEs creation time! ✨
          </h2>
          <br />
          <label className="ml-4 text-xl">
            Please enter your GitHub repo link:
          </label>
          <br />
          <input
            type="text"
            placeholder="Your GitHub repo link"
            className="ml-4 px-2 py-2 w-[350px] mt-4 outline-none rounded-sm"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
          />
          <br />
          <br />
          <label className="ml-4 text-xl">
            Please enter a short description here:
          </label>
          <br />
          <textarea
            placeholder="A short description here would work amazingly!"
            className="ml-4 p-4 w-[22rem] h-52 mt-4 outline-none rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
          <label className="ml-4 text-xl">
            Please enter your GitHub token here:
          </label>
          <br />
          <input
            type="text"
            placeholder="Your GitHub token"
            className="ml-4 px-2 py-2 w-[350px] mt-4 outline-none rounded-sm"
            value={githubToken}
            onChange={(e) => setGithubToken(e.target.value)}
          />
          <br />
          <input
            type="button"
            value="Magic! ✨"
            className="ml-4 mt-4 w-[150px] rounded-sm hover:bg-[#642222] cursor-none bg-[#e13232] text-white px-2 py-2 text-center"
            style={{ fontFamily: "Poppins" }}
            onClick={handleSubmit}
          />
          <br />
          <br />
          <textarea
            placeholder="Your generated readme will be here for the repository using AI!"
            className="ml-4 p-4 w-[22rem] h-80 outline-none rounded-lg"
            value={readmeContent}
            onChange={(e) => setReadmeContent(e.target.value)}
          />
          <br />
          <div className="buttonsRow ml-4 flex flex-row justify-evenly w-[22rem]">
            <input
              type="button"
              onClick={handleSubmit}
              value="Re-generate :("
              className="py-2 px-2 rounded-sm text-white bg-[rgb(123,12,12)] transition-all hover:bg-[rgb(61,19,19)] w-[100%] mr-2"
            />
            <input
              type="button"
              value="Push to GitHub!"
              style={{ fontFamily: "Poppins" }}
              className="py-2 px-2 rounded-sm text-white font-bold bg-[#1383ac] transition-all hover:bg-[#246c87] w-[100%]"
              onClick={handlePushToGithub}
            />
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default CreateDocsPage;
