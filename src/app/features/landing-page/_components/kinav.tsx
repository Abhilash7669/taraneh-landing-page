/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import UnionBg from "@/assets/kinav/union-svg.svg";
import KinavStar from "@/assets/kinav/star-svg.svg";
import KinavVideoFallbackImage from "@/assets/kinav/kinav-fallback-img.webp";
import { kinavDescription } from "@/app/features/landing-page/data/index.data";
import GrainsContainer from "@/app/components/layout/grains.container";
import { useEffect, useRef } from "react";
import { VideoPlayState } from "@/app/libs/types/video.types";
import WavyProp from "@/assets/kinav/wavy-prop.png"

type Props = object;

export default function Kinav({}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // todo: handle the duplicate video toggle logic
  function handleVideoToggle(state: VideoPlayState) {
    const _video = videoRef.current;
    if (_video) {
      if (state === "play") {
        _video.play();
        _video.classList.add("opacity-100");
      } else {
        _video.pause();
        _video.classList.remove("opacity-100");
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
        threshold: 0.4,
      },
    );

    observer.observe(_video as HTMLVideoElement);

    return () => {
      observer.unobserve(_video as HTMLVideoElement);
    };
  }, []);

  return (
    <GrainsContainer
      containerClassName="min-h-dvh sm:min-h-[136dvh] w-full sticky top-0 grid place-items-center bg-linear-to-t from-deep-wine to-soft-rose"
      className="flex flex-col items-center justify-start px-4 py-12 gap-12 md:gap-0 md:py-[6w]"
    >
      {/* bg-images positioned absolute */}
      {/* <Image 
        src={WavyProp}
        width={500}
        height={500}
        quality={75}
        alt="Wavy prop"
        className="absolute -top-12 left-0 h-[30rem] w-[200vw] object-fit -z-20"
      /> */}
      <img
        src={UnionBg.src}
        // width={1920}
        // height={1024}
        alt="union background"
        // loading="lazy"
        // quality={50}
        className="absolute bottom-4 left-0 w-full -z-20 h-[70dvh] md:h-[calc(136dvh-14rem)] hidden md:flex opacity-60"
      />
      {/* top title & logo-svg*/}
      <div className="flex flex-col items-center gap-10 z-20">
        <Image src={KinavStar} height={20} width={20} alt="kinav-star" />
        <h2 className="bg-clip-text text-transparent bg-linear-to-b from-white to-soft-rose">
          KINAV
        </h2>
      </div>
      {/* bottom half */}
      <div className="h-full w-full flex flex-col items-center md:justify-center gap-12 z-20 sm:mt-18 md:mt-0">
        {/* text-video/image-text */}
        <div className="space-y-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full">
            <p>New collection</p>
            <div className="rounded-md overflow-hidden w-full max-w-xl h-80 relative">
              <Image
                className="absolute inset-0 h-full w-full object-cover -z-10"
                src={KinavVideoFallbackImage}
                quality={50}
                height={240}
                width={240}
                alt="kinav-dummy-img"
              />
              <video
                loop
                muted
                playsInline
                ref={videoRef}
                className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 ease-in object-cover"
              >
                <source src="/videos/kinav-video.webm" type="video/webm" />
              </video>
            </div>
            <p>Unveiling Soon</p>
          </div>
          <p className="text-center text-sm md:text-base w-full mx-auto md:max-w-[92ch]">
            {kinavDescription}
          </p>
        </div>
        {/* todo: make button variant */}
        {/* note: temporarily hiding */}
        {/* <div className="border-[3px] border-soft-white/35 px-12 py-6">
          Sign up to see it first
        </div> */}
      </div>
    </GrainsContainer>
  );
}
