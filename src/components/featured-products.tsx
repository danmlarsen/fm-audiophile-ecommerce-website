import ImageSpeakerZx9Desktop from "@/assets/images/home/desktop/image-speaker-zx9.png";
import ImageSpeakerZx7Desktop from "@/assets/images/home/desktop/image-speaker-zx7.jpg";
import ImageEarphonesYx1Desktop from "@/assets/images/home/desktop/image-earphones-yx1.jpg";
import SvgCircles from "@/assets/images/pattern-circles.svg";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section>
      <div className="space-y-12">
        <div className="bg-primary relative flex flex-col items-center gap-8 overflow-hidden rounded-lg py-14 text-white lg:h-[560px] lg:flex-row lg:justify-end lg:px-24">
          <Image
            src={SvgCircles}
            alt="Circles"
            className="pointer-events-none absolute -top-20 w-[558px] max-w-none lg:-bottom-30 lg:-left-32 lg:w-[944px]"
          />
          <Image
            src={ImageSpeakerZx9Desktop}
            alt="ZX9 Speaker"
            className="pointer-events-none relative w-[207px] object-cover lg:absolute lg:-bottom-5 lg:left-40 lg:w-[375px]"
          />
          <div className="max-w-[349px] space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold uppercase lg:text-6xl">
              ZX9 Speaker
            </h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/product/zx9-speaker">See product</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex h-[320px] items-center overflow-hidden rounded-lg px-6 lg:px-24">
          <Image
            src={ImageSpeakerZx7Desktop}
            alt="ZX7 Speaker"
            fill
            className="object-cover"
          />
          <div className="relative space-y-8">
            <h2 className="text-2xl font-bold uppercase lg:text-4xl">
              ZX7 Speaker
            </h2>
            <Button variant="outline" asChild>
              <Link href="/product/zx7-speaker">See product</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:h-[320px] md:grid-cols-2">
          <div className="relative min-h-[200px] overflow-hidden rounded-lg">
            <Image
              src={ImageEarphonesYx1Desktop}
              alt="YX1 Earphones"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex min-h-[200px] flex-col items-start justify-center space-y-8 rounded-lg bg-gray-200 px-6 lg:px-24">
            <h2 className="text-2xl font-bold uppercase lg:text-4xl">
              YX1 Earphones
            </h2>
            <Button variant="outline" asChild>
              <Link href="/product/yx1-wireless-earphones">See product</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
