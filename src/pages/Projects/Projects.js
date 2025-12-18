import "./Projects.css";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";

import IdeaSection from "../../components/IdeaSection/IdeaSection";
import Footer from "../../components/Footer/Footer"
function Projects() {
  return (
    <div className="projects-page">

      {/* HERO SECTION */}
      <section className="projects-hero">
        <h1>Our projects</h1>
        <p>
          We help bring ideas to life and create digital products that work.
        </p>

        {/* FILTER TABS */}
        <div className="projects-tabs">
          <span className="active">All Projects</span>
          <span>Websites</span>
          <span>Applications</span>
          <span>Branding</span>
        </div>
      </section>

      {/* PROJECT LIST (Next screenshots yahin add honge) */}
      <section className="projects-list">
        {/* next screenshots ke according yahan cards banenge */}
      </section>
        <ProjectsGrid />
        <IdeaSection />
        <Footer/>

    </div>
  );
}

export default Projects;
