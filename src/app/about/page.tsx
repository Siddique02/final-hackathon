import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col">
      <div className="bg-[#2A254B] min-h-[54px] text-white text-xs py-2 px-[16px] flex items-center gap-4">
        <Image src="/Delivery.png" alt="" width={24} height={24} />
        <h4>Free delivery on all orders over £50 with code easter checkout</h4>
        <span>X</span>
      </div>

      <Navbar />

      <div className="flex gap-10 px-[24px] py-6 text-[16px] overflow-x-auto whitespace-nowrap">
        <span>All products</span>
        <span>Plant pots</span>
        <span>Ceramics</span>
        <span>Tables</span>
        <span>Chairs</span>
        <span>Crockery</span>
        <span>Tableware</span>
        <span>Cutlery</span>
      </div>

      <div className="space-y-6">
        <h2 className="text-[32px] font-light leading-10 pt-[25px] px-[24px]">
          A brand built on the love of craftmanship, quality and <br />{" "}
          outstanding customer service
        </h2>
        <div className="space-y-4 text-sm text-gray-600 pt-[70px] px-[24px]">
          <h2 className="text-[20px]">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available to the mass market.
          </p>
          <p>
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="w-[100%] flex justify-center items-center text-black hover:bg-[#4a4566] h-[56px] mt-[32px] px-[24px]">
            Get in touch
          </button>
        </div>
        <div className="bg-gray-100 w-[100%]">
          <Image
            className="w-[100%]"
            src="/Image.png"
            alt=""
            width={390}
            height={358}
          />
          <Image
            className="w-[100%]"
            src="/Image1.png"
            alt=""
            width={390}
            height={358}
          />
        </div>
      </div>

      <div className="px-[24px] space-y-6 pt-[50px] pb-[60px]">
        <h2 className="text-2xl font-light leading-tight">
          Our service isnt just personal, its actually hyper-personally
          exquisite
        </h2>
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available to the mass market.
          </p>
          <p>
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <div className="pt-[30px]">
            <button className="w-[100%] flex justify-center items-center text-black hover:bg-[#4a4566] h-[56px] px-[24px]">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      <div className="second-sec bg-white min-h-[757px] pt-[53px] px-[24px] pb-[45px]">
        <h1 className="mb-[49px] text-[20px]">
          What makes our brand different
        </h1>
        <div>
          <Image
            className="mb-[24px]"
            src="/Delivery.png"
            alt=""
            width={24}
            height={24}
          />
          <h2 className="mb-[22px] text-[16px]">Next day as standard</h2>
          <h3 className="mb-[41px] text-[14px]">
            Order before 3pm and get your order the next day as standard
          </h3>
        </div>
        <div>
          <Image
            className="mb-[24px]"
            src="/Checkmark.png"
            alt=""
            width={24}
            height={24}
          />
          <h2 className="mb-[22px] text-[16px]">Made by true artisans</h2>
          <h3 className="mb-[41px] text-[14px]">
            Handmade crafted goods made with real passion and craftmanship
          </h3>
        </div>
        <div>
          <Image
            className="mb-[24px]"
            src="/Purchase.png"
            alt=""
            width={24}
            height={24}
          />
          <h2 className="mb-[22px] text-[16px]">Unbeatable prices</h2>
          <h3 className="mb-[41px] text-[14px]">
            For our materials and quality you wont find better prices anywhere
          </h3>
        </div>
        <div>
          <Image
            className="mb-[24px]"
            src="/Sprout.png"
            alt=""
            width={24}
            height={24}
          />
          <h2 className="mb-[22px] text-[16px]">Recycled packaging</h2>
          <h3 className="text-[14px]">
            We use 100% recycled packaging to ensure our footprint is manageable
          </h3>
        </div>
      </div>

      <div className="px-[24px] pt-[30px] pb-[30px] bg-[url('/Image3.png')] bg-cover bg-no-repeat	bg-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-light">
            Join the club and get the benefits
          </h2>
          <p className="text-sm">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Image
                className="mb-[24px] rounded-full"
                src="/Checkmark.png"
                alt=""
                width={16}
                height={16}
              />
              <h3 className="text-sm">Exclusive offers</h3>
            </div>
            <div className="flex gap-2">
              <Image
                className="mb-[24px] rounded-full"
                src="/Checkmark.png"
                alt=""
                width={16}
                height={16}
              />
              <h3 className="text-sm">Free events</h3>
            </div>
            <div className="flex gap-2">
              <Image
                className="mb-[24px] rounded-full"
                src="/Checkmark.png"
                alt=""
                width={16}
                height={16}
              />
              <h3 className="text-sm">Large discounts</h3>
            </div>
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <input
              className="py-[15px] pl-[15px]"
              type="email"
              placeholder="your@email.com"
            />
            <button className="bg-[#2A254B] px-[32px] py-[15px] text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
