"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import { TProductDocument } from "@/types/productDocumentType";
import { toast } from "sonner";
import { AmountInput } from "@/components/ui/amount-input";
import { useState } from "react";
import { CartItemList } from "@/components/cart/cart";
import Link from "next/link";

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
          const newCartItem = {
            id: product.slug.current,
            amount,
            name: product.cartName,
            price: product.price,
            image: product.cartThumbnail,
          };

          addCartItem(newCartItem);

          toast(
            <div className="w-[300px] space-y-4">
              <p>Product added to cart</p>
              <CartItemList cartItems={[newCartItem]} summary={true} />
              <Button asChild className="w-full">
                <Link href="/checkout">Go to checkout</Link>
              </Button>
            </div>,
          );
        }}
        disabled={cartAmount + amount > 99}
      >
        Add to cart
      </Button>
    </div>
  );
}
