
import "./CompanyImageSection.css";

const CompanyImageSection = ({ image }) => {
  return (
    <section className="company-image-section">
      <div className="company-image-wrapper">
        <img src={image} alt="Company workspace" />
      </div>
    </section>
  );
};

export default CompanyImageSection;
