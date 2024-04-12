import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MiddlePart = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="middlePart">
        <div className="boxes mt-16 flex flex-col md:flex-row justify-center items-center ">
          <div className="leftBox ml-32 flex flex-col justify-center items-start mt-8  md:mr-8">
            <h2
              className="text-4xl font-bold mb-2 text-start"
              style={{ fontFamily: "Poppins" }}
            >
              KodeStyle
            </h2>
            <h4 className="w-full md:w-[30rem] mb-5">
              Ullamco quis sit dolor sint esse aliquip aliqua elit do. Labore
              veniam duis esse quis ad cillum esse in aliquip dolor sint aliqua
              elit nostrud. Ut ex proident proident culpa id.
            </h4>
            <input
              type="button"
              onClick={loginWithRedirect}
              value="Get Started!"
              className="py-2 px-4 transition-all mt-4 bg-[#a61919] hover:bg-[#621f1f] text-white rounded hover:cursor-none"
              style={{ fontFamily: "Poppins" }}
            />
          </div>
          <div className="rightBox flex justify-center items-center mt-16 md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww"
              className="rounded-lg w-full md:w-96"
            />
          </div>
        </div>
        <br />
        <br />
        <hr
          style={{
            background: "black",
            width: "100%",
            border: "1px solid grey",
          }}
        />
        <br />
        <br />
        <center>
          <h2 style={{ fontFamily: "Poppins" }} className="text-3xl">
            Features that you need
          </h2>
          <br />
          <h3
            className="w-full md:w-[50rem] text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            AI-Generated documentations refactorisation -&gt; Real-time docs
            editing -&gt; Code Analysis -&gt; flow-charts and image pattern
            recognition for code -&gt; api to use this platform -&gt; speech to
            text for coders with a strong will! -&gt; repos analysis and core
            -&gt; ai social media updates idea summarizer and a lot more! and
            All for <span className="text-yellow-500 text-lg"> FREE! 🥳</span>
          </h3>
          <br />
          <img
            src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="500px"
            className="rounded-lg"
          />
          <br />
          <input
            type="button"
            style={{ fontFamily: "Poppins" }}
            value="Try the API!"
            className="px-4 py-2 bg-[#221b89] text-white hover:bg-[#1c194b] cursor-none rounded transition-all"
          />
          <br />
          <br />
        </center>
      </div>
      <br />
    </>
  );
};

export default MiddlePart;
