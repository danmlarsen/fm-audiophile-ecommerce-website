import { cn, urlFor } from "@/lib/utils";
import { TProductDocument } from "@/types/productDocumentType";
import Image from "next/image";

export default function ProductGallery({
  product,
}: {
  product: TProductDocument;
}) {
  return (
    <section>
      <div className="grid min-h-[368px] gap-8 md:grid-cols-[1fr_2fr] lg:h-[592px]">
        {product.galleryImages.map((image, index) => {
          const imageUrl = image ? urlFor(image)?.url() : null;

          return (
            <div
              key={index}
              className={cn(
                "relative min-h-[174px] overflow-hidden rounded-md",
                index === 2 &&
                  "row-span-2 min-h-[368px] md:col-start-2 md:row-start-1",
              )}
            >
              <Image
                src={imageUrl || "https://placehold.co/635x635/png"}
                alt={`${product.name} image`}
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
