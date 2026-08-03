import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SentinelAI from "./pages/SentinelAI";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sentinel-ai" element={<SentinelAI />} />
    </Routes>
  );
}

export default App;