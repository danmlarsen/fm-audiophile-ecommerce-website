import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/utils";
import { type TProductAlternative } from "@/types/productDocumentType";
import Image from "next/image";
import Link from "next/link";

export default function ProductAlternatives({
  alternatives,
}: {
  alternatives: TProductAlternative[];
}) {
  if (!alternatives || alternatives.length === 0) return null;

  return (
    <section>
      <h2 className="mb-12 text-center text-4xl font-bold uppercase">
        You may also like
      </h2>
      <div className="grid min-h-[471px] grid-flow-col justify-center gap-8">
        {alternatives.map((alternativeProduct, index) => {
          const productImageUrl = alternativeProduct.mainImage
            ? urlFor(alternativeProduct.mainImage)?.width(560).height(560).url()
            : null;

          return (
            <div key={index} className="w-[350px] space-y-10 text-center">
              <div className="relative h-[318px] overflow-hidden rounded-md">
                <Image
                  src={productImageUrl || "https://placehold.co/560x560/png"}
                  alt={`Image of ${alternativeProduct.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-4xl font-bold uppercase">
                  {alternativeProduct.shortName}
                </h3>
                <Button asChild>
                  <Link href={`/product/${alternativeProduct.slug.current}`}>
                    See product
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
