import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PersonaMenu() {
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      menuRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div ref={menuRef} style={{ background: "black", color: "red", padding: "20px", fontSize: "24px", fontWeight: "bold" }}>
      <p>🎭 Persona Menu</p>
    </div>
  );
}
