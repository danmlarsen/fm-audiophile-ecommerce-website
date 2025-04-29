"use client";

import { CartItemList } from "@/components/cart/cart";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import { formatPrice } from "@/lib/utils";

export default function CartSummary() {
  const { cartItems, calcTotal } = useCart();

  if (cartItems.length === 0) return null;

  const totalPrice = calcTotal();
  const shippingPrice = 50;
  const vatPrice = totalPrice * 0.2;
  const grandTotal = Math.ceil(totalPrice + shippingPrice + vatPrice);

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-bold">Summary</h3>
      <CartItemList summary={true} />
      <div className="space-y-2 uppercase">
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span className="font-bold">{formatPrice(totalPrice)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="font-bold">{formatPrice(shippingPrice)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>VAT (Included)</span>
          <span className="font-bold">{formatPrice(vatPrice)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Grand total</span>
          <span className="text-primary font-bold">
            {formatPrice(grandTotal)}
          </span>
        </div>
      </div>
      <div>
        <Button className="w-full">Continue & Pay</Button>
      </div>
    </div>
  );
}
