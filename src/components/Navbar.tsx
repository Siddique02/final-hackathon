import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import DropDown from "./svgs/DropDown"
import Search from "./svgs/Search";
import Image from "next/image";
import Link from "next/link";
import Accounts from "./svgs/Accounts";
import Cart from "./svgs/Cart";
  


export default function Navbar() {
    return(
        <div className="flex justify-between h-[69px] bg-white px-6">
            <div className="flex items-center text-xl md:w-[100vw] md:flex md:justify-center"><h1>Avion</h1></div>
            <div className="flex justify-center items-center gap-[23px]">
                <Cart/>
                <Accounts/>
                <Search/>
                <DropdownMenu>
                    <DropdownMenuTrigger><DropDown/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                    <DropdownMenuLabel>
                        <div className="flex gap-3">
                            <Image src="/ShoppingCart.png" alt="" width={16} height={16}/>
                            <Image src="/UserAvatar.png" alt="" width={16} height={16}/>
                        </div>
                    </DropdownMenuLabel>
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
    )
}