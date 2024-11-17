export default interface Product {
    id: number;
    sellerId: number;
    uploadDate: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    trueque?: boolean;
    discount?: number;
    discountDateEnd?: string;
    imageUrl: string;
    rankingSales?: number;
    isLimited?: boolean;
    pilar: number;
    category: string;
}