"use client";

import ImageHeadphones from "@/assets/images/image-category-thumbnail-headphones.png";
import ImageEarphones from "@/assets/images/image-category-thumbnail-earphones.png";
import ImageSpeakers from "@/assets/images/image-category-thumbnail-speakers.png";
import Image from "next/image";
import { Button } from "./ui/button";
import IconArrowRight from "./ui/icons/IconArrowRight";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

const categoryMockData = [
  {
    title: "Headphones",
    href: "/headphones",
    image: ImageHeadphones,
  },
  {
    title: "Speakers",
    href: "/speakers",
    image: ImageSpeakers,
  },
  {
    title: "Earphones",
    href: "/earphones",
    image: ImageEarphones,
  },
];

export default function ProductCategories({
  onCategoryClick,
}: {
  onCategoryClick?: () => void;
}) {
  const router = useRouter();

  return (
    <section>
      <div className="grid gap-4 md:grid-cols-3">
        {categoryMockData.map((category, index) => (
          <Link
            href={category.href}
            onClick={() => {
              onCategoryClick?.();
            }}
            key={category.title}
            className="group relative flex h-[217px] flex-col justify-end lg:h-[284px]"
          >
            <Image
              src={category.image}
              alt={category.title}
              className={cn(
                "absolute inset-x-0 -top-2 z-10 mx-auto w-full max-w-[180px] object-cover transition-transform duration-300 group-hover:-translate-y-2.5 group-hover:scale-105 md:-top-10 md:max-w-[200px] lg:-top-5 lg:max-w-[250px]",
                index === 1 && "lg:-top-2",
                index === 2 && "top-2 md:-top-5 lg:-top-0",
              )}
            />
            <div className="relative flex h-[165px] flex-col items-center justify-end gap-4 rounded-md bg-gray-200 pb-5 lg:h-[204px]">
              <h4 className="!leading-none">{category.title}</h4>
              <Button
                onClick={() => {
                  onCategoryClick?.();
                  router.push(category.href);
                }}
                variant="ghost"
                className="group-hover:text-primary flex h-[18px] items-center gap-2 py-0 font-bold tracking-[1px] text-black/50"
              >
                <span>Shop</span>
                <IconArrowRight className="text-primary" />
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
