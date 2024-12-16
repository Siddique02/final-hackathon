"use client"
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DropDown from "@/components/svgs/DropDown"
import Search from "@/components/svgs/Search";
import Link from "next/link";
import Accounts from "@/components/svgs/Accounts";
import Cart from "@/components/svgs/Cart";
import Delivery from "@/components/svgs/Delivery";
import { products } from '@/app/data/page';



export default function Products() {

    

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-[#2A254B] min-h-[54px] text-white text-xs py-2 px-[16px] flex items-center gap-4">
            <Delivery/>
            <h4>Free delivery on all orders over £50 with code easter checkout</h4>
            <span>X</span>
        </div>

        <div className="flex justify-between h-[69px] bg-white px-6">
            <div className="flex items-center text-xl"><h1>Avion</h1></div>
            <div className="flex justify-center items-center gap-[23px]">
                <Search/>
                <Cart/>
                <Accounts/>
                <DropdownMenu>
                    <DropdownMenuTrigger><DropDown/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuLabel></DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/about"><DropdownMenuItem>About Us</DropdownMenuItem></Link>
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
  

        
          


        {products.map((product) => {
          
          return <div key={product.id} className="second-sec px-[24px] pt-[45px] pb-[38px]">
          <h2 className="mb-[25px] text-[20px] block">You might also like</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/products/${product.id}`}><div>
              <Image className="mb-[33px]" src="/Photo1.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px]">Rustic Vase Set</h2>
              <h3>£155</h3>
            </div></Link>
            <div>
              <Image className="mb-[33px]" src="/Photo2.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px]">Rustic Vase Set</h2>
              <h3>£155</h3>
            </div>
            <div>
              <Image className="mb-[33px]" src="/Photo3.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px]">Rustic Vase Set</h2>
              <h3>£155</h3>
            </div>
            <div>
              <Image className="mb-[33px]" src="/Photo4.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px]">Rustic Vase Set</h2>
              <h3 className="mb-[36px]">£155</h3>
            </div>
          </div>
          <div>
            <button className="w-[100%] flex justify-center items-center hover:bg-[#4a4566] h-[56px] mt-[32px]">View collection</button>
          </div>
          </div>
        })}



        <div className="third-sec bg-white min-h-[757px] pt-[53px] px-[24px] pb-[45px]">
          <h1 className="mb-[49px] text-[20px]">What makes our brand different</h1>
          <div>
            <Image className="mb-[24px]" src="/Delivery.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Next day as standard</h2>
            <h3 className="mb-[41px] text-[14px]">Order before 3pm and get your order the next day as standard</h3>
          </div>
          <div>
            <Image className="mb-[24px]" src="/Checkmark.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Made by true artisans</h2>
            <h3 className="mb-[41px] text-[14px]">Handmade crafted goods made with real passion and craftmanship</h3>
          </div>
          <div>
            <Image className="mb-[24px]" src="/Purchase.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Unbeatable prices</h2>
            <h3 className="mb-[41px] text-[14px]">For our materials and quality you won’t find better prices anywhere</h3>
          </div>
          <div>
            <Image className="mb-[24px]" src="/Sprout.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Recycled packaging</h2>
            <h3 className="text-[14px]">We use 100% recycled packaging to ensure our footprint is manageable</h3>
          </div>
        </div>



        <div className="forth-sec px-[24px] pt-[53px] pb-[39px]">
          <h1 className="mb-[24px] text-[20px]">Join the club and get the benefits</h1>
          <p className="mb-[64px] text-[14px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <div className="w-[100%] flex justify-center items-center">
            <input className="py-[15px] pl-[15px]" type="email" placeholder="your@email.com" />
            <button className="bg-[#2A254B] px-[32px] py-[15px] text-white">Sign up</button>
          </div>
        </div>

      </div>
    );
  }