import ImageHeadphones from "@/assets/images/image-category-thumbnail-headphones.png";
import ImageEarphones from "@/assets/images/image-category-thumbnail-earphones.png";
import ImageSpeakers from "@/assets/images/image-category-thumbnail-speakers.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import IconArrowRight from "./ui/icons/IconArrowRight";
import { cn } from "@/lib/utils";

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

export default function ProductCategories() {
  return (
    <section>
      <div className="grid gap-4 md:grid-cols-3">
        {categoryMockData.map((category, index) => (
          <div
            key={category.title}
            className="relative flex h-[217px] flex-col justify-end lg:h-[284px]"
          >
            <Image
              src={category.image}
              alt={category.title}
              className={cn(
                "absolute inset-x-0 -top-8 z-10 mx-auto w-full max-w-[200px] object-cover lg:-top-5 lg:max-w-[250px]",
                index === 1 && "lg:-top-2",
                index === 2 && "-top-5 lg:-top-0",
              )}
            />
            <div className="relative flex h-[165px] flex-col items-center justify-end rounded-md bg-gray-200 pb-5 lg:h-[204px]">
              <h4>{category.title}</h4>
              <Button
                asChild
                variant="ghost"
                className="flex items-center gap-2"
              >
                <Link href={category.href}>
                  <span>Shop</span>
                  <IconArrowRight className="text-primary" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
