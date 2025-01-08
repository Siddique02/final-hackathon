"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useCart } from "@/context/page";
import { useQuantityCount } from "@/context/page";


export default function Basket() {

    const { cart, deleteFromCart } = useCart();
    const { count, increment, decrement } = useQuantityCount();


    return(
        <div className="main-sec">
            <Navbar/>
            <div className="pt-[30px] px-[24px] flex flex-col gap-7">
                <h1 className="text-[24px] mb-[10px]">Your shopping cart</h1>
                {cart.map((product) => (
                <div key={product.id} className="flex gap-6">
                    <Image className="w-[133px] h-[166px]" src={product.image} alt="" width={133} height={166}/>
                    <div>
                        <h1 className="mb-[10px]">{product.title}</h1>
                        <h2 className="mb-[10px]">{product.description}</h2>
                        <h2 className="mb-[10px]">{product.price}</h2>
                        <button className="mr-[50px] ml-[50px]" onClick={decrement}>-</button>
                        <button className="mr-[50px]">{count}</button>
                        <button onClick={increment}>+</button>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="bg-red-700 p-[7px] rounded-md hover:bg-red-600 hover:scale-90" onClick={() => deleteFromCart(product.id)}>🗑️</button>
                    </div>
                </div>
                ))}
            </div>
            <div className="px-[24px] mb-[30px]">
                <div className="flex justify-end gap-5">
                    <h1 className="text-[20px]">Subtotal</h1>
                    <h1 className="text-[20px]">£210</h1>
                </div>
                <p className="text-right text-[14px]">Taxes and shipping are calculated at checkout</p>
            </div>
            <div className="px-[24px]">
                <button className="w-[100%] flex justify-center items-center text-white bg-[#2A254B] h-[56px] mt-[32px] mb-[50px]">Go to checkout</button>
            </div>
        </div>
    )
}