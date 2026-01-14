import { ClassValue, cn } from "@/app/libs/utils";
import Image from "next/image";
import BgGrain from "@/assets/kinav/bg-grains.svg";

type Props = {
  children: React.ReactNode;
  className?: ClassValue;
  containerClassName?: ClassValue;
};

export default function GrainSection({
  children,
  className = "",
  containerClassName = "",
}: Props) {
  return (
    <section
      className={cn(
        "min-h-dvh w-full grid place-items-center",
        containerClassName
      )}
    >
      <div className={cn("h-full w-full relative", className)}>
        {children}
        <Image
          src={BgGrain}
          quality={100}
          width={1024}
          height={1920}
          alt="grains-background"
          className="absolute top-0 left-0 h-full w-full object-cover z-0 opacity-70 mix-blend-overlay"
        />
      </div>
    </section>
  );
}
