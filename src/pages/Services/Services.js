import "./Services.css";

/* 👇 ServicesVideo agar SAME folder me hai */
import ServicesVideo from "./ServicesVideo";
import ServicesSolutions from "./ServicesSolutions";
import ServicesBenefits from "./ServicesBenefits";
import Footer from "./Footer";



/* 👇 ServicesSolutions components/services folder me hai */


const Services = () => {
  return (
    <main className="services-page">

      {/* HERO TEXT */}
      <section className="services-hero">
        <span className="services-small">Our services</span>

        <h1 className="services-heading">
          Going beyond <br /> what’s possible
        </h1>
      </section>

      {/* VIDEO SECTION */}
      <ServicesVideo />

      {/* SOLUTIONS SECTION */}
      <ServicesSolutions />
        <ServicesBenefits />
        <Footer/>

    </main>
  );
};

export default Services;



// import "./Services.css";
// import ServicesVideo from "./ServicesVideo";
// import ServicesSolutions from "../../components/services/ServicesSolutions";



// const Services = () => {
//   return (
//     <main className="services-page">

    
//       <section className="services-hero">
//         <span className="services-small">Our services</span>

//         <h1 className="services-heading">
//           Going beyond <br /> what’s possible
//         </h1>
//       </section>

     
//        <ServicesVideo />
//        <ServicesSolutions />

//     </main>
//   );
// };

// export default Services;




// import "./Services.css";
// import ServicesVideo from "./ServicesVideo";
// const Services = () => {
//   return (
//     <main className="services-wrapper">
//       <div className="services-hero">
//         <span className="services-small">Our services</span>

//         <h1 className="services-heading">
//           Going beyond <br /> what’s possible
//         </h1>
//       </div>
//         <ServicesVideo />
//     </main>
      
//   );
// };

// export default Services;
