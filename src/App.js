import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import VideoShowcase from "./components/VideoShowcase";
import FeaturedProjects from "./components/FeaturedProjects";
<<<<<<< HEAD
import ServicesSection from "./components/ServicesSection";
import BlogSection from "./components/BlogSection";
import IdeaSection from "./components/IdeaSection";
=======
>>>>>>> d56611a55dd50bffac798a8efe1b5e4ecdd9e7f8

import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
            <main style={{ paddingTop: "80px" }}>
        {/* your page content */}
      </main>


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <VideoShowcase />
              <AboutSection />
               <FeaturedProjects />
<<<<<<< HEAD
                <ServicesSection />
                <BlogSection />
                 <IdeaSection />
=======
>>>>>>> d56611a55dd50bffac798a8efe1b5e4ecdd9e7f8
            </>
          }
        />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//     </>
//   );
// }

// export default App;


