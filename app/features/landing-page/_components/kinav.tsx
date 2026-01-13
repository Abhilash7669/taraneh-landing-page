import Image from "next/image";
import BgGrain from "@/assets/kinav/bg-grains.svg";
import UnionBg from "@/assets/kinav/union-bg.png";
import KinavStar from "@/assets/kinav/star-svg.svg";
import KinavDummyVideoImage from "@/assets/kinav/kinav-dummy-video.png";
import { kinavDescription } from "@/app/features/landing-page/data/index.data";

type Props = object;

export default function Kinav({}: Props) {
  return (
    <section className="min-h-[136dvh] w-full sticky top-0 grid place-items-centers bg-linear-to-t from-deep-wine to-soft-rose">
      <div className="relative h-full w-full flex flex-col items-center justify-start p-[3vw]">
        {/* bg-images positioned absolute */}
        <Image
          src={BgGrain}
          quality={100}
          width={1024}
          height={1920}
          alt="grains-background"
          className="absolute top-0 left-0 h-full w-full object-cover -z-10 opacity-70 mix-blend-overlay"
        />
        <Image
          src={UnionBg}
          width={1920}
          height={1024}
          alt="union background"
          loading="lazy"
          quality={50}
          className="absolute bottom-4 left-0 w-full -z-20 h-[70dvh] md:h-[calc(136dvh-14rem)]"
        />
        {/* top title & logo-svg*/}
        <div className="flex flex-col items-center gap-10">
          <Image src={KinavStar} height={20} width={20} alt="kinav-star" />
          <h2 className="text-7xl bg-clip-text text-transparent bg-linear-to-b from-white to-soft-rose">
            KINAV
          </h2>
        </div>
        {/* bottom half */}
        <div className="h-full flex flex-col items-center justify-center gap-12">
          {/* text-video/image-text */}
          <div className="flex items-center gap-12">
            <p>New collection</p>
            <Image
              className="rounded-md h-80 w-xl"
              src={KinavDummyVideoImage}
              quality={50}
              height={240}
              width={240}
              alt="kinav-dummy-img"
            />
            <p>Unveiling Soon</p>
          </div>
          <p className="text-center max-w-[92ch]">{kinavDescription}</p>
        </div>
      </div>
    </section>
  );
}
