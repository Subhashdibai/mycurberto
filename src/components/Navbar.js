import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  // const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
  <div className="navbar-inner">
    <div className="logo">Algomindz</div>

    <nav className="nav-menu">
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      
      <NavLink to="/company">Company</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contacts</NavLink>
    </nav>
  </div>
</header>

    // <header className={`navbar ${show ? "show" : "hide"}`}>
    //   <div className="navbar-inner">
    //     <div className="logo">cuberto</div>

    //     {/* Desktop Menu */}
    //     <nav className="nav-desktop">
    //       <NavLink to="/services">Services</NavLink>
    //       <NavLink to="/projects">Projects</NavLink>
    //       <NavLink to="/company">Company</NavLink>
    //       <NavLink to="/blog">Blog</NavLink>
    //       <NavLink to="/contact">Contacts</NavLink>
    //     </nav>

    //     {/* Mobile Hamburger */}
    //     <div
    //       className={`hamburger ${menuOpen ? "open" : ""}`}
    //       onClick={() => setMenuOpen(!menuOpen)}
    //     >
    //       <span />
    //       <span />
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
    //     <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
    //     <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
    //     <NavLink to="/company" onClick={() => setMenuOpen(false)}>Company</NavLink>
    //     <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
    //     <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contacts</NavLink>
    //   </div>
    // </header>
  );
}



// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/Navbar.css";

// export default function Navbar() {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Top par navbar hamesha visible
//       if (currentScrollY < 80) {
//         setShow(true);
//       }
//       // Scroll down → hide
//       else if (currentScrollY > lastScrollY) {
//         setShow(false);
//       }
//       // Scroll up → show
//       else {
//         setShow(true);
//       }

//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);


//   return (
//   <header className={`navbar ${show ? "show" : "hide"}`}>
//     <div className="navbar-inner">
//       <div className="logo">cuberto</div>

//       <nav>
//         <NavLink to="/services">Services</NavLink>
//         <NavLink to="/projects">Projects</NavLink>
//         <NavLink to="/company">Company</NavLink>
//         <NavLink to="/blog">Blog</NavLink>
//         <NavLink to="/contact">Contacts</NavLink>
//       </nav>
//     </div>
//   </header>
// );
// }

//   return (
//     <header className={`navbar ${show ? "show" : "hide"}`}>
//       <div className="logo">cuberto</div>

//       <nav>
//         <NavLink to="/services">Services</NavLink>
//         <NavLink to="/projects">Projects</NavLink>
//         <NavLink to="/company">Company</NavLink>
//         <NavLink to="/blog">Blog</NavLink>
//         <NavLink to="/contact">Contacts</NavLink>
//       </nav>
//     </header>
//   );
// }




// import React, { useEffect, useState } from "react";
// // import "./Navbar.css";
// import "../styles/Navbar.css";

// export default function Navbar() {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         // scroll down
//         setShow(false);
//       } else {
//         // scroll up
//         setShow(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <header className={`navbar ${show ? "show" : "hide"}`}>
//       <div className="logo">cuberto</div>
//       <nav>
//         <a href="#">Services</a>
//         <a href="#">Projects</a>
//         <a href="#">Company</a>
//         <a href="#">Blog</a>
//         <a href="#">Contacts</a>
//       </nav>
//     </header>
//   );
// }


// import React from "react";
// import "../styles/Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">cuberto</div>

//       <ul className="nav-links">
//         <li>Services</li>
//         <li>Projects</li>
//         <li>Company</li>
//         <li>Blog</li>
//         <li>Contacts</li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
