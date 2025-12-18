import "../styles/ServicesSection.css";

const services = [
  {
    title: "Product design",
    desc: "UI · UX · Design systems",
    media: "/services/service1.mp4",
  },
  {
    title: "Development",
    desc: "Web · Mobile · AI products",
    media: "/services/service2.mp4",
  },
  {
    title: "Motion & 3D",
    desc: "Animation · Visual storytelling",
    media: "/services/service3.mp4",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-wrapper">
      <div className="services-inner">

        {/* Header */}
        <div className="services-header">
          <h2>Our services</h2>
          <p>
            From motion design to AI-powered products — we design and build
            interfaces for the future.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((item, i) => (
            <div
              key={i}
              className={`service-item ${
                i === 1 ? "offset-down" : "offset-up"
              }`}
            >
              {/* ✅ VIDEO CARD ONLY */}
              <div
                className={`service-card ${
                  item.title === "Motion & 3D" ? "small-height" : ""
                }`}
              >
                           <div className="service-card cursor-target">
                <div className="service-media">
                  <video
                    src={item.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>

            </div>

                {/* <div className="service-media">
                  <video
                    src={item.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div> */}

              {/* ✅ TEXT COMPLETELY OUTSIDE CARD */}
              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="view-all-wrapper">
        <button className="view-all-btn">View all services</button>
      </div>
    </section>
  );
}



// import "../styles/ServicesSection.css";

// const services = [
//   {
//     title: "Product design",
//     desc: "UI · UX · Design systems",
//     media: "/services/service1.mp4",
//   },
//   {
//     title: "Development",
//     desc: "Web · Mobile · AI products",
//     media: "/services/service2.mp4",
//   },
//   {
//     title: "Motion & 3D",
//     desc: "Animation · Visual storytelling",
//     media: "/services/service3.mp4",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="services-wrapper">
//       <div className="services-inner">

//         {/* Header */}
//         <div className="services-header">
//           <h2>Our services</h2>
//           <p>
//             From motion design to AI-powered products — we design and build
//             interfaces for the future.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="services-grid">
//           {services.map((item, i) => (
//             <div
//               key={i}
//               className={`service-card ${
//                 i === 1 ? "offset-down" : "offset-up"
//               } ${
//                 item.title === "Motion & 3D" ? "small-height" : ""
//               }`}  // ✅ Added small-height for Motion & 3D
//             >
//               <div className="service-media">
//                 <video
//                   src={item.media}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               </div>

//               <div className="service-content">
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
         
//       </div>
        
// <div className="view-all-wrapper">
//   <button className="view-all-btn">
//     View all services
//   </button>
// </div>


//     </section>
//   );
// }





// import "../styles/ServicesSection.css";

// const services = [
//   {
//     title: "Product design",
//     desc: "UI · UX · Design systems",
//     media: "/services/service1.mp4",
//   },
//   {
//     title: "Development",
//     desc: "Web · Mobile · AI products",
//     media: "/services/service2.mp4",
//   },
//   {
//     title: "Motion & 3D",
//     desc: "Animation · Visual storytelling",
//     media: "/services/service3.mp4",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="services-wrapper">
//       <div className="services-inner">

//         {/* Header */}
//         <div className="services-header">
//           {/* <span className="services-dot"></span> */}
//           <h2>Our services</h2>
//           <p>
//             From motion design to AI-powered products — we design and build
//             interfaces for the future.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="services-grid">
//           {services.map((item, i) => (
//             <div
//               key={i}
//               className={`service-card ${
//                 i === 1 ? "offset-down" : "offset-up"
//               }`}
//             >
//               <div className="service-media">
//                 <video
//                   src={item.media}
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//               </div>
              

//               <div className="service-content">
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }







// import "../styles/ServicesSection.css";

// const services = [
//   {
//     type: "video",
//     title: "Product design",
//     desc: "UI · UX · Design systems",
//     media: "/services/design.mp4",
//   },
//   {
//     type: "image",
//     title: "Development",
//     desc: "Web · Mobile · AI products",
//     media: "/services/dev.jpg",
//   },
//   {
//     type: "video",
//     title: "Motion & 3D",
//     desc: "Animation · Visual storytelling",
//     media: "/services/motion.mp4",
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="services-wrapper">
//       <div className="services-inner">

//         {/* Header */}
//         <div className="services-header">
//           <span className="services-dot">•</span>
//           <h2>Our services</h2>
//           <p>
//             From motion design to AI-powered products — we design and build
//             interfaces for the future.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="services-grid">
//           {services.map((item, i) => (
//             <div className="service-card" key={i}>

//               <div className="service-media">
//                 {item.type === "video" ? (
//                   <video
//                     src={item.media}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                   />
//                 ) : (
//                   <img src={item.media} alt={item.title} />
//                 )}
//               </div>

//               <div className="service-content">
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
