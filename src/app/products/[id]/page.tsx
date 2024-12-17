"use client";

import { useState } from "react";
import { getProductById } from "@/app/data/page";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({ params }: { params: { id: number } }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const id = params.id;

  const product = getProductById(Number(id));

  return (
    <div>
      <div className="first-sec lg:flex">
        <div className="aspect-square bg-gray-100 w-full bg-cover bg-center">
          <Image
            className="lg:w-[721px] lg:h-[759px]"
            src={product.image}
            alt=""
            width={390}
            height={380}
          />
        </div>

        <div className="space-y-4 px-[24px] pb-[30px] pt-[20px] lg:w-[50%] lg:px-[100px] lg:pt-[90px]">
          <div className="flex flex-col justify-between items-start">
            <h2 className="text-lg font-medium lg:text-[36px]">
              {product?.title}
            </h2>
            <h3 className="text-lg mt-[10px] lg:text-[24px]">
              {product?.price}
            </h3>
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

      <div
        key={product.id}
        className="second-sec px-[24px] lg:px-[80px] pt-[45px] pb-[38px]"
      >
        <h2 className="mb-[25px] text-[20px] lg:text-[32px] block">You might also like</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`/products/${product.id}`}>
            <div>
              <Image
                className="mb-[33px] lg:w-[305px] lg:h-[375px]"
                src="/Photo1.png"
                alt=""
                width={163}
                height={201}
              />
              <h2 className="mb-[22px]">Rustic Vase Set</h2>
              <h3>£155</h3>
            </div>
          </Link>
          <div>
            <Image
              className="mb-[33px] lg:w-[305px] lg:h-[375px]"
              src="/Photo2.png"
              alt=""
              width={163}
              height={201}
            />
            <h2 className="mb-[22px]">Rustic Vase Set</h2>
            <h3>£155</h3>
          </div>
          <div>
            <Image
              className="mb-[33px] lg:w-[305px] lg:h-[375px]"
              src="/Photo3.png"
              alt=""
              width={163}
              height={201}
            />
            <h2 className="mb-[22px]">Rustic Vase Set</h2>
            <h3>£155</h3>
          </div>
          <div>
            <Image
              className="mb-[33px] lg:w-[305px] lg:h-[375px]"
              src="/Photo4.png"
              alt=""
              width={163}
              height={201}
            />
            <h2 className="mb-[22px]">Rustic Vase Set</h2>
            <h3 className="mb-[36px]">£155</h3>
          </div>
        </div>
        <div>
          <button className="w-[100%] flex justify-center items-center hover:bg-[#4a4566] h-[56px] mt-[32px]">
            View collection
          </button>
        </div>
      </div>

      <div>
        <div className="second-sec lg:flex lg:flex-wrap lg:justify-between lg:gap-5 lg:px-[80px] bg-white pt-[53px] px-[24px] pb-[45px]">
          <h1 className="mb-[49px] text-[20px] lg:w-[100vw] lg:block lg:text-center">
            What makes our brand different
          </h1>
          <div className="lg:w-[220px]">
            <Image
              className="mb-[20px]"
              src="/Delivery.png"
              alt=""
              width={24}
              height={24}
            />
            <h2 className="mb-[16px] text-[16px]">Next day as standard</h2>
            <h3 className="mb-[41px] text-[14px]">
              Order before 3pm and get your order the next day as standard
            </h3>
          </div>
          <div className="lg:w-[220px]">
            <Image
              className="mb-[20px]"
              src="/Checkmark.png"
              alt=""
              width={24}
              height={24}
            />
            <h2 className="mb-[16px] text-[16px]">Made by true artisans</h2>
            <h3 className="mb-[41px] text-[14px]">
              Handmade crafted goods made with real passion and craftmanship
            </h3>
          </div>
          <div className="lg:w-[220px]">
            <Image
              className="mb-[20px]"
              src="/Purchase.png"
              alt=""
              width={24}
              height={24}
            />
            <h2 className="mb-[16px] text-[16px]">Unbeatable prices</h2>
            <h3 className="mb-[41px] text-[14px]">
              For our materials and quality you won’t find better prices
              anywhere
            </h3>
          </div>
          <div className="lg:w-[220px]">
            <Image
              className="mb-[20px]"
              src="/Sprout.png"
              alt=""
              width={24}
              height={24}
            />
            <h2 className="mb-[16px] text-[16px]">Recycled packaging</h2>
            <h3 className="text-[14px]">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </h3>
          </div>
        </div>

        <div className="fifth-sec lg:text-center px-[24px] pt-[53px] pb-[39px]">
          <h1 className="mb-[24px] text-[20px]">
            Join the club and get the benefits
          </h1>
          <p className="mb-[64px] text-[14px]">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div className="w-[100%] flex justify-center items-center">
            <input
              className="py-[18px] pl-[15px]"
              type="email"
              placeholder="your@email.com"
            />
            <button className="bg-[#2A254B] px-[32px] py-[18px] text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
