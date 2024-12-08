
export default function Footer() {
    return(
        <div className="bg-[#2A254B] md:min-h-[380px] md:relative pt-[40px] px-[24px] md:px-[80px] text-[14px] font-extralight text-white flex flex-wrap">
            <div className="leading-7">
                <h5 className="text-[16px]">Categories</h5>
                <h4>Crockery</h4>
                <h4>Furniture</h4>
                <h4>Homeware</h4>
                <h4>Plant pots</h4>
                <h4>Chairs</h4>
                <h4>Crockery</h4>
            </div>
            <div className="ml-[96px] leading-7">
                <h5 className="text-[16px]">Menu</h5>
                <h4>New arrivals</h4>
                <h4>Best sellers</h4>
                <h4>Recently viewed</h4>
                <h4>Popular this week</h4>
                <h4>All products</h4>
            </div>
            <div className="mt-[40px] md:ml-[96px] md:mt-0 mb-[40px] leading-7">
                <h5 className="text-[16px]">Categories</h5>
                <h4>Crockery</h4>
                <h4>Furniture</h4>
                <h4>Homeware</h4>
                <h4>Plant pots</h4>
                <h4>Chairs</h4>
                <h4>Crockery</h4>
            </div>

            <div className="w-[100%] md:w-[600px] md:ml-[96px]">
                <h3 className="mb-[15px]">Join our mailing list</h3>
                <div className="w-[100%] flex justify-center items-center mb-[16px]">
                    <input className="md:w-[80%] md:flex-shrink py-[16px] pl-[20px] pr-[40px] bg-[#4b4666]" type="email" placeholder="your@email.com" />
                    <button className="bg-white px-[32px] py-[16px] text-black">Sign up</button>
                </div>
            </div>
            <div className="min-w[100%] md:absolute md:bottom-0 md:w-[87%]">
                <div className="w-[88vw] h-[3px] bg-[#6961a35b]"></div>
                <div className="text-center font-extralight opacity-80 py-[25px] text-sm">Copyright 2022 Avion LTD</div>
            </div>
        </div>
    )
}