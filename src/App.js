import "./index.css";
import CodeAnalyserPage from "./pages/code-analyser/CodeAnalyserPage";
import CreateDocsPage from "./pages/create-docs/CreateDocsPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import HomePage from "./pages/home/HomePage";
import AnimatedCursor from "react-animated-cursor";
import SocialMediaManager from "./pages/social-media-manager/SocialMediaManager";
import DocsSummarizerPage from "./pages/docs-summarizer/DocsSummarizerPage";
import APIKeyPage from "./pages/api-key/ApiKeyPage";

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
      <CreateDocsPage />
    </>
  );
}

export default App;
