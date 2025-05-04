import { type TProductDocument } from "@/types/productDocumentType";
import { PortableText } from "next-sanity";

export default function ProductFeatures({
  product,
}: {
  product: TProductDocument;
}) {
  return (
    <section>
      <div className="grid gap-6 lg:grid-cols-[635px_auto] lg:gap-[125px]">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold uppercase">Features</h2>
          <div className="space-y-6">
            <PortableText value={product.featuresDescription} />
          </div>
        </div>
        <div className="grid w-full space-y-8 md:max-w-[549px] md:grid-cols-2 lg:grid-cols-1 lg:justify-self-end">
          <h2 className="text-4xl font-bold uppercase">In the box</h2>
          <ul className="md:justify-self-end lg:justify-self-start">
            {product.includedItems.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-primary font-bold">{item.amount}x</span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
