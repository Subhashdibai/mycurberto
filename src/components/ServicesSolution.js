import React from "react";
import "../../styles/ServicesSolutions.css";

const ServicesSolutions = () => {
  return (
    <section className="solutions-wrapper">
      <h2 className="solutions-title">Our solutions</h2>

      {/* ITEM 1 */}
      <div className="solution-item">
        <div className="solution-left">
          <span className="solution-label">WEBSITES AND PLATFORMS</span>
        </div>

        <div className="solution-right">
          <p className="solution-text">
            In our team, developers work alongside designers. This is crucial
            in creating a fast and responsive website that would excite the
            audience.
          </p>

          <button className="solution-btn">Read more</button>
        </div>
      </div>

      <div className="solution-divider" />

      {/* ITEM 2 */}
      <div className="solution-item">
        <div className="solution-left">
          <span className="solution-label">MOBILE APPLICATIONS</span>
        </div>

        <div className="solution-right">
          <p className="solution-text">
            Cuberto doesn't do cookie-cutter solutions. Every mobile app
            involves stages of target audience research and prototype testing.
            The result? A product that’s perfectly suited to your users.
          </p>

          <button className="solution-btn">Read more</button>
        </div>
      </div>

      <div className="solution-divider" />

      {/* ITEM 3 (optional – next screenshot ke liye ready) */}
      <div className="solution-item">
        <div className="solution-left">
          <span className="solution-label">STRATEGY AND BRANDING</span>
        </div>

        <div className="solution-right">
          <p className="solution-text">
            We identify your brand by developing a logo, corporate identity,
            user manuals, mockups, and souvenir products. Whatever it takes to
            get your brand noticed.
          </p>

          <button className="solution-btn">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSolutions;