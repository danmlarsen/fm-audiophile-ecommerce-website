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
  resetCart: () => void;
  calcTotal: () => number;
  calcCartItemTotal: (productId: number) => number;
  incrementCartItemAmount: (productId: number) => void;
  decrementCartItemAmount: (productId: number) => void;
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

  function resetCart() {
    setCartItems([]);
  }

  function calcTotal() {
    return cartItems.reduce(
      (total, cartItem) => cartItem.amount * cartItem.price + total,
      0,
    );
  }

  function calcCartItemTotal(productId: number) {
    const cartItem = cartItems.find(
      (cartItem) => cartItem.productId === productId,
    );
    if (!cartItem) return 0;

    return cartItem.price * cartItem.amount;
  }

  function incrementCartItemAmount(productId: number) {
    setCartItems((cartItems) => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.productId === productId,
      );
      if (!existingCartItem) return cartItems;

      return cartItems.map((cartItem) =>
        cartItem.productId === productId
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem,
      );
    });
  }

  function decrementCartItemAmount(productId: number) {
    setCartItems((cartItems) => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.productId === productId,
      );
      if (!existingCartItem) return cartItems;

      if (existingCartItem.amount - 1 <= 0)
        return cartItems.filter((cartItem) => cartItem.productId !== productId);

      return cartItems.map((cartItem) =>
        cartItem.productId === productId
          ? { ...cartItem, amount: cartItem.amount - 1 }
          : cartItem,
      );
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        setCartItemAmount,
        resetCart,
        calcTotal,
        calcCartItemTotal,
        incrementCartItemAmount,
        decrementCartItemAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cartContext = useContext(CartContext);
  if (cartContext === null) throw new Error("Cart context is null");
  return cartContext;
}
