import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;