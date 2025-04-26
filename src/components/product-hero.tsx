import { type TProductData } from "@/data/products-data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductHero({
  product,
  productPage = false,
  reverse = false,
}: {
  product: TProductData;
  productPage?: boolean;
  reverse?: boolean;
}) {
  return (
    <section>
      <div className="grid h-[560px] grid-cols-2 gap-6">
        <div className={cn("relative", reverse && "order-1")}>
          <Image
            src={product.image}
            alt={`Image of ${product.title}`}
            fill
            className="object-cover"
          />
        </div>
        <div
          className={cn(
            "flex items-center justify-end",
            reverse && "justify-start",
          )}
        >
          <div className="max-w-[445px] space-y-6">
            {product.new && (
              <small className="text-primary tracking-[10px] uppercase">
                New product
              </small>
            )}
            <h1 className="text-[40px] font-bold uppercase">{product.title}</h1>
            <p>{product.description}</p>

            {productPage ? (
              <>
                <strong>$ {product.price}</strong>
                <div>ADD TO CART</div>
              </>
            ) : (
              <Button asChild>
                <Link href={`/product/${product.slug}`}>See product</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
