"use client";

import { useState } from "react";
import CartButton from "./cart/cart-button";
import ProductCategories from "./product-categories";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTitle } from "./ui/drawer";
import IconHamburger from "./ui/icons/IconHamburger";
import Logo from "./ui/logo";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer
      direction="top"
      shouldScaleBackground={true}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <IconHamburger />
      </Button>

      <DrawerContent className="pb-9">
        <DrawerTitle className="hidden">Navigation</DrawerTitle>
        <div className="bg-[#141414] px-6 py-8 text-white md:px-10">
          <div className="flex items-center justify-between gap-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <IconHamburger />
            </Button>
            <div className="md:mr-auto lg:mr-0">
              <Logo />
            </div>
            <CartButton />
          </div>
        </div>
        <div className="overflow-y-auto px-6 pt-20 md:px-10">
          <ProductCategories onCategoryClick={() => setIsOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
