import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CopyToClipboard } from "react-copy-to-clipboard";


const DocumentationsPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "Poppins" }}
        >
          Quickstarts to help you implement API in your app:
        </h1>
        {/* Section 1 */}
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            How to use the API
          </h2>
          <p className="mb-2">To use the provided code, follow these steps:</p>
          <pre className="bg-gray-100 rounded-md text-center items-start justify-center flex flex-col relative">
            <code className="language-javascript text-center mb-4 mr-16">
              {`
        pip install requests
`}
            </code>
            <CopyToClipboard text="pip install requests">
              <button className="absolute top-2 right-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-300">
                Copy
              </button>
            </CopyToClipboard>
          </pre>
        </section>
        {/* Section 2 */}
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            API Endpoint for creating readmes/docs
          </h2>
          <p className="mb-4">
            Our API is available at{" "}
            <code className="bg-gray-100 p-1 rounded-md">
              http://127.0.0.1/create_readme
            </code>
            .
          </p>
        </section>
        {/* Section 3 */}
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            How to create a readme
          </h2>
          <p className="mb-4">Here's a sample code snippet:</p>
          <pre className="bg-gray-100 p-4 rounded-md relative">
            <code className="language-javascript">
              {`
import requests

def send_request(repo_url, tone, description, github_token, api_key):
	
	endpoint = "http://127.0.0.1:5000/create_readme"

	headers = {
		"Content-Type": "application/json",
		'Authorization': f'Bearer {api_key}'
	}
	payload = {
		"repo_url": repo_url,
		"tone": tone,
		"description": description,
		"github_token": github_token,
	}
		
	response = requests.post(endpoint, json=payload, headers=headers)
	return response.text

output = send_request(repo_url="url_here", tone="formal", description="description here",github_token="",api_key="your api key here")    
`}
            </code>
            <CopyToClipboard
              text={`import requests\n\ndef send_request(repo_url, tone, description, github_token, api_key):\n\tendpoint = "http://127.0.0.1:5000/create_readme"\n\theaders = {\n\t\t"Content-Type": "application/json",\n\t\t'Authorization': f'Bearer {api_key}'\n\t}\n\tpayload = {\n\t\t"repo_url": repo_url,\n\t\t"tone": tone,\n\t\t"description": description,\n\t\t"github_token": github_token,\n\t}\n\tresponse = requests.post(endpoint, json=payload, headers=headers)\n\treturn response.text\n`}
            >
              <button className="absolute top-2 right-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-300">
                Copy
              </button>
            </CopyToClipboard>
          </pre>
        </section>
        
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            API Endpoint for code analysis, explanation, and getting a score
          </h2>
          <p className="mb-4">
            Our API is available at{" "}
            <code className="bg-gray-100 p-1 rounded-md">
              http://127.0.0.1/analyse_code
            </code>
            .
          </p>
        </section>
        
        <section>
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            How to analyse code
          </h2>
          <p className="mb-4">Here's a sample code snippet:</p>
          <pre className="bg-gray-100 p-4 rounded-md relative">
            <code className="language-javascript">
              {`
import requests

def send_request(code, api_key):
  
  endpoint = "http://127.0.0.1:5000/analyse_code"

  headers = {
    "Content-Type": "application/json",
    'Authorization': f'Bearer {api_key}'
  }
  payload = {
    "code": code,
  }
    
  response = requests.post(endpoint, json=payload, headers=headers)
  return response.text

output = send_request(code="code here", api_key="api key here")  
`}
            </code>
            <CopyToClipboard
              text={`import requests\n\ndef send_request(code, api_key):\n  endpoint = "http://127.0.0.1:5000/analyse_code"\n  headers = {\n    "Content-Type": "application/json",\n    'Authorization': f'Bearer {api_key}'\n  }\n  payload = {\n    "code": code,\n  }\n  response = requests.post(endpoint, json=payload, headers=headers)\n  return response.text\n`}
            >
              <button className="absolute top-2 right-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-300">
                Copy
              </button>
            </CopyToClipboard>
          </pre>
        </section>
        <br />
        
        <section className="mb-8">
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            API Endpoint for getting a social media post
          </h2>
          <p className="mb-4">
            Our API is available at{" "}
            <code className="bg-gray-100 p-1 rounded-md">
              http://127.0.0.1/get_social_media_post
            </code>
            .
          </p>
        </section>
        
        <section>
          <h2
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "Poppins" }}
          >
            How to get social media post
          </h2>
          <p className="mb-4">Here's a sample code snippet:</p>
          <pre className="bg-gray-100 p-4 rounded-md relative">
            <code className="language-javascript">
              {`
import requests

def send_request(repo_url, tone, github_token, description, api_key):
  
  endpoint = "http://127.0.0.1:5000/analyse_code"

  headers = {
    "Content-Type": "application/json",
    'Authorization': f'Bearer {api_key}'
  }
  payload = {
    "repo_url": repo_url,
    "tone": tone,
    "github_token": github_token,
    "description": description
  }
    
  response = requests.post(endpoint, json=payload, headers=headers)
  return response.text

output = send_request(repo_url="url", tone="formal", github_token="token here", description="description", api_key="api_key_here")
`}
            </code>
            <CopyToClipboard
              text={`import requests\n\ndef send_request(repo_url, tone, github_token, description, api_key):\n  endpoint = "http://127.0.0.1:5000/analyse_code"\n  headers = {\n    "Content-Type": "application/json",\n    'Authorization': f'Bearer {api_key}'\n  }\n  payload = {\n    "repo_url": repo_url,\n    "tone": tone,\n    "github_token": github_token,\n    "description": description\n  }\n  response = requests.post(endpoint, json=payload, headers=headers)\n  return response.text\n`}
            >
              <button className="absolute top-2 right-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-md hover:bg-gray-300">
                Copy
              </button>
            </CopyToClipboard>
          </pre>
        </section>
        <br />
        <br />
        <br />
        <center>
          <h3 className="font-bold text-3xl mx-8">
            More APIs that include Image Creation, Speech to Text will be coming
            soon along with features!
          </h3>
          <br />
        </center>
      </div>
      <Footer />
    </>
  );
};

export default DocumentationsPage;
