"use client";

import { type TCartItem, useCart } from "@/context/cart-context";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { urlFor } from "@/lib/utils";
import Link from "next/link";

export default function Cart() {
  const { cartItems, resetCart, calcTotal } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="grid place-items-center text-lg font-bold">
        Cart is empty
      </div>
    );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3>Cart ({cartItems.length})</h3>
        <Button variant="ghost" className="px-0" onClick={resetCart}>
          Remove all
        </Button>
      </div>

      <CartItemList />

      <div className="flex items-center justify-between">
        <span className="uppercase">Total</span>
        <strong>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(calcTotal())}
        </strong>
      </div>

      <Button className="w-full" asChild>
        <Link href="/checkout">Checkout</Link>
      </Button>
    </div>
  );
}

export function CartItemList({ summary = false }: { summary?: boolean }) {
  const { cartItems } = useCart();

  return (
    <ul className="space-y-6">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} summary={summary} />
      ))}
    </ul>
  );
}

export function CartItem({
  cartItem,
  summary,
}: {
  cartItem: TCartItem;
  summary: boolean;
}) {
  {
    const imageUrl = cartItem.image
      ? urlFor(cartItem.image)?.width(64).height(64).url()
      : null;

    return (
      <li className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="relative size-16">
          <Image
            src={imageUrl || "https://placehold.co/64x64/png"}
            alt={`Image of ${cartItem.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <strong>{cartItem.name}</strong>
          <div>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(cartItem.price)}
          </div>
        </div>
        <div>
          {!!summary && <span>x{cartItem.amount}</span>}
          {!summary && <CartItemAmountInput id={cartItem.id} />}
        </div>
      </li>
    );
  }
}

function CartItemAmountInput({ id }: { id: string }) {
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
