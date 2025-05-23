import { cn, formatPrice, urlFor } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import ProductAddToCart from "@/app/product/[slug]/product-add-to-cart";
import { PortableText } from "next-sanity";
import { TProductDocument } from "@/types/productDocumentType";

export default function ProductHero({
  product,
  productPage = false,
  reverse = false,
}: {
  product: TProductDocument;
  productPage?: boolean;
  reverse?: boolean;
}) {
  const productImageUrl = product.mainImage
    ? urlFor(product.mainImage)?.width(560).height(560).url()
    : null;

  return (
    <section>
      <div className="grid gap-6 lg:h-[560px] lg:grid-cols-2">
        <div
          className={cn(
            "relative h-[352px] lg:h-full",
            reverse && "lg:order-1",
          )}
        >
          <Image
            src={productImageUrl || "https://placehold.co/560x560/png"}
            alt={`Image of ${product.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div
          className={cn(
            "flex items-center justify-center lg:justify-end",
            reverse && "lg:justify-start",
          )}
        >
          <div
            className={cn(
              "max-w-[445px] space-y-6",
              !productPage && "text-center lg:text-left",
            )}
          >
            {product.newProduct && (
              <small className="text-primary tracking-[10px] uppercase">
                New product
              </small>
            )}
            <h1 className="text-[40px] font-bold uppercase">{product.name}</h1>
            <div>
              <PortableText value={product.description} />
            </div>

            {productPage ? (
              <div className="space-y-12">
                <div className="text-lg font-bold">
                  {formatPrice(product.price)}
                </div>
                <ProductAddToCart product={product} />
              </div>
            ) : (
              <Button asChild>
                <Link href={`/product/${product.slug.current}`}>
                  See product
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
