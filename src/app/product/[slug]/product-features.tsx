import { TProductData } from "@/data/products-data";

export default function ProductFeatures({
  product,
}: {
  product: TProductData;
}) {
  return (
    <section>
      <div className="grid grid-cols-[635px_auto] gap-6">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold uppercase">Features</h2>
          <p>{product.features}</p>
        </div>
        <div className="w-[350px] space-y-8 justify-self-end">
          <h2 className="text-4xl font-bold uppercase">In the box</h2>
          <ul>
            {product.inTheBox.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-primary font-bold">{item.amount}x</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
