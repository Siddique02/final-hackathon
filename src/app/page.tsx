import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar/>


      <div className="header hidden lg:flex lg:justify-center lg:mb-16 lg:mt-5">
        <ul className="flex gap-8 text-[16px] text-[#0000006b]">
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </div>


      <div className="lg:relative">

        <div className="first-sec lg:relative flex lg:mx-[80px] lg:flex lg:justify-between bg-[#2A254B] text-white px-[24px] lg:px-0 pb-[32px] lg:pb-0">
          <div className="lg:relative">
            <h2 className="text-[32px] font-thin pt-[40px] lg:px-[60px]">The furniture brand for the future, with timeless designs</h2>
            <p className="text-[18px] font-extralight mt-[97px] lg:absolute lg:bottom-10 lg:px-[60px]">A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
            <Link href="/products"><button className="w-[100%] lg:ml-[60px] lg:w-[170px] flex justify-center items-center bg-[#4a4566] h-[56px] mt-[32px]">View collection</button></Link>
          </div>
          <div className="h-[100%]">
            <Image className="hidden lg:flex lg:justify-end" src="/Product3.png" alt="" width={520} height={584}/>
          </div>
        </div>



        <div className="second-sec lg:flex lg:flex-wrap lg:justify-between lg:gap-5 lg:px-[80px] bg-white pt-[53px] px-[24px] pb-[45px]">
          <h1 className="mb-[49px] text-[20px] lg:w-[100vw] lg:block lg:text-center">What makes our brand different</h1>
          <div className="lg:w-[220px]">
            <Image className="mb-[20px]" src="/Delivery.png" alt="" width={24} height={24}/>
            <h2 className="mb-[16px] text-[16px]">Next day as standard</h2>
            <h3 className="mb-[41px] text-[14px]">Order before 3pm and get your order the next day as standard</h3>
          </div>
          <div className="lg:w-[220px]">
            <Image className="mb-[20px]" src="/Checkmark.png" alt="" width={24} height={24}/>
            <h2 className="mb-[16px] text-[16px]">Made by true artisans</h2>
            <h3 className="mb-[41px] text-[14px]">Handmade crafted goods made with real passion and craftmanship</h3>
          </div>
          <div className="lg:w-[220px]">
            <Image className="mb-[20px]" src="/Purchase.png" alt="" width={24} height={24}/>
            <h2 className="mb-[16px] text-[16px]">Unbeatable prices</h2>
            <h3 className="mb-[41px] text-[14px]">For our materials and quality you won’t find better prices anywhere</h3>
          </div>
          <div className="lg:w-[220px]">
            <Image className="mb-[20px]" src="/Sprout.png" alt="" width={24} height={24}/>
            <h2 className="mb-[16px] text-[16px]">Recycled packaging</h2>
            <h3 className="text-[14px]">We use 100% recycled packaging to ensure our footprint is manageable</h3>
          </div>
        </div>



        <div className="third-sec px-[24px] lg:px-[80px] pt-[45px] pb-[38px]">
          <h2 className="mb-[25px] text-[20px] lg:text-[32px] block">New ceramics</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <div>
              <Image className="mb-[33px] lg:w-[305px] lg:h-[375px]" src="/Product7.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
              <h3 className="lg:text-[20px]">£155</h3>
            </div>
            <div>
              <Image className="mb-[33px] lg:w-[305px] lg:h-[375px]" src="/Product4.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
              <h3 className="lg:text-[20px]">£155</h3>
            </div>
            <div>
              <Image className="mb-[33px] lg:w-[305px] lg:h-[375px]" src="/Product10.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
              <h3 className="lg:text-[20px]">£155</h3>
            </div>
            <div>
              <Image className="mb-[33px] lg:w-[305px] lg:h-[375px]" src="/Product3.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] lg:text-[20px]">Rustic Vase Set</h2>
              <h3 className="mb-[36px] lg:text-[20px]">£155</h3>
            </div>
          </div>
          <div className="w-[100%] lg:flex lg:justify-center">
            <Link href="/products"><button className="w-[100%] lg:w-[170px] hover:bg-[#4a4566] text-[16px] h-[56px] mt-[32px]">View collection</button></Link>
          </div>
        </div>



        <div className="forth-sec px-[24px] lg:px-[80px] pt-[53px] pb-[40px] text-[20px]">
          <h1 className="mb-[36px] lg:mb-0 text-[20px] lg:text-[32px]">Our popular products</h1>
          <div className="forth-sec-cards lg:flex lg:flex-wrap flex flex-shrink-0 gap-5 pt-[20px] overflow-x-auto">
            <div className="forth-sec-card1 relative flex-shrink-0">
              <Image className="mb-[30px] lg:hidden" src="/Photo2.png" alt="" width={200} height={251}/>
              <Image className="mb-[30px] hidden lg:flex" src="/Large.png" alt="" width={630} height={375}/>
              <h1 className="mb-[10px]">The Lucy Lamp</h1>
              <h2>£399</h2>
            </div>
            <div className="forth-sec-card2 relative flex-shrink-0">
              <Image className="mb-[30px] lg:hidden" src="/Photo1.png" alt="" width={200} height={251}/>
              <Image className="mb-[30px] hidden lg:flex" src="/Photo4.png" alt="" width={305} height={375}/>
              <h1 className="mb-[10px]">The Lucy Lamp</h1>
              <h2>£399</h2>
            </div>
            <div className="forth-sec-card3 relative flex-shrink-0">
              <Image className="mb-[30px] lg:hidden" src="/Photo3.png" alt="" width={200} height={251}/>
              <Image className="mb-[30px] hidden lg:flex" src="/Parent.png" alt="" width={305} height={375}/>
              <h1 className="mb-[10px]">The Lucy Lamp</h1>
              <h2>£399</h2>
            </div>
            <div className="forth-sec-card4 relative flex-shrink-0">
              <Image className="mb-[30px] lg:hidden" src="/Photo4.png" alt="" width={200} height={251}/>
              <h1 className="mb-[10px] lg:hidden">The Lucy Lamp</h1>
              <h2 className="lg:hidden">£399</h2>
            </div>
          </div>
          <div className="w-[100%] lg:flex lg:justify-center">
            <Link href="/products"><button className="w-[100%] lg:w-[170px] hover:bg-[#4a4566] text-[16px] h-[56px] mt-[32px]">View collection</button></Link>
          </div>
        </div>



        <div className="fifth-sec lg:text-center px-[24px] pt-[53px] pb-[39px]">
          <h1 className="mb-[24px] text-[20px]">Join the club and get the benefits</h1>
          <p className="mb-[64px] text-[14px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <div className="w-[100%] flex justify-center items-center">
            <input className="py-[18px] pl-[15px]" type="email" placeholder="your@email.com" />
            <button className="bg-[#2A254B] px-[32px] py-[18px] text-white">Sign up</button>
          </div>
        </div>



        <div className="responsive-sec lg:flex lg:px-0 lg:relative">
          <div className="sixth-sec lg:w-[50%] px-[24px] lg:px-[80px] lg:pr-[150px] pt-[51px] lg:pt-[80px] pb-[37px]">
            <h1 className="mb-[27px] text-[20px] lg:text-[24px]">From a studio in London to a global brand with over 400 outlets</h1>
            <p className="mb-[26px] text-[14px] lg:text-[14px]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
            <p className="mb-[64px] text-[14px] lg:text-[14px]">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <button className="w-[100%] lg:absolute lg:max-w-[150px] lg:bottom-14 flex justify-center items-center hover:bg-[#4a4566] h-[56px] mt-[32px]">Get in touch</button>
          </div>

          <div className="seventh-sec w-[100%] lg:w-[720px] lg:h-[603px]">
            <Image className="lg:w-full lg:h-full w-full" src="/Image.png" alt="" width={390} height={358}/>
          </div>
        </div>

      </div>

    </div>
  );
}
