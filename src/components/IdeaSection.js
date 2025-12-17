import "../styles/IdeaSection.css";


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
