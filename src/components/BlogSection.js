import "../styles/BlogSection.css";
import { Link } from "react-router-dom"; // 👈 ADD THIS

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
        <Link to="/blog" className="blog-btn">
          Visit our blog
        </Link>
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
//     <section className="blog-section">

//       {/* BLOG HEADING */}
//       <h1 className="blog-heading">Blog</h1>

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

//       <div className="blog-btn-wrap">
//          <button className="blog-btn">Visit our blog</button> 

        
//       </div>

//     </section>
//   );
// }




