"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import getProductById from "@/app/data/page";
import Image from "next/image";
import Link from "next/link";



export default function ProductDetails() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const router = useRouter();
  const { id } = router.query;

  const product = getProductById(Number(id));

  return (
    <div className="first-sec lg:flex">
      <Link href={`products/${product?.id}`}>
        <div className="aspect-square bg-gray-100 w-full bg-cover bg-center">
          <Image className="lg:w-[721px] lg:h-[759px]" src={product.image} alt="" width={390} height={380} />
        </div>
      </Link>

      <div className="space-y-4 px-[24px] pb-[30px] pt-[20px] lg:w-[50%] lg:px-[100px] lg:pt-[90px]">
        <div className="flex flex-col justify-between items-start">
          <h2 className="text-lg font-medium lg:text-[36px]">
            {product?.title}
          </h2>
          <h3 className="text-lg mt-[10px] lg:text-[24px]">{product?.price}</h3>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Product description</h3>
          <p className="text-sm text-gray-600">{product?.description}</p>
          <ul className="text-sm space-y-1">
            <li>Premium materials</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Dimensions</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Height</p>
              <p>110cm</p>
            </div>
            <div>
              <p className="text-gray-600">Width</p>
              <p>75cm</p>
            </div>
            <div>
              <p className="text-gray-600">Depth</p>
              <p>50cm</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:space-y-0 lg:pt-[40px] lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center space-x-4 lg:inline">
            <label className="text-sm lg:hidden">Quantity:</label>
            <span className="hidden lg:inline-flex text-[16px]">Amount:</span>
            <button onClick={decrement}>-</button>
            <button>{count}</button>
            <button onClick={increment}>+</button>
          </div>

          <button className="w-full bg-[#2A254B] text-white py-3 text-sm lg:w-[143px] lg:py-[20px] lg:inline">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
