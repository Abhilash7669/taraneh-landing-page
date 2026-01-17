"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import TaranehLogo from "@/assets/logo/taraneh-logo.svg";
import ChevronDown from "@/assets/helper-svgs/arrow.svg";
import { useEffect, useRef } from "react";

type Props = object;

// todo: add the cubic-beziers as tailwindcss utility classes

export default function Header({}: Props) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerContainerRef = useRef<HTMLDivElement | null>(null);
  const isScrollStart = useRef<boolean>(false);
  const isScrolling = useRef<boolean>(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  function handleScroll() {
    const headerClasses = [
      "opacity-90",
      "bg-white/20",
      "backdrop-blur-lg",
      "py-0!",
    ];
    if (!isScrollStart.current) {
      isScrollStart.current = true;
      isScrolling.current = true;
      if (headerRef.current) {
        headerRef.current.classList.add(...headerClasses);
      }
      if (headerContainerRef.current)
        headerContainerRef.current.classList.add("scale-80");
    }

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
      isScrollStart.current = false;
      if (headerRef.current)
        headerRef.current.classList.remove(...headerClasses);
      if (headerContainerRef.current)
        headerContainerRef.current.classList.remove("scale-80");
    }, 200);
  }

  useEffect(() => {
    /**
     * Detect if scroll started
     * Detect if we are still scrolling
     * if we started scrolling - apply styles
     * if we are still scrolling - keep clearing timeout and setting the timeout
     */

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed py-6 top-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] w-full z-30"
    >
      <div
        ref={headerContainerRef}
        className="ease-[cubic-bezier(0.25,0.1,0.25,1)] transition-all duration-300 flex items-center justify-between w-full max-w-7xl mx-auto relative px-4 py-1"
      >
        <p className="flex items-center gap-2">
          <img src={ChevronDown.src} alt="chevron-down" />
          Shop
        </p>
        <p>Journal</p>
        <div>
          <Image
            src={TaranehLogo}
            height={46}
            width={46}
            quality={100}
            alt="Taraneh"
          />
        </div>
        <p>About</p>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-custom-green animate-pulse" />
          <p className="text-custom-green underline underline-offset-1 text-sm">
            WHATSAPP
          </p>
        </div>
      </div>
    </header>
  );
}
