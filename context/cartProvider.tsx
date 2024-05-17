"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getCartItems } from "../api";
import { createCartItemAction } from "../actions";

interface CartContextType {
  totalQuantity: number;
  fetchTotalQuantity: (userId: number) => Promise<void>;
  getItemQuantity: (id: number) => Promise<number>;
  increaseCartQuantity: (productId: number) => Promise<void>;
}
interface cartItem {
  id: number;
  userid: number;
  quantity: number;
  productid: number;
}
const CartContext = createContext({} as CartContextType);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: IChildrenProps) => {
  const userId = 0;
  const [totalQuantity, setTotalQuantity] = useState(0);
  const fetchTotalQuantity = async (userId: number) => {
    const cartItems = await getCartItems(userId);
    const total = cartItems.reduce(
      (sum: number, item: { quantity: number }) => sum + item.quantity,
      0
    );
    setTotalQuantity(total);
  };

  async function getItemQuantity(id: number) {
    const cartItems = await getCartItems(userId);
    return (
      cartItems.find((item: cartItem) => item.productid === id)?.quantity || 0
    );
  }
  useEffect(() => {
    const userId = 0;
    fetchTotalQuantity(userId);
  }, []);

  const increaseCartQuantity = async (productId: number) => {
    try {
      await createCartItemAction(userId, productId);
      await fetchTotalQuantity(userId);
    } catch (error) {
      console.error("Failed to increase cart quantity:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        totalQuantity,
        fetchTotalQuantity,
        getItemQuantity,
        increaseCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
