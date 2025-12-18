import "./ProjectsGrid.css";

const projects = [
  // ===== Existing 11 =====
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

  // ===== New 9 (dummy – replace later if needed) =====
  {
    src: "/projects/app2.mp4",
    title: "Fintech App",
    desc: "Mobile Experience",
  },
  {
    src: "/projects/app3.mp4",
    title: "Crypto Wallet",
    desc: "Product Design",
  },
  {
    src: "/projects/app4.mp4",
    title: "AI Dashboard",
    desc: "Data Visualization",
  },
  {
    src: "/projects/app5.mp4",
    title: "Travel Platform",
    desc: "UX Strategy",
  },
  {
    src: "/projects/app6.mp4",
    title: "Health App",
    desc: "UI · UX",
  },
  {
    src: "/projects/app7.mp4",
    title: "EdTech Platform",
    desc: "Web Application",
  },
  {
    src: "/projects/app8.mp4",
    title: "Portfolio Website",
    desc: "Creative Design",
  },
  {
    src: "/projects/app9.mp4",
    title: "Startup Landing",
    desc: "Brand Identity",
  },
  {
    src: "/projects/app10.mp4",
    title: "SaaS Product",
    desc: "Digital Solution",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="projects-wrapper">
      <div className="projects-grid">
        {projects.map((item, index) => (
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
