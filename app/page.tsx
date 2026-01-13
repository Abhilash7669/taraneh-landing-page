import Hero from "@/app/features/landing-page/_components/hero";
import Kinav from "@/app/features/landing-page/_components/kinav";

export default function Home() {
  return (
    <main>
      {/* <p className="text-[12vw] fixed bottom-0 left-2/4 -translate-x-2/4 z-10">
        TARANEH
      </p> */}
      <div className="relative">
        <Hero />
        <Kinav />
      </div>
      <section className="min-h-dvh w-full flex items-center justify-center bg-yellow-500 z-30">
        <p className="text-black">Section C</p>
      </section>
    </main>
  );
}
