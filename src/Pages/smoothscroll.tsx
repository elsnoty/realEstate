import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger)
function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 5,
    smoothTouch: false, 
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="animate">
            {child}
          </div>
        ))}
      </div>
    </ReactLenis>
  );
}

export default SmoothScrolling;