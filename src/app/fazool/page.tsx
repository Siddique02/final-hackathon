import {products} from "@/app/data/page";
import Image from "next/image";
import Link from "next/link";

export default function Fazool() {
    return(
        <div>
            {products.map((product) => {
                return <div>
                    <Link href={`products/`}>
                        <Image src={product.image} alt="" width={200}  height={200}></Image>
                        {product.title} <br />
                        {product.descrition}
                    </Link>
                </div>
            })}
        </div>
    )
}