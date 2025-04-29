"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import { TProductDocument } from "@/types/productDocumentType";
import { toast } from "sonner";

export default function ProductAddToCart({
  product,
}: {
  product: TProductDocument;
}) {
  const { addCartItem } = useCart();

  return (
    <div>
      <Button
        onClick={() => {
          addCartItem({
            id: product.slug.current,
            amount: 1,
            name: product.cartName,
            price: product.price,
            image: product.cartThumbnail,
          });

          toast(`${product.name} added to cart`);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
