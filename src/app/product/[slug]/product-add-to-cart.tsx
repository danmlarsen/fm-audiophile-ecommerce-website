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
  const { cartItems, addCartItem } = useCart();

  const [amount, setAmount] = useState(1);

  const cartAmount =
    cartItems.find((cartItem) => cartItem.id === product.slug.current)
      ?.amount || 0;

  return (
    <div className="flex gap-4">
      <AmountInput
        amount={amount}
        onAmountChanged={(newAmount) => {
          if (newAmount > 0 && newAmount <= 99) {
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

          toast(`${product.name} x${amount} added to cart`);
        }}
        disabled={cartAmount + amount > 99}
      >
        Add to cart
      </Button>
    </div>
  );
}
