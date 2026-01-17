import CallToAction from "@/app/features/landing-page/_components/call-to-action";
import HarmonyV2 from "@/app/features/landing-page/_components/harmony/harmony-v2";
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
        <HarmonyV2 />
        <CallToAction />
      </main>
    </LenisProvider>
  );
}
