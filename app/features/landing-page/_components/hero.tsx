import Image from "next/image";
import HeroImage from "@/assets/hero-img.png"
import TaranehLogo from "@/assets/logo/taraneh-logo.svg";
type Props = object;

export default function Hero({}: Props) {
  return (
    <section className="min-h-dvh sticky top-0 grid place-items-center">
      <div className="h-full w-full relative flex items-end justify-center">
        <Image
          src={HeroImage}
          height={1920}
          width={1024}
          quality={100}
          alt="hero"
          className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute top-8 left-2/4 -translate-x-2/4 flex items-center justify-between w-full px-4 max-w-7xl mx-auto">
          <div className="flex-1 grid place-items-center">
            <Image
              src={TaranehLogo}
              height={60}
              width={60}
              quality={100}
              alt="Taraneh"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-custom-green animate-pulse" />
            <p className="text-custom-green underline underline-offset-1 text-sm">WHATSAPP</p>
          </div>
        </div>
        <h1 className="text-[12vw]">
            TARANEH
        </h1>
      </div>
    </section>
  );
}
