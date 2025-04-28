import ProductHero from "@/components/product-hero";
import { type TProductDocument } from "@/types/productDocumentType";

export default function Products({
  productsData,
}: {
  productsData: TProductDocument[];
}) {
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
