"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { TProductData } from "@/data/products-data";

export default function ProductAddToCart({
  product,
}: {
  product: TProductData;
}) {
  const { addCartItem } = useCart()!;

  return (
    <div>
      <Button
        onClick={() =>
          addCartItem({
            productId: product.id,
            amount: 1,
            title: product.title,
            price: product.price,
            image: product.image,
          })
        }
      >
        Add to cart
      </Button>
    </div>
  );
}
