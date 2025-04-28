import Image from "next/image";
import { Button } from "./ui/button";

import ImageHero from "@/assets/images/image-hero.png";
import Link from "next/link";

export default function NewProductHero() {
  return (
    <section className="bg-[#141414] px-6 text-white">
      <div className="relative mx-auto grid h-[632px] max-w-6xl grid-cols-2 overflow-hidden">
        <Image
          src={ImageHero}
          alt="Headphones"
          className="absolute -top-24 right-0 object-cover"
        />
        <div className="relative flex max-w-[398px] flex-col items-start justify-center space-y-6">
          <small className="text-sm font-normal tracking-[10px] text-white/50 uppercase">
            New Product
          </small>
          <h1 className="text-6xl uppercase">XX99 Mark II Headphones</h1>
          <p className="max-w-[349px] text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button asChild>
            <Link href="/product/xx99-mark-ii-headphones">See product</Link>
          </Button>
        </div>
        <div></div>
      </div>
    </section>
  );
}
