/* eslint-disable @next/next/no-img-element */
import GrainSection from "@/app/components/layout/grains.container";
import Image from "next/image";
import HandGrass from "@/assets/harmony/hand-grass.png";
import { harmonyDescription } from "@/app/features/landing-page/data/harmony/index.data";
import Rays from "@/assets/harmony/rays.svg";
export default function HarmonyV2() {
  return (
    <GrainSection
      containerClassName="bg-linear-to-tr from-taupe to-charcoal"
      className="flex flex-col lg:flex-row gap-12 lg:gap-4 items-start lg:items-end pt-12"
    >
      <div className="md:h-auto place-content-center h-150 w-5/6 sm:w-5/6 md:w-4/6 lg:w-[52%] z-20">
        <Image
          src={HandGrass}
          height={1920}
          width={1024}
          alt="aesthetic image"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="lg:h-full w-full lg:flex-1 pl-4 md:pl-12 lg:pl-0 space-y-12 z-20">
        <h2 className="uppercase">
          In <br /> Harmony <br /> with your <br /> inner light
        </h2>
        <p className="max-w-[54ch] lg:max-w-[44ch] ml-6 sm:ml-24 pr-4 lg:pr-0 lg:ml-0 lg:place-self-end">
          {harmonyDescription}
        </p>
      </div>
      <img className="lg:absolute lg:bottom-0 lg:right-0 z-0 h-auto w-[80vw] mx-auto lg:mx-0 lg:w-[50vw]" src={Rays.src} alt="image" />
    </GrainSection>
  );
}
