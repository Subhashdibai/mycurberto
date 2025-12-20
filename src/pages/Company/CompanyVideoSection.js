import "./CompanyVideoSection.css";

const CompanyVideoSection = () => {
  return (
    <section className="company-video-section">
      <div className="video-wrapper">
        <video
          className="company-video"
          src="/videos/company-video.mp4"   // 👈 yahan tum apna video daal dena
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default CompanyVideoSection;
