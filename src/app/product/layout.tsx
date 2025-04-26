"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ProductAlternatives from "./[slug]/product-alternatives";
import ProductCategories from "@/components/product-categories";
import BestAudioGear from "@/components/best-audio-gear";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="mx-auto mt-32 max-w-6xl space-y-14">
      <Button variant="ghost" onClick={() => router.back()} className="px-0">
        Go Back
      </Button>
      <div className="space-y-40">
        {children}
        <ProductAlternatives />
        <ProductCategories />
        <BestAudioGear />
      </div>
    </div>
  );
}
