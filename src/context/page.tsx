"use client"

import { Product } from "@/data/page";
import { createContext, useContext, useState, ReactNode } from "react";


interface CartContextType {
  cart: Product[];
  addToCart: (product: Product,) => void;
  deleteFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product,) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const deleteFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  }

  return (
    <CartContext.Provider value={{cart, addToCart, deleteFromCart}}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cartContext;
};




// count quantity context

interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountProvider = ({children}: {children: ReactNode}) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return(
    <CountContext.Provider value={{count, increment, decrement}}>
      {children}
    </CountContext.Provider>
  )
}

export const useQuantityCount = () => {
  const countContext = useContext(CountContext);

  if (!countContext) {
    throw new Error("useQuantityCount must be used within a CountProvider");
  }
  return countContext;
}