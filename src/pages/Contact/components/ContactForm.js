const budgets = ["10-20k", "30-40k", "40-50k", "50-100k", "> 100k"];

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form-field">
        <input type="text" placeholder="Your name" />
      </div>

      <div className="form-field">
        <input type="email" placeholder="Email" />
      </div>

      <div className="form-field">
        <textarea placeholder="Tell us about your project"></textarea>
      </div>

      <div className="budget-section">
        <h4>Project budget (USD)</h4>

        <div className="budget-chips">
          {budgets.map((item, i) => (
            <button key={i} className="budget-chip">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
