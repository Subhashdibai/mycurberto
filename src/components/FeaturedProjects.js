import "../styles/FeaturedProjects.css";
import { Link } from "react-router-dom"; // 👈 ONLY ADD

const projects = [
  {
    src: "/projects/phone.mp4",
    title: "E-Commerce App",
    desc: "UX · UI Design",
  },
  {
    src: "/projects/dashboard.mp4",
    title: "Dashboard",
    desc: "Web Application",
  },
  {
    src: "/projects/app1.mp4",
    title: "Mobile Banking",
    desc: "Product Design · Development",
  },
  {
    src: "/projects/ui-motion.mp4",
    title: "UI Motion",
    desc: "Interaction Design",
  },
  {
    src: "/projects/punto.mp4",
    title: "Punto Pago",
    desc: "The First Super-App in Latin America",
  },
  {
    src: "/projects/3d.mp4",
    title: "3D Product",
    desc: "Visual Experience",
  },
  {
    src: "/projects/ice.mp4",
    title: "Iceberg",
    desc: "3D Motion Design",
  },
  {
    src: "/projects/animation.mp4",
    title: "Brand Animation",
    desc: "Motion Graphics",
  },
  {
    src: "/projects/website.mp4",
    title: "Marketing Website",
    desc: "Web Design",
  },
  {
    src: "/projects/loop.mp4",
    title: "Loop Video",
    desc: "Creative Coding",
  },
  {
    src: "/projects/final.mp4",
    title: "Final Concept",
    desc: "Digital Product",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-wrapper">
      <h2 className="featured-title">Featured projects</h2>

      <div className="featured-grid">
        {projects.map((item, index) => (
          <Link
            to="/projects"                 // 👈 CLICK → PROJECTS PAGE
            key={index}
            className={`featured-card
              ${
                item.title === "Mobile Banking" ||
                item.title === "3D Product" ||
                item.title === "Marketing Website"
                  ? "small-height"
                  : ""
              }
              ${index % 2 === 0 ? "offset-up" : "offset-down"}
            `}
          >
            <div className="service-card cursor-target">
              <div className="media-box">
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="featured-video"
                  onMouseEnter={(e) => (e.target.playbackRate = 0.45)}
                  onMouseLeave={(e) => (e.target.playbackRate = 1)}
                />
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="view-all-wrapper">
        <a href="/projects" className="view-all-btn">
          View all projects
        </a>
      </div>
    </section>
  );
}













// import "../styles/FeaturedProjects.css";

// const projects = [
//   {
//     src: "/projects/phone.mp4",
//     title: "E-Commerce App",
//     desc: "UX · UI Design",
//   },
//   {
//     src: "/projects/dashboard.mp4",
//     title: "Dashboard",
//     desc: "Web Application",
//   },
//   {
//     src: "/projects/app1.mp4",
//     title: "Mobile Banking",
//     desc: "Product Design · Development",
//   },
//   {
//     src: "/projects/ui-motion.mp4",
//     title: "UI Motion",
//     desc: "Interaction Design",
//   },
//   {
//     src: "/projects/punto.mp4",
//     title: "Punto Pago",
//     desc: "The First Super-App in Latin America",
//   },
//   {
//     src: "/projects/3d.mp4",
//     title: "3D Product",
//     desc: "Visual Experience",
//   },
//   {
//     src: "/projects/ice.mp4",
//     title: "Iceberg",
//     desc: "3D Motion Design",
//   },
//   {
//     src: "/projects/animation.mp4",
//     title: "Brand Animation",
//     desc: "Motion Graphics",
//   },
//   {
//     src: "/projects/website.mp4",
//     title: "Marketing Website",
//     desc: "Web Design",
//   },
//   {
//     src: "/projects/loop.mp4",
//     title: "Loop Video",
//     desc: "Creative Coding",
//   },
//   {
//     src: "/projects/final.mp4",
//     title: "Final Concept",
//     desc: "Digital Product",
//   },
// ];

// export default function FeaturedProjects() {
//   return (
//     <section className="featured-wrapper">
//       <h2 className="featured-title">Featured projects</h2>

//       <div className="featured-grid">
//         {projects.map((item, index) => (
//           <div
//             key={index}
//             className={`featured-card
//               ${
//                 item.title === "Mobile Banking" ||
//                 item.title === "3D Product" ||
//                 item.title === "Marketing Website"
//                   ? "small-height"
//                   : ""
//               }
//               ${index % 2 === 0 ? "offset-up" : "offset-down"}
//             `}
//           >
//             <div className="service-card cursor-target">
//               <div className="media-box">
//                 <video
//   src={item.src}
//   autoPlay
//   muted
//   loop
//   playsInline
//   className="featured-video"
//   onMouseEnter={(e) => (e.target.playbackRate = 0.45)}
//   onMouseLeave={(e) => (e.target.playbackRate = 1)}
// />

//                 {/* <video
//                   src={item.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 /> */}
//               </div>
//             </div>

//             {/* TEXT CONTENT */}
//             <div className="card-content">
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="view-all-wrapper">
//         <a href="/projects" className="view-all-btn">
//           View all projects
//         </a>
//       </div>
//     </section>
//   );
// }







// import { useNavigate } from "react-router-dom";
// import "../styles/FeaturedProjects.css";

// const projects = [
  
//  {
//     src: "/projects/phone.mp4",
//     title: "E-Commerce App",
//     desc: "UX · UI Design",
//   },
//    {
//     src: "/projects/dashboard.mp4",
//     title: "Dashboard",
//     desc: "Web Application",
//   },

//   {
//     src: "/projects/app1.mp4",
//     title: "Mobile Banking",
//     desc: "Product Design · Development",
//   },
//   {
//     src: "/projects/ui-motion.mp4",
//     title: "UI Motion",
//     desc: "Interaction Design",
//   },

//     {
//     src: "/projects/punto.mp4",
//     title: "Punto Pago",
//     desc: "The First Super-App in Latin America",
//   },
//   {
//     src: "/projects/3d.mp4",
//     title: "3D Product",
//     desc: "Visual Experience",
//   },
//     {
//     src: "/projects/ice.mp4",
//     title: "Iceberg",
//     desc: "3D Motion Design",
//   },
 
//   {
//     src: "/projects/animation.mp4",
//     title: "Brand Animation",
//     desc: "Motion Graphics",
//   },
//   {
//     src: "/projects/website.mp4",
//     title: "Marketing Website",
//     desc: "Web Design",
//   },
//   {
//     src: "/projects/loop.mp4",
//     title: "Loop Video",
//     desc: "Creative Coding",
//   },
//   {
//     src: "/projects/final.mp4",
//     title: "Final Concept",
//     desc: "Digital Product",
//   },
// ];

// export default function FeaturedProjects() {
//   return (
//     <section className="featured-wrapper">
//       <h2 className="featured-title">Featured projects</h2>

//       <div className="featured-grid">
//         {projects.map((item, index) => (
//           <div
//             key={index}
//             className={`featured-card 
//                 ${
//                      item.title === "Mobile Banking" ||
//       item.title === "3D Product" ||
//     //   item.title === "Final Concept"||
//       item.title === "Marketing Website"
//         ? "small-height"
//         : ""

//                 }


//               ${index % 2 === 0 ? "offset-up" : "offset-down"}
//            `}
//           >
//             <div className="service-card cursor-target">
//             <div className="media-box">
//               <video
//                 src={item.src}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>
//             </div>

//             <div className="card-content">
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}



//       </div>
//       <div className="view-all-wrapper">
//   <a href="/projects" className="view-all-btn">
//     View all projects
//   </a>
// </div>
//     </section>
//   );
// }


// import "../styles/FeaturedProjects.css";

// const projects = [
//   {
//     type: "image",
//     src: "/projects/punto.jpg",
//     title: "Punto Pago",
//     desc: "The First Super-App in Latin America",
//   },
//   {
//     type: "video",
//     src: "/projects/ice.mp4",
//     title: "Iceberg",
//     desc: "3D Motion Design",
//   },
//   {
//     type: "image",
//     src: "/projects/app1.jpg",
//     title: "Mobile Banking",
//     desc: "Product Design · Development",
//   },
//   {
//     type: "video",
//     src: "/projects/ui-motion.mp4",
//     title: "UI Motion",
//     desc: "Interaction Design",
//   },
//   {
//     type: "image",
//     src: "/projects/phone.jpg",
//     title: "E-Commerce App",
//     desc: "UX · UI Design",
//   },
//   {
//     type: "video",
//     src: "/projects/3d.mp4",
//     title: "3D Product",
//     desc: "Visual Experience",
//   },
//   {
//     type: "image",
//     src: "/projects/dashboard.jpg",
//     title: "Dashboard",
//     desc: "Web Application",
//   },
//   {
//     type: "video",
//     src: "/projects/animation.mp4",
//     title: "Brand Animation",
//     desc: "Motion Graphics",
//   },
//   {
//     type: "image",
//     src: "/projects/website.jpg",
//     title: "Marketing Website",
//     desc: "Web Design",
//   },
//   {
//     type: "video",
//     src: "/projects/loop.mp4",
//     title: "Loop Video",
//     desc: "Creative Coding",
//   },
//   {
//     type: "image",
//     src: "/projects/final.jpg",
//     title: "Final Concept",
//     desc: "Digital Product",
//   },
// ];

// export default function FeaturedProjects() {
//   return (
//     <section className="featured-wrapper">
//       <h2 className="featured-title">Featured  projects</h2>

//       <div className="featured-grid">
//         {projects.map((item, index) => (
//           <div
//             key={index}
//             className={`featured-card ${
//               index % 2 === 0 ? "offset-up" : "offset-down"
//             }`}
//           >
//             <div className="media-box">
//               {item.type === "video" ? (
//                 <video
//                   src={item.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               ) : (
//                 <img src={item.src} alt={item.title} />
//               )}
//             </div>

//             <div className="card-content">
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import "../styles/FeaturedProjects.css";

// const projects = [
//   { type: "image", src: "/projects/punto.jpg", title: "Punto Pago", desc: "The First Super-App in Latin America" },
//   { type: "video", src: "/projects/ice.mp4", title: "Iceberg", desc: "3D Motion Design" },
//   { type: "image", src: "/projects/app.jpg", title: "Mobile App", desc: "UI · UX Design" },
//   { type: "video", src: "/projects/ui.mp4", title: "Interface", desc: "Interaction Design" },
//   // total 11 items bana lena
// ];

// export default function FeaturedProjects() {
//   return (
//     <section className="featured-wrapper">
//       <h2 className="featured-title">Featured projects</h2>

//       <div className="featured-grid">
//         {projects.map((item, i) => (
//           <div
//             className={`featured-card ${i % 2 === 0 ? "offset-up" : "offset-down"}`}
//             key={i}
//           >
//             <div className="media-box">
//               {item.type === "video" ? (
//                 <video
//                   src={item.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               ) : (
//                 <img src={item.src} alt={item.title} />
//               )}
//             </div>

//             <div className="card-content">
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import "../styles/FeaturedProjects.css";

// export default function FeaturedProjects() {
//   return (
//     <section className="featured-wrapper">
//       <div className="featured-inner">

//         <h2 className="featured-title">
//           Featured projects
//         </h2>

//         {/* Cards container (abhi placeholder) */}
//         <div className="featured-grid">

//           {Array(11).fill(0).map((_, i) => (
//             <div className="featured-card" key={i}>
//               <div className="image-placeholder"></div>

//               <div className="card-content">
//                 <h3>Project name</h3>
//                 <p>Product design · Development</p>
//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }
