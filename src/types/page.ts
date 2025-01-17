export default interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: string;
        count: number;
    }
}