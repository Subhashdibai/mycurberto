import React from "react";

function VideoPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <video
        src="/videos/Short-video.mp4"
        controls
        autoPlay
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default VideoPage;
