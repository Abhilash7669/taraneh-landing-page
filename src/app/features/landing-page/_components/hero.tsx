import Image from "next/image";
import HeroImage from "@/assets/hero-img.png";
type Props = object;

export default function Hero({}: Props) {
  return (
    <section className="min-h-screen sticky top-0 grid place-items-center">
      <div className="h-full w-full relative flex items-end justify-center">
        <Image
          src={HeroImage}
          quality={85}
          alt="hero"
          sizes="100vw"
          priority
          fill={true}
          className="-z-10  object-cover"
        />
        <h1 className="text-[14vw] mb-24 md:mb-0">TARANEH</h1>
      </div>
    </section>
  );
}
