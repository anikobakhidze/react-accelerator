"use client";
import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};
type CartItem = {
  id: number;
  product: IProduct;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (product: IProduct) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  resetCart: () => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage(
    "shopping-cart",
    [] as CartItem[]
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(product: IProduct) {
    setCartItems((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === product.id);
      if (itemIndex === -1) {
        // Product not in cart, add new
        return [...currItems, { id: product.id, product, quantity: 1 }];
      } else {
        // Product already in cart, increase quantity
        return currItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const itemIndex = currItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1 && currItems[itemIndex].quantity === 1) {
        return currItems.filter((_, index) => index !== itemIndex);
      } else {
        return currItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }
  function resetCart() {
    setCartItems([]);
    cartQuantity;
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        resetCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
