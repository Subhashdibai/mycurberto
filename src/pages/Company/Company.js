import "./Company.css";
import IdeaSection from "../../components/IdeaSection/IdeaSection";
import Footer from "../../components/Footer/Footer"
import CompanyImageSection from "./CompanyImageSection";
import CompanyAwards from "./CompanyAwards";
import CompanyVideoSection from "./CompanyVideoSection";
import CompanyClients from "./CompanyClients";



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

      <section className="company-team">
  <div className="team-image left">
    <img
      src="/company/team-1.jpg"
      alt="Team working"
    />
  </div>

  <div className="team-image right">
    <img
      src="/company/team-2.jpg"
      alt="Team discussion"
    />
  </div>
</section>



      {/* CTA */}
      {/* <section className="company-cta">
        <h2>Let’s build something great</h2>
        <button>Contact us</button>
      </section> */}
      {/* <IdeaSection/> */}
       {/* <Footer/> */}
       <section className="company-dare">
  <h2 className="dare-heading">
    Simply put, we dare <br />
    what others don’t
  </h2>

  <div className="dare-divider"></div>

  <div className="dare-content">
    <div className="dare-label">
      <span>SIMPLY PUT, WE DARE</span>
      <span>WHAT OTHERS DON’T</span>
    </div>

    <div className="dare-text">
      <p>
        We make things, and we're awesome at it. Cuberto is a
        tight-knit team of experts who are ready to tackle the most
        intricate puzzles when it comes to websites and mobile apps
        development. We love what we do and we bet on the success of
        each and every project we undertake.
      </p>

      <p>
        Mainstream? No, thanks. Because it's not just work, it's
        passion. It's not just clients, it's people. Every project we
        take on is important to us, and every client is a big deal. We
        take care of your projects, your deadlines, and your nerves no
        matter what, and that’s a promise.
      </p>
    </div>
  </div>
</section>



 <CompanyImageSection image="/company/office.jpg" />

<CompanyAwards />
 <CompanyVideoSection />
  <CompanyClients /> 

 <section className="company-team">
  <div className="team-image left">
    <img
      src="/company/team-1.jpg"
      alt="Team working"
    />
  </div>

  <div className="team-image right">
    <img
      src="/company/team-2.jpg"
      alt="Team discussion"
    />
  </div>
</section>

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
