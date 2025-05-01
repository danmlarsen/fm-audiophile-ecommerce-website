import ImageHeadphones from "@/assets/images/image-category-thumbnail-headphones.png";
import ImageEarphones from "@/assets/images/image-category-thumbnail-earphones.png";
import ImageSpeakers from "@/assets/images/image-category-thumbnail-speakers.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import IconArrowRight from "./ui/icons/IconArrowRight";

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
      <div className="grid gap-8 md:grid-cols-3">
        {categoryMockData.map((category) => (
          <div
            key={category.title}
            className="relative flex h-[300px] flex-col justify-end"
          >
            <div className="pointer-events-none absolute inset-0 z-10 mx-auto h-[260.27px] w-[300px]">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative flex h-[204px] flex-col items-center justify-end rounded-md bg-gray-200 py-8">
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
