import { useParams, Link } from "react-router-dom";
import "./BlogDetail.css";
import IdeaSection from "../../components/IdeaSection";
import Footer from "../../components/Footer";


const blogs = [
  {
    id: "how-to-make-uiux-website",
    title: "How to Make UI/UX website // Frontend development",
    tag: "Design Course",
    date: "10/23/2024",
    description:
      "This master class will look into the UX / UI design of the next award-winning website.",
    video: "/blog/blog1.mp4",
  },
  {
    id: "emotional-web-development",
    title: "How to Cook an Emotional Site // Web Development",
    tag: "Design Course",
    date: "10/21/2024",
    description:
      "Learn how to create emotional and engaging digital experiences.",
    video: "/blog/blog2.mp4",
  },
  {
    id: "best-dev-resources",
    title: "Best Dev Resources for Modern UI",
    tag: "Dev Source",
    date: "10/18/2024",
    description:
      "A curated list of the best tools and resources for modern UI developers.",
    video: "/blog/blog3.mp4",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h2 style={{ padding: 100 }}>Blog not found</h2>;
  }

  return (
    <section className="blog-detail">
      {/* META */}
      <div className="blog-meta">
        <span className="blog-pill">{blog.tag}</span>
        <span className="blog-date">{blog.date}</span>
      </div>

      {/* TITLE */}
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-desc">{blog.description}</p>

      {/* HERO VIDEO */}
      <div className="blog-hero-video">
        <video src={blog.video} autoPlay muted loop playsInline />
      </div>

      {/* MAIN LAYOUT */}


        {/* MAIN LAYOUT */}
<div className="blog-layout">
  {/* LEFT CONTENT */}
  <div className="blog-content">
    <p>
      This master class will look into the UX / UI design of the next
      award-winning website. You will know what we aimed at, how the
      design concept was created, and the difficulties we had during
      development.
    </p>

    <p>
      The task seemed quite trivial – client’s site had become outdated,
      so the agency’s main mission was to redesign it. But not just a
      redesign was needed, but a complete rebranding and new corporate
      identity.
    </p>

    <p>
      For animations we used GreenSock (GSAP) and ScrollTrigger for smooth
      interactions and scroll-based motion.
    </p>

    <p>
      When creating the cursor effect, we used our previously announced
      Mouse Follower library.
    </p>

    <p>
      The most difficult task was to make falling stickers with text in the
      testimonials section, which should have physical properties and
      respond to the user's mouse cursor. The 2D physics engine Matter.js
      was chosen to solve this problem. The engine itself calculated only
      the physical parameters. And getting the coordinates and angles of
      these blocks was done using HTML/CSS.
    </p>
  </div>

  {/* RIGHT SIDEBAR */}
  <aside className="blog-sidebar">
    <h4>Share</h4>
    <div className="blog-share">
      <span>🔗</span>
      <span>f</span>
      <span>in</span>
      <span>x</span>
    </div>

    <h4>Related Posts</h4>
    <div className="related-posts">
      {blogs
        .filter((b) => b.id !== blog.id)
        .map((item) => (
          <Link
            to={`/blog/${item.id}`}
            key={item.id}
            className="related-card"
          >
            <video src={item.video} muted loop />
            <p>{item.title}</p>
          </Link>
        ))}
    </div>
  </aside>
</div>

{/* 🔥 CUBERTO STYLE FULL WIDTH MEDIA SECTION */}
<div className="blog-full-media">
  <video
    src={blog.video}
    controls
    muted
    playsInline
  />
  <IdeaSection/>
  <Footer/>
</div>
 </section>



  );
}

        /* <div className="blog-content">
          <p>
            This master class will look into the UX / UI design of the next
            award-winning website. You will know what we aimed at, how the
            design concept was created, and the difficulties we had during
            development.
          </p>

          <p>
            The task seemed quite trivial – client’s site had become outdated,
            so the agency’s main mission was to redesign it. But not just a
            redesign was needed, but a complete rebranding and new corporate
            identity.
          </p>

          <p>
            For animations we used GreenSock (GSAP) and ScrollTrigger for smooth
            interactions and scroll-based motion.
          </p>
          <p>When creating the cursor effect, we used our previously announced Mouse Follower library.</p>
          <p>The most difficult task was to make falling stickers with text in the testimonials section, which should have physical properties and respond to the user's mouse cursor. The 2D physics engine Matter.js was chosen to solve this problem. The engine itself calculated only the physical parameters. And getting the coordinates and angles of these blocks was done using HTML/CSS</p>
        </div>

     
        <aside className="blog-sidebar">
          <h4>Share</h4>
          <div className="blog-share">
            <span>🔗</span>
            <span>f</span>
            <span>in</span>
            <span>x</span>
          </div>

          <h4>Related Posts</h4>
          <div className="related-posts">
            {blogs
              .filter((b) => b.id !== blog.id)
              .map((item) => (
                <Link
                  to={`/blog/${item.id}`}
                  key={item.id}
                  className="related-card"
                >
                  <video src={item.video} muted loop />
                  <p>{item.title}</p>
                </Link>
              ))}
          </div>
        </aside>
      </div> */
   

