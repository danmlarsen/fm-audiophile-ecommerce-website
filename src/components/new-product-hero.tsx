import Image from 'next/image';
import { Button } from './ui/button';

import ImageHero from '@/assets/images/image-hero.jpg';

export default function NewProductHero() {
  return (
    <div className="bg-[#0E0E0E] text-white">
      <div className="max-w-6xl mx-auto h-[632px] grid grid-cols-2 relative">
        {/* <Image src={ImageHero} alt="Headphones" fill className="object-cover" /> */}
        <div className="space-y-6 flex flex-col justify-center items-start">
          <small>New Product</small>
          <h1>XX99 Mark II Headphones</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button>See product</Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
