export default function Footer() {
  return (
    <div className="grid bg-[#2A254B] pt-[40px] px-[24px] text-[14px] font-extralight text-white">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

        <div className="leading-7">
          <h5 className="text-[16px]">Categories</h5>
          <h4>Crockery</h4>
          <h4>Furniture</h4>
          <h4>Homeware</h4>
          <h4>Plant pots</h4>
          <h4>Chairs</h4>
          <h4>Crockery</h4>
        </div>

        <div className="leading-7">
          <h5 className="text-[16px]">Menu</h5>
          <h4>New arrivals</h4>
          <h4>Best sellers</h4>
          <h4>Recently viewed</h4>
          <h4>Popular this week</h4>
          <h4>All products</h4>
        </div>

        <div className="leading-7 col-span-2 sm:col-span-1">
          <h5 className="text-[16px]">Categories</h5>
          <h4>Crockery</h4>
          <h4>Furniture</h4>
          <h4>Homeware</h4>
          <h4>Plant pots</h4>
          <h4>Chairs</h4>
          <h4>Crockery</h4>
        </div>

        <div className="max-w-[630px] col-span-2 sm:col-span-1 lg:col-span-2">
          <h3 className="mb-[15px]">Join our mailing list</h3>
          <div className="w-[100%] mb-[16px] flex h-[55px]">
            <input
              className="lg:w-[80%] lg:flex-shrink py-[16px] pl-[20px] pr-[40px] bg-[#4b4666]"
              type="email"
              placeholder="your@email.com"
            />
            <button className="bg-white whitespace-nowrap px-[32px] py-[16px] text-black">
              Sign up
            </button>
          </div>
        </div>

      </div>

      <div className="mt-[50px]">
        <div className="h-[3px] bg-[#6961a35b]"></div>
        <div className="text-center font-extralight opacity-80 py-[25px] text-sm">
          Copyright 2022 Avion LTD
        </div>
      </div>

    </div>
  );
}
