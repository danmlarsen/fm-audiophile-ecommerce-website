"use client";

import { useCart } from "@/components/cart/cart-context";
import Cart from "./cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import IconCart from "../ui/icons/IconCart";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartButton() {
  const { cartItems } = useCart();

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const router = useRouter();

  return (
    <DropdownMenu
      open={cartIsOpen}
      onOpenChange={(open) => setCartIsOpen(open)}
    >
      <DropdownMenuTrigger className="relative grid size-10 place-items-center">
        <IconCart />
        {cartItems.length > 0 && (
          <div className="bg-primary absolute -right-2 -bottom-2 grid size-5 place-items-center rounded-full text-xs leading-0 text-white">
            {cartItems.length}
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[377px] p-8"
        align="end"
        sideOffset={70}
      >
        <Cart
          onCheckout={() => {
            setCartIsOpen(false);
            router.push("/checkout");
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
