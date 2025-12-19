import "./Company.css";
import IdeaSection from "../../components/IdeaSection/IdeaSection";
import Footer from "../../components/Footer/Footer"

const Company = () => {
  return (
    <div className="company-page">

      {/* HERO */}
      <section className="company-hero">
        <h1>
          Creativity <br />
          meets technology
        </h1>
      </section>

      {/* IMAGE SECTION */}
      <section className="company-image">
        <img
          src="/company-office.jpg"
          alt="Company Office"
        />
      </section>

      {/* ABOUT */}
      <section className="company-about">
        <p>
          We are a digital product agency focused on strategy, design
          and engineering. We build digital experiences that people love.
        </p>
      </section>

      {/* VALUES */}
      <section className="company-values">
        <div className="value">
          <h3>Design driven</h3>
          <p>We believe design is not decoration, it’s a strategy.</p>
        </div>
        <div className="value">
          <h3>Technology focused</h3>
          <p>We use modern technologies to build scalable products.</p>
        </div>
        <div className="value">
          <h3>Human centered</h3>
          <p>We design products for real people.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="company-cta">
        <h2>Let’s build something great</h2>
        <button>Contact us</button>
      </section>
      <IdeaSection/>
       <Footer/>

    </div>
  );
};

export default Company;
