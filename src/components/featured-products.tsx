import ImageSpeakerZx9 from "@/assets/images/image-speaker-zx9.png";
import ImageSpeakerZx7 from "@/assets/images/image-speaker-zx7.jpg";
import ImageEarphonesYx1 from "@/assets/images/image-earphones-yx1.jpg";
import SvgCircles from "@/assets/images/pattern-circles.svg";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <section>
      <div className="space-y-12">
        <div className="bg-primary relative flex h-[560px] items-center justify-end overflow-hidden rounded-lg px-24 text-white">
          <Image
            src={SvgCircles}
            alt="Circles"
            className="pointer-events-none absolute -bottom-80 -left-32"
          />
          <Image
            src={ImageSpeakerZx9}
            alt="ZX9 Speaker"
            className="pointer-events-none absolute -bottom-5 left-40 w-[375px] object-cover"
          />
          <div className="max-w-[349px] space-y-6">
            <h2 className="text-6xl font-bold uppercase">ZX9 Speaker</h2>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/product/zx9-speaker">See product</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex h-[320px] items-center overflow-hidden rounded-lg px-24">
          <Image
            src={ImageSpeakerZx7}
            alt="ZX7 Speaker"
            fill
            className="object-cover"
          />
          <div className="relative space-y-8">
            <h2 className="text-4xl font-bold uppercase">ZX7 Speaker</h2>
            <Button variant="outline" asChild>
              <Link href="/product/zx7-speaker">See product</Link>
            </Button>
          </div>
        </div>

        <div className="grid h-[320px] grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={ImageEarphonesYx1}
              alt="YX1 Earphones"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center space-y-8 rounded-lg bg-gray-200 px-24">
            <h2 className="text-4xl font-bold uppercase">YX1 Earphones</h2>
            <Button variant="outline" asChild>
              <Link href="/product/yx1-wireless-earphones">See product</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
