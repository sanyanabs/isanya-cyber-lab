import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SentinelAI from "./pages/SentinelAI";
import BlueTeam from "./pages/BlueTeam";
import OSINT from "./pages/OSINT";
import WebRecon from "./pages/WebRecon";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sentinel-ai" element={<SentinelAI />} />
      <Route path="/lab/blue-team" element={<BlueTeam />} />
      <Route path="/lab/osint" element={<OSINT />} />
      <Route path="/lab/web-recon" element={<WebRecon />}
/>
     </Routes>

    
  );
}

export default App;