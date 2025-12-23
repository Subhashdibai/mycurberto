import "./ProjectsGrid.css";

const projects = [
  // ===== WEBSITES =====
  {
    src: "/projects/website.mp4",
    title: "Marketing Website",
    desc: "Web Design",
    category: "Websites",
  },
  {
    src: "/projects/loop.mp4",
    title: "Loop Video",
    desc: "Creative Coding",
    category: "Websites",
  },
  {
    src: "/projects/final.mp4",
    title: "Final Concept",
    desc: "Digital Product",
    category: "Websites",
  },
  {
    src: "/projects/app8.mp4",
    title: "Portfolio Website",
    desc: "Creative Design",
    category: "Websites",
  },

  // ===== APPLICATIONS =====
  {
    src: "/projects/phone.mp4",
    title: "E-Commerce App",
    desc: "UX · UI Design",
    category: "Applications",
  },
  {
    src: "/projects/dashboard.mp4",
    title: "Dashboard",
    desc: "Web Application",
    category: "Applications",
  },
  {
    src: "/projects/app1.mp4",
    title: "Mobile Banking",
    desc: "Product Design · Development",
    category: "Applications",
  },
  {
    src: "/projects/app2.mp4",
    title: "Fintech App",
    desc: "Mobile Experience",
    category: "Applications",
  },
  {
    src: "/projects/app4.mp4",
    title: "AI Dashboard",
    desc: "Data Visualization",
    category: "Applications",
  },

  // ===== BRANDING =====
  {
    src: "/projects/ui-motion.mp4",
    title: "UI Motion",
    desc: "Interaction Design",
    category: "Branding",
  },
  {
    src: "/projects/3d.mp4",
    title: "3D Product",
    desc: "Visual Experience",
    category: "Branding",
  },
  {
    src: "/projects/ice.mp4",
    title: "Iceberg",
    desc: "3D Motion Design",
    category: "Branding",
  },
  {
    src: "/projects/animation.mp4",
    title: "Brand Animation",
    desc: "Motion Graphics",
    category: "Branding",
  },
  {
    src: "/projects/app9.mp4",
    title: "Startup Landing",
    desc: "Brand Identity",
    category: "Branding",
  },
];

export default function ProjectsGrid({ activeTab }) {
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  return (
    <section className="projects-wrapper">
      <div className="projects-grid">
        {filteredProjects.map((item, index) => (
          <div
            key={index}
            className={`project-card
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
                />
              </div>
            </div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}








// import "./ProjectsGrid.css";

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


//   {
//     src: "/projects/app2.mp4",
//     title: "Fintech App",
//     desc: "Mobile Experience",
//   },
//   {
//     src: "/projects/app3.mp4",
//     title: "Crypto Wallet",
//     desc: "Product Design",
//   },
//   {
//     src: "/projects/app4.mp4",
//     title: "AI Dashboard",
//     desc: "Data Visualization",
//   },
//   {
//     src: "/projects/app5.mp4",
//     title: "Travel Platform",
//     desc: "UX Strategy",
//   },
//   {
//     src: "/projects/app6.mp4",
//     title: "Health App",
//     desc: "UI · UX",
//   },
//   {
//     src: "/projects/app7.mp4",
//     title: "EdTech Platform",
//     desc: "Web Application",
//   },
//   {
//     src: "/projects/app8.mp4",
//     title: "Portfolio Website",
//     desc: "Creative Design",
//   },
//   {
//     src: "/projects/app9.mp4",
//     title: "Startup Landing",
//     desc: "Brand Identity",
//   },
//   {
//     src: "/projects/app10.mp4",
//     title: "SaaS Product",
//     desc: "Digital Solution",
//   },
// ];

// export default function ProjectsGrid() {
//   return (
//     <section className="projects-wrapper">
//       <div className="projects-grid">
//         {projects.map((item, index) => (
//           <div
//             key={index}
//             className={`project-card
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
//                   src={item.src}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               </div>
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
