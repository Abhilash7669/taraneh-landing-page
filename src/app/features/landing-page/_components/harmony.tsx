"use client";

import GrainSection from "@/src/app/components/layout/grains.container";
import Image from "next/image";
import GirlHoldingFlower from "@/assets/harmony/girl-holding-flower.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect } from "react";
import { harmonyDescription } from "@/src/app/features/landing-page/data/harmony/index.data";

gsap.registerPlugin(ScrollTrigger);

type Props = object;

export default function Harmony({}: Props) {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".harmony-section",
        start: "top top+=1",
        end: "+=140%",
        pin: true,
        scrub: 1.15,
        anticipatePin: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      ".girl-holding-flower",
      {
        scale: 0.94,
        yPercent: 5,
        opacity: 0.96,
        filter: "blur(1px)",
      },
      {
        scale: 1,
        yPercent: -3,
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        duration: 0.9,
      }
    );

    // tl.fromTo(
    //   ".girl-holding-flower",
    //   {
    //     // Framing
    //     clipPath: "inset(8% 0 8% 0)",
    //     scale: 1.05,

    //     // Depth & motion
    //     yPercent: 8,
    //     rotateZ: 0.35,

    //     // Perception
    //     opacity: 0.94,
    //     filter:
    //       "blur(1.25px) brightness(0.96) contrast(0.97) drop-shadow(0 26px 44px rgba(0,0,0,0.15))",
    //   },
    //   {
    //     // Framing settles
    //     clipPath: "inset(0% 0 0% 0)",
    //     scale: 1,

    //     // Reverse parallax
    //     yPercent: -6,
    //     rotateZ: 0,

    //     // Visual clarity
    //     opacity: 1,
    //     filter:
    //       "blur(0px) brightness(1) contrast(1) drop-shadow(0 12px 22px rgba(0,0,0,0.08))",

    //     ease: "none",
    //     duration: 1,
    //   }
    // );

    // tl.fromTo(
    //   ".girl-holding-flower",
    //   {
    //     clipPath: "inset(8% 0 8% 0)",
    //     scale: 1.05,
    //   },
    //   {
    //     clipPath: "inset(0% 0 0% 0)",
    //     scale: 1,
    //     ease: "none",
    //     duration: 1,
    //   }
    // );

    // tl.fromTo(
    //   ".girl-holding-flower",
    //   {
    //     scale: 0.9,
    //     yPercent: 10,
    //     opacity: 0.4,
    //     filter: "blur(1.5px)",
    //   },
    //   {
    //     yPercent: -4,
    //     opacity: 1,
    //     filter: "blur(0px)",
    //     ease: "none",
    //     duration: 1.5,
    //   }
    // );

    // tl.fromTo(
    //   ".girl-holding-flower",
    //   {
    //     scale: 0.9,
    //   },
    //   {
    //     scale: 1,
    //     duration: 1,
    //   }
    // );

    // Text reveal
    tl.fromTo(
      ".harmony-text",
      {
        clipPath: "inset(100% 0 -4% 0)", // tiny overshoot
        opacity: 0,
        y: 8,
      },
      {
        clipPath: "inset(0% 0 0% 0)",
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 0.9,
      },
      ">+=0.25"
    );

    tl.fromTo(
      ".harmony-description",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "none" },
      ">+=0.2"
    );

    // Reading time
    tl.to({}, { duration: 0.6 });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <GrainSection
      containerClassName="min-h-screen harmony-section bg-olive relative w-full flex flex-col items-center justify-center"
      className="px-4 py-4 md:py-6 flex flex-col gap-6"
    >
      <h2 className="harmony-text text-4xl md:text-7xl max-w-[19ch] text-center mx-auto translate-y-5 will-change-[clip-path,transform,opacity] mb-5 opacity-100">
        IN HARMONY WITH YOUR INNER LIGHT
      </h2>
      <Image
        src={GirlHoldingFlower}
        height={1920}
        width={1024}
        alt="girl-holding-flower"
        className="girl-holding-flower rounded-md mx-auto will-change-transform h-2/4 w-full md:h-[30vw] md:w-[60vw] z-30 object-cover"
      />
      <p className="harmony-description text-center text-sm md:text-base max-w-[76ch] mx-auto md:mt-4 will-change-[opacity,transform]">
        {harmonyDescription}
      </p>
    </GrainSection>
  );
}
