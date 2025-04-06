import { create } from 'zustand';

// Тип продукта
export interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    liked: boolean;
}

// Тип стора
interface ProductStore {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
    toggleLike: (id: string) => void;
}

const initialProducts: Product[] = [
    {
        id: '1',
        title: "Apple MacBook Pro",
        description: "Powerful laptop with M1 chip.",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-silver-m1-2020_GEO_EMEA_LANG_FR?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1628621707000",
        liked: false,
    },
    {
        id: '2',
        title: "Samsung Galaxy S21",
        description: "Latest smartphone with stunning display.",
        image: "https://static.insales-cdn.com/images/products/1/915/498017171/%D0%91%D0%B5%D0%B7_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.jpg",
        liked: false,
    },
    {
        id: '3',
        title: "Sony WH-1000XM4",
        description: "Noise-cancelling wireless headphones.",
        image: "https://doctorhead.ru/upload/dev2fun.imagecompress/webp/resize_cache/iblock/12a/688_688_1/Sony_WH_1000XM4_b5.webp",
        liked: false,
    },
    {
        id: '4',
        title: "Nintendo Switch",
        description: "Portable gaming console for fun anywhere.",
        image: "https://store123.ru/upload/rbs.moyskladstocks/files/9924587d-f1e0-4881-be34-dad95d17e203/a6ca84bdc08143a7873088abb1117258/d0e/tmz0fwzmhipe6tw037fhwjzx690nbtt6.png",
        liked: false,
    },
];

const useProductStore = create<ProductStore>((set) => ({
    products: initialProducts,
    addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
    removeProduct: (id) =>
        set((state) => ({ products: state.products.filter((p) => p.id !== id) })),
    toggleLike: (id) =>
        set((state) => ({
            products: state.products.map((p) =>
                p.id === id ? { ...p, liked: !p.liked } : p
            ),
        })),
}));

export default useProductStore;
