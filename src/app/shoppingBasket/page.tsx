"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useCart } from "@/context/page";
import { useQuantityCount } from "@/context/page";
// import { useEffect } from "react";
import Product from "@/types/page";

export default function Basket() {
  const { cart, deleteFromCart } = useCart();
  const { count, increment, decrement } = useQuantityCount();

  const subTotal = cart.reduce((total, product) => total + Number(product.price), 0) * count;

  // useEffect(() => {
  //   const getItem = JSON.parse(localStorage.getItem("product") || "[]");
  //   if (getItem) {
  //     setCart(getItem)
  //   }
  // }, [setCart]);

  // useEffect(() => {
  //   localStorage.setItem("product", JSON.stringify(cart));
  // }, [cart]);

  return (
    <div className="main-sec">
      <Navbar />
      <div className="pt-[30px] px-[24px] flex flex-col gap-7">
        <h1 className="text-[24px] mb-[10px]">Your shopping cart</h1>
        {cart.map((product: Product) => (
          <div key={product.id} className="flex justify-between gap-6 pr-4">
            <div className="flex-shrink-0">
              <Image
                className="h-[100%] w-[100%]"
                src={product.image}
                alt=""
                width={133}
                height={166}
              />
            </div>
            <div className="flex flex-col items-start justify-between py-5">
              <div>
                <h1 className="mb-[10px]">{product.name}</h1>
                <h2 className="mb-[10px]">{product.description}</h2>
                <h2 className="mb-[10px]">${product.price}</h2>
              </div>
              <div className="flex justify-between rounded-full bg-slate-300 px-6 py-2 space-x-10">
                <button onClick={decrement}>-</button>
                <button>{count}</button>
                <button onClick={increment}>+</button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-red-700 p-[7px] rounded-md hover:bg-red-600 hover:scale-90"
                onClick={() => deleteFromCart(product.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="px-[24px] mb-[30px]">
        <div className="flex justify-end gap-5">
          <h1 className="text-[20px]">Subtotal</h1>
          <h1 className="text-[20px]">{subTotal}</h1>
        </div>
        <p className="text-right text-[14px]">
          Taxes and shipping are calculated at checkout
        </p>
      </div>
      <div className="px-[24px]">
        <button className="w-[100%] flex justify-center items-center text-white bg-[#2A254B] h-[56px] mt-[32px] mb-[50px]">
          Go to checkout
        </button>
      </div>
    </div>
  );
}
