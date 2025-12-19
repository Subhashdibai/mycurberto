import "./Blog.css";
import IdeaSection from "../../components/IdeaSection/IdeaSection";
import Footer from "../../components/Footer/Footer"

const posts = [
  { img: "/images/blog1.jpg", title: "How to Make UI/UX Website // Frontend Development", date: "10/23/2024" },
  { img: "/images/blog2.jpg", title: "How to Cook an Emotional Site // Web Development", date: "10/21/2024" },
  { img: "/images/blog3.jpg", title: "Best Case Study for Portfolio", date: "10/18/2024" },
  { img: "/images/blog4.jpg", title: "Modern Website Animation Tricks", date: "10/15/2024" },
  { img: "/images/blog5.jpg", title: "Design System from Scratch", date: "10/12/2024" },
  { img: "/images/blog6.jpg", title: "UI Design Process Explained", date: "10/10/2024" },
  { img: "/images/blog7.jpg", title: "Frontend Performance Tips", date: "10/08/2024" },
  { img: "/images/blog8.jpg", title: "How Cuberto Designs Websites", date: "10/06/2024" },
  { img: "/images/blog9.jpg", title: "Advanced CSS Animations", date: "10/04/2024" },
  { img: "/images/blog10.jpg", title: "UX Research Basics", date: "10/02/2024" },
  { img: "/images/blog11.jpg", title: "Creative Web Layouts", date: "09/30/2024" },
  { img: "/images/blog12.jpg", title: "Framer Motion Guide", date: "09/28/2024" },
  { img: "/images/blog13.jpg", title: "Portfolio Design Tips", date: "09/26/2024" },
  { img: "/images/blog14.jpg", title: "Typography for Web", date: "09/24/2024" },
  { img: "/images/blog15.jpg", title: "Color Theory for UI", date: "09/22/2024" },
  { img: "/images/blog16.jpg", title: "Smooth Scroll Experience", date: "09/20/2024" },
    { img: "/images/blog8.jpg", title: "How Cuberto Designs Websites", date: "10/06/2024" },
      { img: "/images/blog1.jpg", title: "How to Make UI/UX Website // Frontend Development", date: "10/23/2024" },
        { img: "/images/blog6.jpg", title: "UI Design Process Explained", date: "10/10/2024" },
          { img: "/images/blog2.jpg", title: "How to Cook an Emotional Site // Web Development", date: "10/21/2024" },
            { img: "/images/blog9.jpg", title: "Advanced CSS Animations", date: "10/04/2024" },
              { img: "/images/blog6.jpg", title: "UI Design Process Explained", date: "10/10/2024" },
                { img: "/images/blog13.jpg", title: "Portfolio Design Tips", date: "09/26/2024" },
                  { img: "/images/blog7.jpg", title: "Frontend Performance Tips", date: "10/08/2024" }
];

export default function Blog() {
  return (
    <div className="blog-page">
     
      <section className="blog-hero">
        <h1>Blog</h1>
        <p>News and insights on all things design by Cuberto.</p>

        <div className="blog-tabs">
          <button className="active">All Posts</button>
          <button>Design Course</button>
          <button>Design Tips</button>
          <button>Dev Source</button>
        </div>
      </section>

    
      <section className="blog-posts">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <div className="post-image">
              <img src={post.img} alt="blog" />
            </div>

            <div className="post-content">
              <span className="tag">DESIGN COURSE</span>
              <h3>{post.title}</h3>
              <p className="date">{post.date}</p>
            </div>
          </div>
        ))}
      </section>
      <IdeaSection/>
      <Footer/>
    </div>
  );
}




// import "./Blog.css";


// export default function Blog() {
// return (
// <div className="blog-page">

// <section className="blog-hero">
// <h1>Blog</h1>
// <p>News and insights on all things design by Cuberto.</p>


// <div className="blog-tabs">
// <button className="active">All Posts</button>
// <button>Design Course</button>
// <button>Design Tips</button>
// <button>Dev Source</button>
// </div>
// </section>



// <section className="blog-posts">
// <div className="post-card"></div>
// <div className="post-card"></div>
// </section>
// </div>
// );
// }