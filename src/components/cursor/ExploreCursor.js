import { useEffect } from "react";
import "../../styles/ExploreCursor.css";

export default function ExploreCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".explore-cursor");
    if (!cursor) return;

    /* Mouse follow */
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    /* Show / Hide only on targets */
    const targets = document.querySelectorAll(".cursor-target");

    const showCursor = () => {
      cursor.classList.add("active");
    };

    const hideCursor = () => {
      cursor.classList.remove("active");
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", showCursor);
      el.addEventListener("mouseleave", hideCursor);
    });

    /* Cleanup */
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", showCursor);
        el.removeEventListener("mouseleave", hideCursor);
      });
    };
  }, []);

  return (
    <div className="explore-cursor">
      <span>Explore</span>
    </div>
  );
}



// import { useEffect } from "react";
// import "../../styles/ExploreCursor.css";

// export default function ExploreCursor() {
//   useEffect(() => {
//     const cursor = document.querySelector(".explore-cursor");

//     const move = (e) => {
//       cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     };

//     const show = () => cursor.classList.add("active");
//     const hide = () => cursor.classList.remove("active");

//     document.addEventListener("mousemove", move);

//     const targets = document.querySelectorAll(".cursor-target");
//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", show);
//       el.addEventListener("mouseleave", hide);
//     });

//     return () => {
//       document.removeEventListener("mousemove", move);
//     };
//   }, []);

//   return (
//     <div className="explore-cursor">
//       <span>Explore</span>
//     </div>
//   );
// }
