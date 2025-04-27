"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { TProductData } from "@/data/products-data";
import { TProductDocument } from "@/types/productDocumentType";

export default function ProductAddToCart({
  product,
}: {
  product: TProductDocument;
}) {
  const { addCartItem } = useCart();

  return (
    <div>
      <Button
        onClick={() =>
          addCartItem({
            productId: product.slug.current,
            amount: 1,
            title: product.cartName,
            price: product.price,
            image: product.cartThumbnail,
          })
        }
      >
        Add to cart
      </Button>
    </div>
  );
}
