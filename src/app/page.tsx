
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>


      <div className="header hidden md:flex md:justify-center md:mb-16 md:mt-5">
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


      <div className="md:relative">

        <div className="first-sec md:relative flex md:mx-[80px] md:flex md:justify-between bg-[#2A254B] text-white px-[24px] md:px-0 pb-[32px] md:pb-0">
          <div className="md:relative">
            <h2 className="text-[32px] font-thin pt-[40px] md:px-[60px]">The furniture brand for the future, with timeless designs</h2>
            <p className="text-[18px] font-extralight mt-[97px] md:absolute md:bottom-16 md:px-[60px]">A new era in eco friendly furniture with Avelon, the French luxury retail brand
            with nice fonts, tasteful colors and a beautiful way to display things digitally 
            using modern web technologies.</p>
            <button className="w-[100%] md:ml-[60px] md:w-[170px] flex justify-center items-center bg-[#4a4566] h-[56px] mt-[32px]">View collection</button>
          </div>
          <div>
            <Image className="hidden md:flex md:justify-end" src="/photo4.png" alt="" width={520} height={584}/>
          </div>
        </div>



        <div className="second-sec md:flex md:flex-wrap md:justify-between md:gap-5 md:px-[80px] bg-white pt-[53px] px-[24px] pb-[45px]">
          <h1 className="mb-[49px] text-[20px] md:w-[100vw] md:block md:text-center">What makes our brand different</h1>
          <div className="md:w-[220px]">
            <Image className="mb-[24px]" src="/Delivery.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Next day as standard</h2>
            <h3 className="mb-[41px] text-[14px]">Order before 3pm and get your order the next day as standard</h3>
          </div>
          <div className="md:w-[220px]">
            <Image className="mb-[24px]" src="/Checkmark.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Made by true artisans</h2>
            <h3 className="mb-[41px] text-[14px]">Handmade crafted goods made with real passion and craftmanship</h3>
          </div>
          <div className="md:w-[220px]">
            <Image className="mb-[24px]" src="/Purchase.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Unbeatable prices</h2>
            <h3 className="mb-[41px] text-[14px]">For our materials and quality you won’t find better prices anywhere</h3>
          </div>
          <div className="md:w-[220px]">
            <Image className="mb-[24px]" src="/Sprout.png" alt="" width={24} height={24}/>
            <h2 className="mb-[22px] text-[16px]">Recycled packaging</h2>
            <h3 className="text-[14px]">We use 100% recycled packaging to ensure our footprint is manageable</h3>
          </div>
        </div>



        <div className="third-sec px-[24px] md:px-[80px] pt-[45px] pb-[38px]">
          <h2 className="mb-[25px] text-[20px] md:text-[32px] block">New ceramics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div>
              <Image className="mb-[33px] md:w-[305px] md:h-[375px]" src="/Photo1.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] md:text-[20px]">Rustic Vase Set</h2>
              <h3 className="md:text-[20px]">£155</h3>
            </div>
            <div>
              <Image className="mb-[33px] md:w-[305px] md:h-[375px]" src="/Photo2.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] md:text-[20px]">Rustic Vase Set</h2>
              <h3 className="md:text-[20px]">£155</h3>
            </div>
            <div>
              <Image className="mb-[33px] md:w-[305px] md:h-[375px]" src="/Photo3.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] md:text-[20px]">Rustic Vase Set</h2>
              <h3 className="md:text-[20px]">£155</h3>
            </div>
            <div>
              <Image className="mb-[33px] md:w-[305px] md:h-[375px]" src="/Photo4.png" alt="" width={163} height={201}/>
              <h2 className="mb-[22px] md:text-[20px]">Rustic Vase Set</h2>
              <h3 className="mb-[36px] md:text-[20px]">£155</h3>
            </div>
          </div>
          <div>
            <button className="w-[100%] flex justify-center items-center hover:bg-[#4a4566] h-[56px] mt-[32px]">View collection</button>
          </div>
        </div>



        <div className="forth-sec px-[24px] md:px-[80px] pt-[53px] pb-[40px] text-[20px]">
          <h1 className="mb-[36px] md:mb-0 text-[20px] md:text-[32px]">Our popular products</h1>
          <div className="forth-sec-cards md:flex md:flex-wrap flex flex-shrink-0 gap-5 pt-[20px] overflow-x-auto">
            <div className="forth-sec-card1 relative flex-shrink-0">
              <Image className="mb-[30px] md:hidden" src="/Photo2.png" alt="" width={200} height={251}/>
              <Image className="mb-[30px] hidden md:flex" src="/Large.png" alt="" width={630} height={375}/>
              <h1 className="mb-[10px]">The Lucy Lamp</h1>
              <h2>£399</h2>
            </div>
            <div className="forth-sec-card2 relative flex-shrink-0">
              <Image className="mb-[30px] md:hidden" src="/Photo1.png" alt="" width={200} height={251}/>
              <Image className="mb-[30px] hidden md:flex" src="/Photo4.png" alt="" width={305} height={375}/>
              <h1 className="mb-[10px]">The Lucy Lamp</h1>
              <h2>£399</h2>
            </div>
            <div className="forth-sec-card3 relative flex-shrink-0">
              <Image className="mb-[30px] md:hidden" src="/Photo3.png" alt="" width={200} height={251}/>
              <Image className="mb-[30px] hidden md:flex" src="/Parent.png" alt="" width={305} height={375}/>
              <h1 className="mb-[10px]">The Lucy Lamp</h1>
              <h2>£399</h2>
            </div>
            <div className="forth-sec-card4 relative flex-shrink-0">
              <Image className="mb-[30px] md:hidden" src="/Photo4.png" alt="" width={200} height={251}/>
              <h1 className="mb-[10px] md:hidden">The Lucy Lamp</h1>
              <h2 className="md:hidden">£399</h2>
            </div>
          </div>
          <div className="md:flex md:justify-center">
            <button className="w-[100%] md:max-w-[170px] flex justify-center items-center hover:bg-[#4a4566] h-[56px] mt-[32px]">View collection</button>
          </div>
        </div>



        <div className="fifth-sec md:text-center px-[24px] pt-[53px] pb-[39px]">
          <h1 className="mb-[24px] text-[20px]">Join the club and get the benefits</h1>
          <p className="mb-[64px] text-[14px]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
          <div className="w-[100%] flex justify-center items-center">
            <input className="py-[18px] pl-[15px]" type="email" placeholder="your@email.com" />
            <button className="bg-[#2A254B] px-[32px] py-[18px] text-white">Sign up</button>
          </div>
        </div>



        <div className="responsive-sec md:flex md:px-0 md:relative">
          <div className="sixth-sec md:w-[50%] px-[24px] md:px-[80px] md:pr-[150px] pt-[51px] md:pt-[80px] pb-[37px]">
            <h1 className="mb-[27px] text-[20px] md:text-[24px]">From a studio in London to a global brand with over 400 outlets</h1>
            <p className="mb-[26px] text-[14px] md:text-[14px]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
            <p className="mb-[64px] text-[14px] md:text-[14px]">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
            <button className="w-[100%] md:absolute md:max-w-[150px] md:bottom-14 flex justify-center items-center hover:bg-[#4a4566] h-[56px] mt-[32px]">Get in touch</button>
          </div>

          <div className="seventh-sec md:w-[720px] md:h-[603px]">
            <Image className="md:w-full md:h-full" src="/Image.png" alt="" width={390} height={358}/>
          </div>
        </div>

      </div>

    </div>
  );
}
