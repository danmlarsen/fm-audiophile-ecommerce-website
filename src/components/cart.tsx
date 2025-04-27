"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { urlFor } from "@/lib/utils";

export default function Cart() {
  const {
    cartItems,
    addCartItem,
    removeCartItem,
    resetCart,
    calcTotal,
    calcCartItemTotal,
  } = useCart();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3>Cart ({cartItems.length})</h3>
        <Button variant="ghost" className="px-0" onClick={resetCart}>
          Remove all
        </Button>
      </div>

      <ul className="space-y-6">
        {cartItems.map((cartItem) => {
          const imageUrl = cartItem.image
            ? urlFor(cartItem.image)?.width(64).height(64).url()
            : null;

          return (
            <li
              key={cartItem.productId}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
            >
              <div className="relative size-16">
                <Image
                  src={imageUrl || "https://placehold.co/64x64/png"}
                  alt={`Image of ${cartItem.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4>{cartItem.title}</h4>
                <span>${calcCartItemTotal(cartItem.productId)}</span>
              </div>
              <div>
                <CartItemAmountInput productId={cartItem.productId} />
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-between">
        <span className="uppercase">Total</span>
        <strong>${calcTotal()}</strong>
      </div>

      <Button className="w-full">Checkout</Button>
    </div>
  );
}

function CartItemAmountInput({ productId }: { productId: string }) {
  const {
    cartItems,
    incrementCartItemAmount,
    decrementCartItemAmount,
    setCartItemAmount,
  } = useCart();

  const cartItem = cartItems.find(
    (cartItem) => cartItem.productId === productId,
  );

  if (!cartItem) return null;

  const [amount, setAmount] = useState<number | null>(cartItem.amount);

  useEffect(() => {
    setAmount(cartItem.amount);
  }, [cartItem.amount]);

  useEffect(() => {
    if (amount && !isNaN(amount) && amount > 0 && amount <= 9) {
      setCartItemAmount(productId, amount);
    }
  }, [amount]);

  return (
    <div className="grid w-[120px] grid-cols-3 items-center">
      <Button
        onClick={() => decrementCartItemAmount(productId)}
        className="text-muted bg-transparent p-4 shadow-none hover:bg-transparent hover:text-black"
      >
        -
      </Button>
      <Input
        type="input"
        min={0}
        max={9}
        value={amount?.toString()}
        onChange={(e) => setAmount(+e.target.value)}
        className="h-full w-[40px] border-0 text-center shadow-none focus-visible:ring-0"
      />
      <Button
        onClick={() => incrementCartItemAmount(productId)}
        className="text-muted bg-transparent p-4 shadow-none hover:bg-transparent hover:text-black"
      >
        +
      </Button>
    </div>
  );
}
