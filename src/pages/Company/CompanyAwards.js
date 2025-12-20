import "./CompanyAwards.css";

const CompanyAwards = () => {
  return (
    <section className="company-awards">
      <div className="awards-container">
        
        {/* BIG TITLE */}
        <h1 className="awards-title">
          Agency of the Year<br />according to<br />Awwwards
        </h1>

        <div className="awards-divider"></div>

        {/* CONTENT GRID */}
        <div className="awards-content">
          <div className="awards-left">
            <p>AGENCY OF THE YEAR<br />ACCORDING TO AWWWARDS</p>
          </div>

          <div className="awards-right">
            <p>
              We know winning isn’t everything. However, among the many
              awards we’ve received, we highlight the most prestigious
              and respected among international design communities:
              the <span>Awwwards</span> Agency of the Year trophy and the
              <span> Dribbble</span> 100K Club Member Award.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyAwards;
