import { GetProductData } from "@/sanity/sanity.query";


export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    slug: string;
}

export default async function SanityData() {
    const sanityProducts = await GetProductData();
    console.log(sanityProducts);
    return sanityProducts;
}