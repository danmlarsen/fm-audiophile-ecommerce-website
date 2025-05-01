"use client";

import { useEffect, useState } from "react";
import { useCart } from "./cart-context";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function CartItemAmountInput({ id }: { id: string }) {
  const {
    cartItems,
    incrementCartItemAmount,
    decrementCartItemAmount,
    setCartItemAmount,
  } = useCart();

  const cartItem = cartItems.find((cartItem) => cartItem.id === id);

  if (!cartItem) return null;

  const [amount, setAmount] = useState<number | null>(cartItem.amount);

  useEffect(() => {
    setAmount(cartItem.amount);
  }, [cartItem.amount]);

  useEffect(() => {
    if (amount && !isNaN(amount) && amount > 0 && amount <= 9) {
      setCartItemAmount(id, amount);
    }
  }, [amount]);

  return (
    <div className="grid w-[120px] grid-cols-3 items-center">
      <Button
        onClick={() => decrementCartItemAmount(id)}
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
        onClick={() => incrementCartItemAmount(id)}
        className="text-muted bg-transparent p-4 shadow-none hover:bg-transparent hover:text-black"
      >
        +
      </Button>
    </div>
  );
}
