import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./component/Hero/Hero";
import Skills from "./component/skills/Skills.jsx";
import Experience from "./component/Experience/Experience.jsx";
import Language from "./component/Language/Language.jsx";
import Contact from "./component/Contact/Contact.jsx";
import Projects from "./component/Projects/Projects.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="bg-[#0d182e]">
      <Hero />
      <Skills />
      <Experience />
      <Language />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
