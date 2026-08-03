import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
}

export default Home;