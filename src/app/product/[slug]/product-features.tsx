import { type TProductDocument } from "@/types/productDocumentType";
import { PortableText } from "next-sanity";

export default function ProductFeatures({
  product,
}: {
  product: TProductDocument;
}) {
  return (
    <section>
      <div className="grid grid-cols-[635px_auto] gap-6">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold uppercase">Features</h2>
          <div>
            <PortableText value={product.featuresDescription} />
          </div>
        </div>
        <div className="w-[350px] space-y-8 justify-self-end">
          <h2 className="text-4xl font-bold uppercase">In the box</h2>
          <ul>
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
