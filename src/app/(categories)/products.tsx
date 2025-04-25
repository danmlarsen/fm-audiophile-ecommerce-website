import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";

type TProductData = {
  title: string;
  slug: string;
  description: string;
  image: StaticImageData;
  new: boolean;
};

export default function Products({
  productsData,
}: {
  productsData: TProductData[];
}) {
  return (
    <section>
      <ul className="space-y-40">
        {productsData.map((product, index) => (
          <li key={product.slug} className="grid h-[560px] grid-cols-2 gap-6">
            <div className={cn("relative", index % 2 !== 0 && "order-1")}>
              <Image
                src={product.image}
                alt={`Image of ${product.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div
              className={cn(
                "flex items-center",
                index % 2 === 0 && "justify-end",
              )}
            >
              <div className="max-w-[445px] space-y-6">
                {product.new && (
                  <small className="text-primary tracking-[10px] uppercase">
                    New product
                  </small>
                )}
                <h2 className="text-[40px] font-bold uppercase">
                  {product.title}
                </h2>
                <p>{product.description}</p>
                <Button>See product</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
