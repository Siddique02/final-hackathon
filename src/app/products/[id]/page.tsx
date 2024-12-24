"use client";

import { useState } from "react";
import getProductById from "@/data/page";
import Image from "next/image";
import Link from "next/link";
import Delivery from "@/components/svgs/Delivery";
import DropDown from "@/components/svgs/DropDown";
import Search from "@/components/svgs/Search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/page";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();
  const params = useParams();
  

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const id = params.id;

  const product = getProductById(Number(id));

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div>
      <div>
        <div className="bg-[#2A254B] min-h-[54px] text-white text-xs py-2 px-[16px] flex items-center gap-4">
          <Delivery />
          <h4>
            Free delivery on all orders over £50 with code easter checkout
          </h4>
          <span>X</span>
        </div>

        <div className="flex justify-between h-[69px] bg-white px-6">
          <div className="flex items-center text-xl">
            <h1>Avion</h1>
          </div>
          <div className="flex justify-center items-center gap-[23px]">
            <Search />
            <div className="lg:flex">
              <Link href="/shoppingBasket">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div>
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z" />
              </svg>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <DropDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/about">
                  <DropdownMenuItem>About Us</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Contact</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Plant pots</DropdownMenuItem>
                <DropdownMenuItem>Ceramics</DropdownMenuItem>
                <DropdownMenuItem>Tables</DropdownMenuItem>
                <DropdownMenuItem>Chairs</DropdownMenuItem>
                <DropdownMenuItem>Crockery</DropdownMenuItem>
                <DropdownMenuItem>Tableware</DropdownMenuItem>
                <DropdownMenuItem>Cutlery</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="lg:flex">
        {product && <div className="aspect-square bg-gray-100 w-full bg-cover bg-center">
          <Image
            className="lg:w-[721px] lg:h-[759px]"
            src={product.image}
            alt=""
            width={390}
            height={380}
          />
        </div>}

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

            <button onClick={handleAddToCart} className="w-full bg-[#2A254B] text-white py-3 text-sm lg:w-[143px] lg:py-[20px] lg:inline">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="second-sec px-[24px] lg:px-[80px] pt-[45px] pb-[38px]">
        <h2 className="mb-[25px] text-[20px] lg:text-[32px] block">
          You might also like
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          <div>
            <Image
              className="mb-[33px] lg:w-[305px] lg:h-[375px]"
              src="/Photo1.png"
              alt=""
              width={163}
              height={201}
            />
            <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
            <h3 className="lg:text-[18px]">£155</h3>
          </div>
          <div>
            <Image
              className="mb-[33px] lg:w-[305px] lg:h-[375px]"
              src="/Photo2.png"
              alt=""
              width={163}
              height={201}
            />
            <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
            <h3 className="lg:text-[18px]">£155</h3>
          </div>
          <div>
            <Image
              className="mb-[33px] lg:w-[305px] lg:h-[375px]"
              src="/Photo3.png"
              alt=""
              width={163}
              height={201}
            />
            <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
            <h3 className="lg:text-[18px]">£155</h3>
          </div>
          <div>
            <Image
              className="mb-[33px] lg:w-[305px] lg:h-[375px]"
              src="/Photo4.png"
              alt=""
              width={163}
              height={201}
            />
            <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
            <h3 className="mb-[36px] lg:text-[18px]">£155</h3>
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
