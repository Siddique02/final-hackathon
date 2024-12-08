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



export default function Products() {
    return (
      <main className="min-h-screen bg-gray-50">
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
  


        <div className="first-sec">

            <div className="aspect-square bg-gray-100 w-full">
              <Image src="/Image4.png" alt="" width={390} height={380}/>
            </div>
  
            <div className="space-y-4 px-[24px] pb-[30px] pt-[20px]">

              <div className="flex flex-col justify-between items-start">
                <h2 className="text-lg font-medium">The Dandy Chair</h2>
                <span className="text-lg mt-[10px]">£250</span>
              </div>
  
              <div className="space-y-2">
                <h3 className="font-medium">Product description</h3>
                <p className="text-sm text-gray-600">
                A timeless design, with premium materials features an elegant design with premium materials features an oiled finish and curved back. The dandy chair is perfect for any styled living space with beech legs and textured fabric upholstery.
                </p>
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
  
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm">Quantity:</label>
                  <input
                    type="number"
                    defaultValue={1}
                    min="1"
                    className="w-20 border rounded-md p-2 text-sm"
                  />
                </div>
  
                <button className="w-full bg-[#2A254B] text-white py-3 text-sm">
                  Add to cart
                </button>
              </div>

            </div>

        </div>



        <div className="second-sec px-[24px] pt-[45px] pb-[38px]">
          <h2 className="mb-[25px] text-[20px] block">You might also like</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div>
              <Image className="mb-[33px]" src="/Photo1.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px]">Rustic Vase Set</h2>
              <h3>£155</h3>
            </div>
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

      </main>
    );
  }