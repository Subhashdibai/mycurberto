import "../styles/Footer.css";
import { FaInstagram, FaYoutube, FaGithub, FaFacebook, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT SIDE */}
      <div className="footer-left">

        <div className="footer-contacts">
          <span className="pill">subhash@gmail.com</span>
          <span className="pill">+91 301 549 9309</span>
        </div>

        <div className="footer-address">
          <div>
            <p className="label">MAIN OFFICE</p>
            <p>901 N Pitt Street</p>
            <p>Noida Sector 2, 22314</p>
          </div>

          <div>
            <p className="label">SECOND OFFICE</p>
            <p>Na Perstyne</p>
            <p>Noida sector 5, 11000 Prague</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Privacy Policy</span>
          <span>2025, Cuberto</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="footer-right">
        <div className="footer-links">
          <span>Services</span>
          <span>Projects</span>
          <span>Company</span>
        </div>

        <div className="footer-links">
          <span>Blog</span>
          <span>Workflow</span>
          <span>Contacts</span>
        </div>
      </div>

      <div className="footer-socials">
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram color="red" size={35} />

    <FaInstagram />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube color="red" size={35} />
    <FaYoutube />
  </a>

  <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub color="red" size={35} />
    <FaGithub />
  </a>

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
   <FaFacebook color="red" size={35} />

    <FaFacebook />
  </a>

  <a
    href="https://www.google.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Website"
  >
    <FaGlobe color="red" size={35} />
    <FaGlobe />
  </a>
</div>




      {/* <div className="footer-socials">
  <a href="#" aria-label="Instagram">
    <FaInstagram />
  </a>
  <a href="#" aria-label="YouTube">
    <FaYoutube />
  </a>
  <a href="#" aria-label="GitHub">
    <FaGithub />
  </a>
  <a href="#" aria-label="Facebook">
    <FaFacebook />
  </a>
  <a href="#" aria-label="Website">
    <FaGlobe />
  </a>
</div> */}


    </footer>
  );
};

export default Footer;
