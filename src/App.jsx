import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MarqueeBar from "./components/MarqueeBar";
import Experience from "./components/Experience";
import WhyHireMe from "./components/WhyHireMe";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  return (
     <>
     {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
    <>
    
      <Navbar />
      <Hero />
      <Services />
      
     
      
      
        <About />
      <Skills />
      {/* <Contact /> */}
    
      <WhyHireMe />
      <Projects />
      <MarqueeBar />
      
      <Experience />
      <Footer />
     </>
      )}
    </>
  );
}

export default App;