"use client";
import Image from "next/image";
import HeroImage from "@/assets/hero-img.webp";
import { useEffect, useRef } from "react";
import { VideoPlayState } from "@/app/libs/types/video.types";
type Props = object;

export default function Hero({}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // todo: handle the duplicate video toggle logic
  function handleVideoToggle(state: VideoPlayState) {
    const _video = videoRef.current;
    if (_video) {
      if (state === "play") {
        _video.play();
        _video.classList.add('opacity-100')
      } else {
        _video.pause();
        _video.classList.remove('opacity-100')
      }
    }
  }

  useEffect(() => {
    const _video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleVideoToggle("play");
          } else {
            handleVideoToggle("pause");
          }
        });
      },
      {
        threshold: 0.8,
      },
    );

    observer.observe(_video as HTMLVideoElement);

    return () => {
      observer.unobserve(_video as HTMLVideoElement);
    };
  }, []);

  return (
    <section className="min-h-[96vh] sticky top-0 grid place-items-center">
      <div className="h-full w-full relative flex items-end justify-center">
        <Image
          src={HeroImage}
          quality={85}
          alt="hero"
          sizes="100vw"
          priority
          fill={true}
          className="-z-10 object-cover"
        />
        <video
          loop
          muted
          playsInline
          ref={videoRef}
          className="absolute h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out -z-10"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
        </video>
        <h1 className="text-[14vw] mb-24 md:mb-0">TARANEH</h1>
      </div>
    </section>
  );
}
