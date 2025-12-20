import { useState } from "react";
import "./Projects.css";

import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import IdeaSection from "../../components/IdeaSection/IdeaSection";
import Footer from "../../components/Footer/Footer";

function Projects() {
  const [activeTab, setActiveTab] = useState("All");

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
          <span
            className={activeTab === "All" ? "active" : ""}
            onClick={() => setActiveTab("All")}
          >
            All Projects
          </span>

          <span
            className={activeTab === "Websites" ? "active" : ""}
            onClick={() => setActiveTab("Websites")}
          >
            Websites
          </span>

          <span
            className={activeTab === "Applications" ? "active" : ""}
            onClick={() => setActiveTab("Applications")}
          >
            Applications
          </span>

          <span
            className={activeTab === "Branding" ? "active" : ""}
            onClick={() => setActiveTab("Branding")}
          >
            Branding
          </span>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="projects-list">
        <ProjectsGrid activeTab={activeTab} />
      </section>

      <IdeaSection />
      <Footer />
    </div>
  );
}

export default Projects;








// import "./Projects.css";
// import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";

// import IdeaSection from "../../components/IdeaSection/IdeaSection";
// import Footer from "../../components/Footer/Footer"
// function Projects() {
//   return (
//     <div className="projects-page">

//       {/* HERO SECTION */}
//       <section className="projects-hero">
//         <h1>Our projects</h1>
//         <p>
//           We help bring ideas to life and create digital products that work.
//         </p>

//         {/* FILTER TABS */}
//         <div className="projects-tabs">
//           <span className="active">All Projects</span>
//           <span>Websites</span>
//           <span>Applications</span>
//           <span>Branding</span>
//         </div>
//       </section>

//       {/* PROJECT LIST (Next screenshots yahin add honge) */}
//       <section className="projects-list">
//         {/* next screenshots ke according yahan cards banenge */}
//       </section>
//         <ProjectsGrid />
//         <IdeaSection />
//         <Footer/>

//     </div>
//   );
// }

// export default Projects;
