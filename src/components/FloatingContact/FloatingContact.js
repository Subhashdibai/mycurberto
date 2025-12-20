import "./FloatingContact.css";
import avatar from "./avatar.png";
import { Link } from "react-router-dom";

const FloatingContact = () => {
  return (
    <Link to="/contact" className="floating-contact">
      <svg viewBox="0 0 200 200" className="circle-text">
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
          />
        </defs>
        <text>
          <textPath href="#circlePath">
            CONTACT · CONTACT · CONTACT · CONTACT ·
          </textPath>
        </text>
      </svg>

      <div className="contact-center">
        <img src={avatar} alt="contact" />
      </div>
    </Link>
  );
};

export default FloatingContact;




// import "./FloatingContact.css";
// import avatar from "./avatar.png";
 

// const FloatingContact = () => {
//   return (
//     <a href="/contact" className="floating-contact">
//       <svg viewBox="0 0 200 200" className="circle-text">
//         <defs>
//           <path
//             id="circlePath"
//             d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
//           />
//         </defs>
//         <text>
//           <textPath href="#circlePath">
//             CONTACT · CONTACT · CONTACT · CONTACT ·
//           </textPath>
//         </text>
//       </svg>

//       <div className="contact-center">

//         <img src={avatar} alt="contact" />
//       </div>
//     </a>
//   );
// };

// export default FloatingContact;
