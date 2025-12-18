import React, { useEffect, useRef, useState } from "react";
import "./Services.css";

function ServicesVideo() {
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
      {/* VIDEO SECTION */}
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

      {/* FULL SCREEN VIDEO */}
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

export default ServicesVideo;
