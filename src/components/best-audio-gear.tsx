import Image from "next/image";

import ImageBestGear from "@/assets/images/image-best-gear.jpg";

export default function BestAudioGear() {
  return (
    <section className="grid gap-10 lg:h-[588px] lg:grid-cols-2 lg:gap-40">
      <div className="relative min-h-[300px] overflow-hidden rounded-md">
        <Image
          src={ImageBestGear}
          alt="Man with headphones"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center text-center lg:text-start">
        <h2 className="text-[40px] font-bold uppercase">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
