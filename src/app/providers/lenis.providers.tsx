"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    /**
     * Lenis instance and config
     */
    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
    });

    /**
     * Set lenis instance to a useRef
     * can be used if needed
     */
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy(); // important cleanup
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
