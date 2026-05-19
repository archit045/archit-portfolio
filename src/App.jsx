import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

const App = () => {


  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <Navbar />
      <ScrollProgress />
      <CursorGlow />

      <Hero />
      <About />
      <Skills />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />

      <Footer />
    </main>
  );
};


export default App;