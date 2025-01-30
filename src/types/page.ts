

interface Dimensions {
    width: string;
    height: string;
    depth: string; 
}


export default interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    dimensions: Dimensions;
    image: string;
    rating: {
        rate: string;
        count: number;
    }
    count: number
}