import Harmony from "@/src/app/features/landing-page/_components/harmony";
import Hero from "@/src/app/features/landing-page/_components/hero";
import Kinav from "@/src/app/features/landing-page/_components/kinav";
import LenisProvider from "@/src/app/providers/lenis.providers";

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
