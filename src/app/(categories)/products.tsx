import ProductHero from "@/components/product-hero";
import { Button } from "@/components/ui/button";
import { type TProductData } from "@/data/products-data";
import { cn } from "@/lib/utils";
import { type TProductDocument } from "@/types/productDocumentType";
import Image from "next/image";
import Link from "next/link";

export default function Products({
  productsData,
}: {
  productsData: TProductDocument[];
}) {
  console.log(productsData);

  return (
    <section>
      <div className="space-y-40">
        {productsData.map((product, index) => (
          <ProductHero
            key={product.slug.current}
            product={product}
            reverse={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
