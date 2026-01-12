import Hero from "@/app/features/landing-page/_components/hero";

export default function Home() {
  return (
    <main className="relative border border-red-500">
      {/* <p className="text-[12vw] fixed bottom-0 left-2/4 -translate-x-2/4 z-10">
        TARANEH
      </p> */}
      <div className="relative">
        <Hero />
        <section className="min-h-dvh w-full sticky top-0 flex items-center justify-center bg-red-500 z-20">
          <p className="text-black">Section B</p>
        </section>
      </div>
      <section className="min-h-dvh w-full flex items-center justify-center bg-yellow-500 z-30">
        <p className="text-black">Section C</p>
      </section>
    </main>
  );
}
