"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import { TProductDocument } from "@/types/productDocumentType";
import { toast } from "sonner";
import { AmountInput } from "@/components/ui/amount-input";
import { useState } from "react";

export default function ProductAddToCart({
  product,
}: {
  product: TProductDocument;
}) {
  const { addCartItem } = useCart();

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <AmountInput
        amount={amount}
        onAmountChanged={(newAmount) => {
          if (newAmount > 0 && newAmount <= 9) {
            setAmount(newAmount);
          }
        }}
      />
      <Button
        onClick={() => {
          addCartItem({
            id: product.slug.current,
            amount,
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
