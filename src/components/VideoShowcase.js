import React, { useEffect, useRef, useState } from "react";
import "../styles/VideoShowcase.css";

function VideoShowcase() {
  const cursorRef = useRef(null);
  const [showCursor, setShowCursor] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <section
        className="video-section"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        onClick={() => setOpen(true)}
      >
        <div className="video-wrapper">
          <video
            src="/videos/Short-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {showCursor && (
          <div className="play-cursor" ref={cursorRef}>
            ▶
          </div>
        )}
      </section>

      {open && (
        <div className="video-modal">
          <video
            src="/videos/Short-video.mp4"
            autoPlay
            controls
          />
          <div className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </div>
        </div>
      )}
    </>
  );
}

export default VideoShowcase;





// import React, { useEffect, useRef, useState } from "react";
// import "../styles/VideoShowcase.css";

// function VideoShowcase() {
//   const cursorRef = useRef(null);
//   const [showCursor, setShowCursor] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       if (!cursorRef.current) return;
//       cursorRef.current.style.left = e.clientX + "px";
//       cursorRef.current.style.top = e.clientY + "px";
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <>
//       {/* VIDEO SECTION */}
//       <section
//         className="video-section"
//         onMouseEnter={() => setShowCursor(true)}
//         onMouseLeave={() => setShowCursor(false)}
//         onClick={() => setOpen(true)}
//       >
//         <div className="video-wrapper">
//           <video
//             src="/videos/Short-video.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         </div>

//         {showCursor && (
//           <div className="play-cursor" ref={cursorRef}>
//             ▶
//           </div>
//         )}
//       </section>

//       {/* FULL SCREEN VIDEO */}
//       {open && (
//         <div className="video-modal">
//           <video
//             src="/videos/Short-video.mp4"
//             autoPlay
//             controls
//           />

//           <div className="close-btn" onClick={() => setOpen(false)}>
//             ✕
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default VideoShowcase;


// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/VideoShowcase.css";

// function VideoShowcase() {
//   const cursorRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const moveCursor = (e) => {
//       if (!cursorRef.current) return;
//       cursorRef.current.style.left = e.clientX + "px";
//       cursorRef.current.style.top = e.clientY + "px";
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <section className="video-section" onClick={() => navigate("/video")}>
//       <div className="video-wrapper">
//         <video
//           src="/videos/Short-video.mp4"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//         />
//       </div>

//       <div className="play-cursor" ref={cursorRef}>
//         ▶
//       </div>
//     </section>
//   );
// }

// export default VideoShowcase;

