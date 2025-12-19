import "./Contact.css";
import InterestChips from "./components/InterestChips";
import ContactForm from "./components/ContactForm";
import ContactFooterActions from "./components/ContactFooterActions";
import Footer from "../../components/Footer/Footer"
const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h1>
          Hey! Tell us all <br /> the things
        </h1>
      </div>

      <div className="contact-interest">
        <h2>I'm interested in...</h2>
        <InterestChips />
        <ContactForm/>
        <ContactFooterActions/>
        <Footer/>
      </div>
    </section>
  );
};

export default Contact;
