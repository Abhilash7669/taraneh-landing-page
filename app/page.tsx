import Harmony from "@/app/features/landing-page/_components/harmony";
import Hero from "@/app/features/landing-page/_components/hero";
import Kinav from "@/app/features/landing-page/_components/kinav";
import LenisProvider from "@/app/providers/lenis.providers";

export default function Home() {
  return (
    <LenisProvider>
      <main>
        <div className="relative">
          <Hero />
          <Kinav />
        </div>
        <Harmony />
      </main>
    </LenisProvider>
  );
}
