import { TProductData } from "@/data/products-data";
import { cn, urlFor } from "@/lib/utils";
import Image from "next/image";

export default function ProductGallery({ product }: { product: TProductData }) {
  return (
    <section>
      <div className="grid h-[592px] grid-cols-[auto_635px] gap-8">
        {product.galleryImages.map((image, index) => {
          const imageUrl = image
            ? urlFor(image)?.width(560).height(560).url()
            : null;

          return (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-md",
                index === 2 && "col-start-2 row-span-2 row-start-1",
              )}
            >
              <Image
                src={imageUrl || "https://placehold.co/560x560/png"}
                alt={`${product.title} image`}
                fill
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
