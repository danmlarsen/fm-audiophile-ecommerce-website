"use client";

import { type TCartItem, useCart } from "@/components/cart/cart-context";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/utils";
import Link from "next/link";
import { CartItemAmountInput } from "./cart-item-amount-input";

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

export function CartItemList({
  summary = false,
  collapsable = false,
}: {
  summary?: boolean;
  collapsable?: boolean;
}) {
  const { cartItems } = useCart();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const filteredCartItems =
    collapsable && isCollapsed ? cartItems.slice(0, 1) : cartItems;

  return (
    <>
      <ul className="space-y-6">
        {filteredCartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} summary={summary} />
        ))}
      </ul>
      {collapsable && (
        <div className="border-t border-[#979797]/10 py-2 text-center">
          <Button
            variant="ghost"
            onClick={() => setIsCollapsed((prevState) => !prevState)}
          >
            {isCollapsed && <>and {cartItems.length - 1} other item(s)</>}
            {!isCollapsed && <>View less</>}
          </Button>
        </div>
      )}
    </>
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
