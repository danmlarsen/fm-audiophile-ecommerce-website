"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ProductCategories from "@/components/product-categories";
import BestAudioGear from "@/components/best-audio-gear";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="px-6 md:px-10">
      <div className="mx-auto mt-4 max-w-6xl md:mt-12 lg:mt-32 lg:space-y-14">
        <Button variant="ghost" onClick={() => router.back()} className="px-0">
          Go Back
        </Button>
        <div className="space-y-32 lg:space-y-40">
          {children}
          <ProductCategories />
          <BestAudioGear />
        </div>
      </div>
    </div>
  );
}
