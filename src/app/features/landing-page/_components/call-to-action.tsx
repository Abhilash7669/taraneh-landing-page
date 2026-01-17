import Image from "next/image";
import BlueRosery from "@/assets/footer/blue-rosery.png";
import DanglingPhone from "@/assets/footer/dangling-telephone.png";

import { cn } from "@/app/libs/utils";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="h-[90vh] xl:h-[80vh] relative">
      {/* <ScaleCard scaleSm={0.9} scaleXs={0.8} rounded="rounded-[48px]" />
      <ScaleCard scaleSm={0.85} scaleXs={0.75} rounded="rounded-[24px_64px]" />
      <ScaleCard scaleSm={0.9} scaleXs={0.8} rounded="rounded-full" /> */}
      <Image
        src={BlueRosery}
        height={1920}
        width={1024}
        alt="background-image"
        className="absolute top-0 left-0 h-full w-full -z-10 object-cover"
      />
      <div className="flex flex-col xl:flex-row items-center gap-8 xl:justify-between xl:gap-6 2xl:gap-12 w-full relative xl:top-20 py-12 xl:py-0 px-12">
        {/* left-item */}
        <div className="xl:place-self-end gap-12 md:h-[420px] xl:h-[460px] max-w-[420px] md:max-w-[480px] flex flex-col justify-between px-6 py-10 md:px-8 md:py-8 md:p-8 xl:p-12 items-start bg-olive relative xl:top-24">
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-center uppercase">
              Custom <br />
              Made
            </h2>
            <p className="text-center">
              Connect with our design team on WhatsApp or visit us at our
              tailoring studio in Kuravankonam, Trivandrum, KL.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <p className="bg-white text-black p-6">WhatsApp Taraneh</p>
            <Link
              className="underline underline-offset-1 text-off-white"
              href="https://google.com/"
            >
              Get directions to the studio
            </Link>
          </div>
        </div>
        {/* mid-item */}
        <div className="xl:place-self-end hidden xl:flex relative h-[580px] xl:w-md xl:max-w-md">
          <Image
            src={DanglingPhone}
            className="absolute top-0 left-0 h-full w-full object-cover"
            height={500}
            width={500}
            alt="dangling-phone"
          />
        </div>
        <div className="xl:place-self-end flex flex-col items-center justify-between bg-taupe gap-12 h-auto md:h-[460px] w-full max-w-[420px] md:max-w-[480px] relative xl:top-24 py-10 md:py-10 p-6 md:p-12">
          <div className="flex flex-col items-center gap-4">
            <h2 className="uppercase text-center">
              Shop <br />
              in-Store
            </h2>
            <p className="text-center">
              Explore our new store in Trivandrum for all things Taraneh. .
            </p>
          </div>
          <p className="bg-white text-black p-6 text-center">
            WhatsApp Taraneh
          </p>
        </div>
      </div>
    </div>
  );
}
