import "./Services.css";

const ServicesBenefits = () => {
  return (
    <section className="benefits-wrapper">

      <h2 className="benefits-title">
        Benefits of <br /> working with us
      </h2>

      <div className="benefit-divider"></div>

      <div className="benefit-item">
        <span className="benefit-label">TIME ZONES AIN'T NO THING</span>
        <p className="benefit-text">
          Wherever you are in the world, you’ll feel like we’re
          right around the corner. Time differences don’t matter.
        </p>
      </div>

      <div className="benefit-divider"></div>

      <div className="benefit-item">
        <span className="benefit-label">IMPOSSIBLE? WE’RE ON IT</span>
        <p className="benefit-text">
          “Impossible” simply does not exist in our vocabulary.
          No shortcuts. No BS.
        </p>
      </div>

      <div className="benefit-divider"></div>

      <div className="benefit-item">
        <span className="benefit-label">FULL SPECTRUM OF SERVICES</span>
        <p className="benefit-text">
          UI/UX design, branding, frontend and backend —
          everything your business needs.
        </p>
      </div>

    </section>
  );
};

export default ServicesBenefits;
