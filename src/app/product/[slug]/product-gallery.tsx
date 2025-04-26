import { TProductData } from "@/data/products-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductGallery({ product }: { product: TProductData }) {
  return (
    <section>
      <div className="grid h-[592px] grid-cols-2 gap-8">
        {product.galleryImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative overflow-hidden rounded-md",
              index === 2 && "col-start-2 row-span-2 row-start-1",
            )}
          >
            <Image
              src={image}
              alt={`${product.title} image`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
