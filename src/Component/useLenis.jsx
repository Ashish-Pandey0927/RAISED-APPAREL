import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust for speed (lower is faster)
      smooth: true, 
      smoothTouch: true,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
