"use client"

import Product from "@/types/page";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { GetProductData } from "@/sanity/sanity.query";


// Product Context
const ProductContext = createContext<Product[]>([]);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await GetProductData();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const products = useContext(ProductContext);
  if (!products) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return products;
}




// Cart Context
interface CartContextType {
  cart: Product[];
  setCart: (cart: Product[]) => void
  addToCart: (product: Product) => void;
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
    <CartContext.Provider value={{cart, addToCart, setCart, deleteFromCart}}>
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