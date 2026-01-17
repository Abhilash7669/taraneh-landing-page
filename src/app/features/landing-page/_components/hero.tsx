import Image from "next/image";
import HeroImage from "@/assets/hero-img.png";
type Props = object;

export default function Hero({}: Props) {
  return (
    <section className="min-h-screen sticky top-0 grid place-items-center">
      <div className="h-full w-full relative flex items-end justify-center">
        <Image
          src={HeroImage}
          height={1920}
          width={1024}
          quality={100}
          alt="hero"
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
        />
        <h1 className="text-[14vw] mb-24 md:mb-0">TARANEH</h1>
      </div>
    </section>
  );
}
