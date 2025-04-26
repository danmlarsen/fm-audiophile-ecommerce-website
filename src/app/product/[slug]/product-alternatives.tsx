import { Button } from "@/components/ui/button";
import { productsData, TProductData } from "@/data/products-data";
import Image from "next/image";
import Link from "next/link";

const productAlternativesSlugs = [
  "xx99-mark-i-headphones",
  "xx59-headphones",
  "zx9-speaker",
];

const productAlternativesData = productsData
  .filter((product) => productAlternativesSlugs.includes(product.slug))
  .slice(0, 3);

export default function ProductAlternatives() {
  return (
    <section>
      <h2 className="mb-12 text-center text-4xl font-bold uppercase">
        You may also like
      </h2>
      <div className="grid min-h-[471px] grid-cols-3 gap-8">
        {productAlternativesData.map((product) => (
          <div key={product.slug} className="space-y-10 text-center">
            <div className="relative overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={`Image of ${product.title}`}
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-4xl font-bold uppercase">
                {product.shortTitle}
              </h3>
              <Button asChild>
                <Link href={`/product/${product.slug}`}>See product</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
