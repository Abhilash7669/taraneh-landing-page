export default function CTA() {
  return (
    <div className="min-h-screen flex justify-center gap-6 overflow-hidden">
      {/* <ScaleCard scaleSm={0.9} scaleXs={0.8} rounded="rounded-[48px]" />
      <ScaleCard scaleSm={0.85} scaleXs={0.75} rounded="rounded-[24px_64px]" />
      <ScaleCard scaleSm={0.9} scaleXs={0.8} rounded="rounded-full" /> */}
      <ThreeCards />
    </div>
  );
}

const ThreeCards = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-[5vw]">
      {/* Container that scales proportionally */}
      <div className="relative w-[90vw] max-w-[1200px] h-[45vw] max-h-[540px]">
        {/* Left Circle - Custom Made */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[28vw] max-w-[336px] text-[1rem] h-[28vw] max-h-[336px] rounded-full bg-green-500 flex flex-col items-center justify-center text-center p-[3vw]">
          <h2 className="font-serif text-card-olive-foreground text-[1vw] max-text-scale leading-[0.95] tracking-wide mb-[1.5vw]">
            CUSTOM
            <br />
            MADE
          </h2>
          <p className="text-card-olive-foreground/90 text-[1vw] max-text-scale-sm leading-snug mb-[2vw] px-[2vw]">
            Connect with our design team on WhatsApp or visit us at our
            tailoring studio in Kuravankonam, Trivandrum, KL.
          </p>
          <button className="bg-white text-foreground text-[1vw] max-text-scale-sm rounded-none border-0 mb-[0.8vw] hover:bg-white/90 transition-colors">
            WhatsApp Taraneh
          </button>
          <a
            href="#"
            className="text-card-olive-foreground text-[0.9vw] max-text-scale-sm underline underline-offset-2 hover:opacity-80"
          >
            Get directions to the studio
          </a>
        </div>

        {/* Center Rectangle - Image placeholder */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22vw] max-w-[264px] h-[32vw] max-h-[384px] bg-deep-wine z-10" />

        {/* Right Circle - Shop In-Store */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[28vw] max-w-[336px] h-[28vw] max-h-[336px] rounded-full bg-taupe flex flex-col items-center justify-center text-center p-[3vw]">
          <h2 className="font-serif text-card-taupe-foreground text-[1vw] max-text-scale leading-[0.95] tracking-wide mb-[1.5vw]">
            SHOP
            <br />
            IN-STORE
          </h2>
          <p className="text-card-taupe-foreground/90 text-[1vw] max-text-scale-sm leading-snug mb-[2vw] px-[2vw]">
            Explore our new store in Trivandrum for all things Taraneh..
          </p>
          <button className="bg-card-taupe-button text-card-taupe-foreground text-[1vw] max-text-scale-sm py-[0.8vw] px-[2vw] rounded-none border-0 hover:opacity-90 transition-opacity">
            Get directions to the store
          </button>
        </div>
      </div>
    </div>
  );
};

function ScaleCard({
  rounded,
  scaleSm,
  scaleXs,
}: {
  rounded: string;
  scaleSm: number;
  scaleXs: number;
}) {
  return (
    <div
      className={`
        origin-top
        transition-transform duration-300
        ${rounded}
        bg-zinc-900 text-white
        w-[280px] h-[180px]
        flex items-center justify-center text-xl font-semibold
        sm:scale-100
        md:scale-100
        max-sm:scale-[${scaleSm}]
        max-xs:scale-[${scaleXs}]
      `}
    >
      Proportional Card
    </div>
  );
}
