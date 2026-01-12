import { useEffect, useState } from "react";
import ProjectsSection from "./sections/ProjectsSection";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // 🔥 KEY FIXES
        threshold: 0.25, // works for long sections like Projects
        rootMargin: "-80px 0px -40% 0px", // navbar + better detection
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white transition-colors duration-300">
      {/* Active navbar */}
      <Navbar activeSection={activeSection} />

      {/* Navbar offset */}
      <div className="pt-20 md:pt-16 lg:pt-20">
        <Hero />
        <ProjectsSection />
        <Skills />

        {/* iPad Air / Pro spacing fix (kept as-is) */}
        <div className="md:-mt-20 lg:mt-0">
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
