import Image from "next/image";
import { Button } from "./ui/button";

import ImageHeroDesktop from "@/assets/images/home/desktop/image-hero.jpg";
import ImageHeroMobile from "@/assets/images/home/mobile/image-header.jpg";
import ImageHeroTablet from "@/assets/images/home/tablet/image-header.jpg";

import Link from "next/link";

export default function NewProductHero() {
  return (
    <section className="relative bg-[#181818] text-white md:px-6 lg:px-10">
      <Image
        src={ImageHeroMobile}
        alt="Headphones"
        className="object-contain md:hidden"
        fill
      />
      <Image
        src={ImageHeroTablet}
        alt="Headphones"
        className="hidden object-contain md:block lg:hidden"
        fill
      />
      <Image
        src={ImageHeroDesktop}
        alt="Headphones"
        className="hidden object-contain lg:block"
        fill
        sizes="100vw"
      />
      <div className="mx-auto grid min-h-[calc(100vh-90px)] max-w-6xl items-center justify-center overflow-hidden lg:h-[729px] lg:min-h-0 lg:grid-cols-2 lg:justify-start">
        <div className="relative mx-auto flex max-w-[328px] flex-col items-center justify-center space-y-6 py-28 text-center md:max-w-[379px] lg:mx-0 lg:items-start lg:text-left">
          <small className="text-sm font-normal tracking-[10px] text-white/50 uppercase">
            New Product
          </small>
          <h1 className="text-4xl uppercase sm:text-[56px]">
            XX99 Mark II Headphones
          </h1>
          <p className="max-w-[349px] text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button asChild>
            <Link href="/product/xx99-mark-ii-headphones">See product</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
