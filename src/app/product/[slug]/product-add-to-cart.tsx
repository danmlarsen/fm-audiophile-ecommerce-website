"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
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
            id: product.slug.current,
            amount: 1,
            name: product.cartName,
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
