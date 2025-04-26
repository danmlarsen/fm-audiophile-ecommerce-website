"use client";

import { StaticImageData } from "next/image";
import { createContext, useContext, useState } from "react";

type TCartItem = {
  productId: number;
  amount: number;
  title: string;
  price: number;
  image: StaticImageData;
};

type TCartContext = {
  cartItems: TCartItem[];
  addCartItem: (newCartItem: TCartItem) => void;
  removeCartItem: (productId: number, removeAmount: number) => void;
  setCartItemAmount: (productId: number, newAmount: number) => void;
};

export const CartContext = createContext<TCartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  function addCartItem(newCartItem: TCartItem) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (item) => item.productId === newCartItem.productId,
      );
      if (existingCartItem)
        return prevCartItems.map((prevCartItem) =>
          prevCartItem.productId === newCartItem.productId
            ? {
                ...prevCartItem,
                amount: prevCartItem.amount + newCartItem.amount,
              }
            : prevCartItem,
        );
      else return [...prevCartItems, newCartItem];
    });
  }

  function removeCartItem(productId: number, removeAmount: number) {
    setCartItems((prevCartItems) => {
      const currentCartItem = prevCartItems.find(
        (currentItem) => currentItem.productId === productId,
      );
      if (!currentCartItem) return prevCartItems;

      if (currentCartItem.amount - removeAmount < 1)
        return prevCartItems.filter(
          (currentItem) => currentItem.productId !== productId,
        );

      return prevCartItems.map((currentItem) =>
        currentItem.productId === productId
          ? { ...currentItem, amount: currentItem.amount - removeAmount }
          : currentItem,
      );
    });
  }

  function setCartItemAmount(productId: number, newAmount: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((prevCartItem) =>
        prevCartItem.productId === productId
          ? { ...prevCartItem, amount: newAmount }
          : prevCartItem,
      ),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        setCartItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
