"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type TCartItem = {
  id: string;
  amount: number;
  name: string;
  price: number;
  image: string;
};

type TCartContext = {
  cartItems: TCartItem[];
  addCartItem: (newCartItem: TCartItem) => void;
  removeCartItem: (id: string, removeAmount?: number) => void;
  setCartItemAmount: (id: string, newAmount: number) => void;
  resetCart: () => void;
  calcTotal: () => number;
  calcCartItemTotal: (id: string) => number;
  incrementCartItemAmount: (id: string) => void;
  decrementCartItemAmount: (id: string) => void;
};

export const CartContext = createContext<TCartContext | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addCartItem(newCartItem: TCartItem) {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (item) => item.id === newCartItem.id,
      );
      if (existingCartItem)
        return prevCartItems.map((prevCartItem) =>
          prevCartItem.id === newCartItem.id
            ? {
                ...prevCartItem,
                amount: prevCartItem.amount + newCartItem.amount,
              }
            : prevCartItem,
        );
      else return [...prevCartItems, newCartItem];
    });
  }

  function removeCartItem(id: string, removeAmount?: number) {
    setCartItems((prevCartItems) => {
      const currentCartItem = prevCartItems.find(
        (currentItem) => currentItem.id === id,
      );
      if (!currentCartItem) return prevCartItems;

      if (!removeAmount || currentCartItem.amount - removeAmount < 1)
        return prevCartItems.filter((currentItem) => currentItem.id !== id);

      return prevCartItems.map((currentItem) =>
        currentItem.id === id
          ? { ...currentItem, amount: currentItem.amount - removeAmount }
          : currentItem,
      );
    });
  }

  function setCartItemAmount(id: string, newAmount: number) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((prevCartItem) =>
        prevCartItem.id === id
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

  function calcCartItemTotal(id: string) {
    const cartItem = cartItems.find((cartItem) => cartItem.id === id);
    if (!cartItem) return 0;

    return cartItem.price * cartItem.amount;
  }

  function incrementCartItemAmount(id: string) {
    setCartItems((cartItems) => {
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === id);
      if (!existingCartItem) return cartItems;

      return cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem,
      );
    });
  }

  function decrementCartItemAmount(id: string) {
    setCartItems((cartItems) => {
      const existingCartItem = cartItems.find((cartItem) => cartItem.id === id);
      if (!existingCartItem) return cartItems;

      if (existingCartItem.amount - 1 <= 0)
        return cartItems.filter((cartItem) => cartItem.id !== id);

      return cartItems.map((cartItem) =>
        cartItem.id === id
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
