import Image from "next/image";
import UnionBg from "@/assets/kinav/union-bg.png";
import KinavStar from "@/assets/kinav/star-svg.svg";
import KinavDummyVideoImage from "@/assets/kinav/kinav-dummy-video.png";
import { kinavDescription } from "@/src/app/features/landing-page/data/index.data";
import GrainsContainer from "@/src/app/components/layout/grains.container";

type Props = object;

export default function Kinav({}: Props) {
  return (
    <GrainsContainer
      containerClassName="min-h-dvh sm:min-h-[136dvh] w-full sticky top-0 grid place-items-center bg-linear-to-t from-deep-wine to-soft-rose"
      className="flex flex-col items-center justify-start px-4 py-12 md:py-[6w]"
    >
      {/* bg-images positioned absolute */}
      <Image
        src={UnionBg}
        width={1920}
        height={1024}
        alt="union background"
        loading="lazy"
        quality={50}
        className="absolute bottom-4 left-0 w-full -z-20 h-[70dvh] md:h-[calc(136dvh-14rem)] hidden md:flex"
      />
      {/* top title & logo-svg*/}
      <div className="flex flex-col items-center gap-10 z-20">
        <Image src={KinavStar} height={20} width={20} alt="kinav-star" />
        <h2 className="text-7xl bg-clip-text text-transparent bg-linear-to-b from-white to-soft-rose">
          KINAV
        </h2>
      </div>
      {/* bottom half */}
      <div className="h-full flex flex-col items-center md:justify-center gap-12 z-20 mt-12z sm:mt-18 md:mt-0">
        {/* text-video/image-text */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p>New collection</p>
            <Image
              className="rounded-md h-80 w-xl object-cover"
              src={KinavDummyVideoImage}
              quality={50}
              height={240}
              width={240}
              alt="kinav-dummy-img"
            />
            <p>Unveiling Soon</p>
          </div>
          <p className="text-center text-sm md:text-base w-full mx-auto md:max-w-[92ch]">
            {kinavDescription}
          </p>
        </div>
        {/* todo: make button variant */}
        <div className="border-[3px] border-soft-white/35 px-12 py-6">
          Sign up to see it first
        </div>
      </div>
    </GrainsContainer>
  );
}
