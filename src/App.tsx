import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Skills from "./components/Skills";
import Mathematics from "./components/Mathematics";
import About from "./components/About";
import Now from "./components/Now";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Project } from "./data/projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-canvas text-ink min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Approach />
        <Projects onSelect={setSelectedProject} />
        <Skills />
        <Mathematics />
        <About />
        <Now />
        <Contact />
      </main>
      <Footer />
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
