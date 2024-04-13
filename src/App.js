import "./index.css";
import CodeAnalyserPage from "./pages/code-analyser/CodeAnalyserPage";
import CreateDocsPage from "./pages/create-docs/CreateDocsPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import HomePage from "./pages/home/HomePage";
import AnimatedCursor from "react-animated-cursor";
import SocialMediaManager from "./pages/social-media-manager/SocialMediaManager";
import DocsSummarizerPage from "./pages/docs-summarizer/DocsSummarizerPage";
import APIKeyPage from "./pages/api-key/ApiKeyPage";
import { Route, Routes } from "react-router-dom";
import DocumentationsPage from "./pages/documentations/DocumentationsPage";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
      />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/code-analysis" element={<CodeAnalyserPage />} />
        <Route path="/docs-summarizer" element={<DocsSummarizerPage />} />
        <Route path="/readme-creator" element={<CreateDocsPage />} />
        <Route path="/social-media-manager" element={<SocialMediaManager />} />
        <Route path="/apis-manager" element={<APIKeyPage />} />
        <Route path="/documentations" element={<DocumentationsPage />} />
      </Routes>
    </>
  );
}

export default App;
