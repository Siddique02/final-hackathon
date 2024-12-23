"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useCart } from "@/context/page";


export default function Basket() {

    const { cart } = useCart();

    return(
        <div className="main-sec">
            <Navbar/>
            <div className="pt-[30px] px-[24px] flex flex-col gap-7">
                <h1 className="text-[24px] mb-[10px]">Your shopping cart</h1>
                {cart.map((product) => (
                <div key={product.id} className="flex gap-6">
                    <Image className="w-[133px] h-[166px]" src={product.image} alt="" width={133} height={166}/>
                    <div>
                        <h2 className="mb-[10px]">{product.title}</h2>
                        <h2 className="mb-[10px]">{product.description}</h2>
                        <h2 className="mb-[10px]">{product.price}</h2>
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