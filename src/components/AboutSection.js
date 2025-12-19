import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AboutSection.css";

function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      {/* LEFT */}
      <div className="about-media">
        <video
          src="/videos/Frame.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* RIGHT */}
      <div className="about-content">
        <div className="about-inner">
          <p>
            Since 2010, we have been helping our clients find exceptional
            solutions for their businesses, creating memorable websites and
            digital products.
          </p>

          <p>
            Cuberto doesn't do cookie-cutter solutions and we build products
            exactly as they were during the design phase, no short cuts or
            simplifications.
          </p>

          {/* ✅ ONLY CHANGE HERE */}
          <button
            className="about-btn"
            onClick={() => navigate("/services")}
          >
            What we do
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;



// import React from "react";
// import "../styles/AboutSection.css";

// function AboutSection() {
//   return (
//     <section className="about-section">
//       {/* LEFT */}
//       <div className="about-media">
//         <video
//           src="/videos/Frame.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//       </div>

//       {/* RIGHT */}
//       <div className="about-content">
//         <div className="about-inner">
//           <p>
//             Since 2010, we have been helping our clients find exceptional
//             solutions for their businesses, creating memorable websites and
//             digital products.
//           </p>

//           <p>
//             Cuberto doesn't do cookie-cutter solutions and we build products
//             exactly as they were during the design phase, no short cuts or
//             simplifications.
//           </p>

//           <button className="about-btn">What we do</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;



// import React from "react";
// import "../styles/AboutSection.css";

// function AboutSection() {
//   return (
//     <section className="about-section">
//       {/* LEFT – 3D VIDEO */}
//       <div className="about-media">
//         <video
//           src="/videos/3d-animation.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//       </div>

//       {/* RIGHT – TEXT */}
//       <div className="about-content">
//         <p className="about-text">
//           Since 2010, we have been helping our clients find exceptional
//           solutions for their businesses, creating memorable websites and
//           digital products.
//         </p>

//         <p className="about-text">
//           Cuberto doesn't do cookie-cutter solutions and we build products
//           exactly as they were during the design phase, no short cuts or
//           simplifications.
//         </p>

//         <button className="about-btn">What we do</button>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;
