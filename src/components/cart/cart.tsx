"use client";

import { type TCartItem, useCart } from "@/components/cart/cart-context";
import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { formatPrice, urlFor } from "@/lib/utils";
import { AmountInput } from "../ui/amount-input";

export default function Cart({
  onCheckout,
  onResetCart,
}: {
  onCheckout?: () => void;
  onResetCart?: () => void;
}) {
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
        <Button
          variant="ghost"
          className="px-0"
          onClick={() => {
            onResetCart?.();
            resetCart();
          }}
        >
          Remove all
        </Button>
      </div>

      <CartItemList cartItems={cartItems} />

      <div className="flex items-center justify-between">
        <span className="uppercase">Total</span>
        <strong>{formatPrice(calcTotal())}</strong>
      </div>

      <Button className="w-full" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
}

export function CartItemList({
  cartItems,
  summary = false,
  collapsable = false,
}: {
  cartItems: TCartItem[];
  summary?: boolean;
  collapsable?: boolean;
}) {
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
      {collapsable && cartItems.length > 1 && (
        <div className="border-t border-[#979797]/10 py-2 text-center">
          <Button
            variant="ghost"
            className="text-black/50"
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

    const { setCartItemAmount, removeCartItem } = useCart();

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
          <div>{formatPrice(cartItem.price)}</div>
        </div>
        <div>
          {!!summary && <span>x{cartItem.amount}</span>}
          {!summary && (
            <AmountInput
              amount={cartItem.amount}
              onAmountChanged={(newAmount) => {
                if (newAmount > 0 && newAmount <= 99) {
                  setCartItemAmount(cartItem.id, newAmount);
                }

                if (newAmount <= 0) {
                  removeCartItem(cartItem.id);
                }
              }}
            />
          )}
        </div>
      </li>
    );
  }
}
