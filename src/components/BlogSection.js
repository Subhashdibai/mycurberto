import "../styles/BlogSection.css";

const blogs = [
  {
    title: "How to Make UI/UX website // Frontend development",
    tag: "DESIGN COURSE",
    date: "10/23/2024",
    video: "/blog/blog1.mp4",
  },
  {
    title: "How to Cook an Emotional Site // Web Development",
    tag: "DESIGN COURSE",
    date: "10/21/2024",
    video: "/blog/blog2.mp4",
  },
  {
    title: "Best Dev Resources for Modern UI",
    tag: "DEV SOURCE",
    date: "10/18/2024",
    video: "/blog/blog3.mp4",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">

      {/* BLOG HEADING */}
      <h1 className="blog-heading">Blog</h1>

      {blogs.map((blog, index) => (
        <div className="blog-row" key={index}>
          {/* LEFT VIDEO */}
          <div className="blog-video">
            <video
              src={blog.video}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="blog-content">
            <span className="blog-tag">{blog.tag}</span>
            <h2>{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
          </div>
        </div>
      ))}

      <div className="blog-btn-wrap">
        <button className="blog-btn">Visit our blog</button>
      </div>

    </section>
  );
}








// import "../styles/BlogSection.css";



// const blogs = [
//   {
//     title: "How to Make UI/UX website // Frontend development",
//     tag: "DESIGN COURSE",
//     date: "10/23/2024",
//     video: "/blog/blog1.mp4",
//   },
//   {
//     title: "How to Cook an Emotional Site // Web Development",
//     tag: "DESIGN COURSE",
//     date: "10/21/2024",
//     video: "/blog/blog2.mp4",
//   },
//   {
//     title: "Best Dev Resources for Modern UI",
//     tag: "DEV SOURCE",
//     date: "10/18/2024",
//     video: "/blog/blog3.mp4",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="blog-section">Blog
//       {blogs.map((blog, index) => (
//         <div className="blog-row" key={index}>
//           {/* LEFT VIDEO */}
//           <div className="blog-video">
//             <video
//               src={blog.video}
//               autoPlay
//               muted
//               loop
//               playsInline
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="blog-content">
//             <span className="blog-tag">{blog.tag}</span>
//             <h2>{blog.title}</h2>
//             <p className="blog-date">{blog.date}</p>
//           </div>
//         </div>
//       ))}
    

// <div className="blog-btn-wrap">
//   <button className="blog-btn">Visit our blog</button>
// </div>



//     </section>
//   );
// }

// import "../styles/BlogSection.css";

// const blogs = [
//   {
//     title: "Designing AI products",
//     tag: "Design",
//     video: "/blog/blog1.mp4",
//   },
//   {
//     title: "Motion in digital products",
//     tag: "Motion",
//     video: "/blog/blog2.mp4",
//   },
//   {
//     title: "UX trends for 2025",
//     tag: "UX/UI",
//     video: "/blog/blog3.mp4",
//   },
// ];

// export default function BlogSection() {
//   return (
//     <section className="blog-wrapper">
//       <div className="blog-inner">
//         <h2 className="blog-title">Blog</h2>

//         <div className="blog-cards">
//           {blogs.map((item, index) => (
//             <div className="blog-card" key={index}>
              
//               {/* VIDEO */}
//               <video
//                 src={item.video}
//                 muted
//                 autoPlay
//                 loop
//                 playsInline
//               />

//               {/* TEXT */}
//               <div className="blog-content">
//                 <span>{item.tag}</span>
//                 <h3>{item.title}</h3>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
