import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import VideoShowcase from "./components/VideoShowcase";
import FeaturedProjects from "./components/FeaturedProjects";
import ServicesSection from "./components/ServicesSection";
import BlogSection from "./components/BlogSection";
import IdeaSection from "./components/IdeaSection";
import Footer from "./components/Footer";
import ExploreCursor from "./components/cursor/ExploreCursor";
import DotCursor from "./components/cursor/DotCursor";

import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import Company from "./pages/Company/Company";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import VideoPage from "./pages/VideoPage";

import FloatingContact from "./components/FloatingContact/FloatingContact";
import BlogDetail from "./pages/Blog/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

    
      <FloatingContact />

      <main style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/projects" element={<Projects />} />

          <Route
            path="/"
            element={
              <>
                <DotCursor />
                <Hero />
                <VideoShowcase />
                <AboutSection />
                <FeaturedProjects />
                <ServicesSection />
                <BlogSection />
                <IdeaSection />
                <Footer />
                <ExploreCursor />
              </>
            }
          />

          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;





// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import AboutSection from "./components/AboutSection";
// import VideoShowcase from "./components/VideoShowcase";
// import FeaturedProjects from "./components/FeaturedProjects";
// import ServicesSection from "./components/ServicesSection";
// import BlogSection from "./components/BlogSection";
// import IdeaSection from "./components/IdeaSection";
// import Footer from "./components/Footer";
// import ExploreCursor from "./components/cursor/ExploreCursor";
// import DotCursor from "./components/cursor/DotCursor";
// import Services from "./pages/Services/Services";
// import Projects from "./pages/Projects/Projects";
// import Company from "./pages/Company/Company";
// import Blog from "./pages/Blog/Blog";
// import Contact from "./pages/Contact/Contact";
// import FloatingContact from "./components/FloatingContact/FloatingContact";





// import VideoPage from "./pages/VideoPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <main style={{ paddingTop: "80px" }}>
//         <Routes>
//                   <Route path="/projects" element={<Projects />}
//                  />
//                   {/* <Route path="/projects" element={<FeaturedProjects />} /> */}


//           <Route
//             path="/"
//             element={
//               <>
//                <DotCursor />
//                 <Hero />
//                 <VideoShowcase />
//                 <AboutSection />
//                 <FeaturedProjects />
//                 <ServicesSection />
//                 <BlogSection />
//                 <IdeaSection />
//                 <Footer/>
//                  <ExploreCursor />
//                       <FloatingContact />
                      

                  
//               </>
//             }
//           />
//            <Route path="/services" element={<Services />} />
//               <Route path="/company" element={<Company />} />
//               <Route path="/blog" element={<Blog />} />
//               <Route path="/contact" element={<Contact />} />

//           <Route path="/video" element={<VideoPage />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App;





// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import AboutSection from "./components/AboutSection";
// import VideoShowcase from "./components/VideoShowcase";
// import FeaturedProjects from "./components/FeaturedProjects";
// <<<<<<< HEAD
// import ServicesSection from "./components/ServicesSection";
// import BlogSection from "./components/BlogSection";
// import IdeaSection from "./components/IdeaSection";
// =======
// >>>>>>> d56611a55dd50bffac798a8efe1b5e4ecdd9e7f8

// import VideoPage from "./pages/VideoPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//             <main style={{ paddingTop: "80px" }}>
//         {/* your page content */}
//       </main>


//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <VideoShowcase />
//               <AboutSection />
//                <FeaturedProjects />
// <<<<<<< HEAD
//                 <ServicesSection />
//                 <BlogSection />
//                  <IdeaSection />
// =======
// >>>>>>> d56611a55dd50bffac798a8efe1b5e4ecdd9e7f8
//             </>
//           }
//         />
//         <Route path="/video" element={<VideoPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


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


