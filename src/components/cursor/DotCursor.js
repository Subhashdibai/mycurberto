import { useEffect } from "react";
import "../../styles/DotCursor.css";

export default function DotCursor() {
  useEffect(() => {
    const dot = document.querySelector(".dot-cursor");

    const move = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return <div className="dot-cursor"></div>;
}
