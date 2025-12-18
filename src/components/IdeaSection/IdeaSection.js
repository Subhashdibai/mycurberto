// import "./IdeaSection.css";

// export default function IdeaSection() {
//   return (
//     <section className="idea-section">
     
//       <div className="idea-bg">
//         <img
//           src="/images/idea-bg.png"
//           alt="background"
//         />
//       </div>

      
//       <div className="idea-content">
//         <h2>
//           Have <br /> an idea?
//         </h2>

//         <a href="/contact" className="idea-btn">
//           TELL US
//         </a>
//       </div>
//     </section>
//   );
// }

import "./IdeaSection.css";


const IdeaSection = () => {
  return (
    <section className="idea-section">
      
      {/* Background Video */}
      <video
        className="idea-video"
        src="/videos/idea-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="idea-content">
        <h1>
          Have <br /> an idea?
        </h1>

        <button className="idea-btn">
          TELL US
        </button>
      </div>

    </section>
  );
};

export default IdeaSection;