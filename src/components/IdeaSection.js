import "../styles/IdeaSection.css";
import { Link } from "react-router-dom"; // 👈 ADD THIS

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

        {/* BUTTON → CONTACT PAGE */}
        <Link to="/contact" className="idea-btn">
          TELL US
        </Link>
      </div>

    </section>
  );
};

export default IdeaSection;





// import "../styles/IdeaSection.css";


// const IdeaSection = () => {
//   return (
//     <section className="idea-section">
      
//       {/* Background Video */}
//       <video
//         className="idea-video"
//         src="/videos/idea-bg.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Overlay Content */}
//       <div className="idea-content">
//         <h1>
//           Have <br /> an idea?
//         </h1>

//         <button className="idea-btn">
//           TELL US
//         </button>
//       </div>

//     </section>
//   );
// };

// export default IdeaSection;
