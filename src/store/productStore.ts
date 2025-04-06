import { create } from 'zustand';

export interface Product {
    id: string;
    title: string;
    description: string;
    image: string;
    liked: boolean;
}

interface ProductStore {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
    toggleLike: (id: string) => void;
    updateProduct: (updatedProduct: Product) => void;
}

const useProductStore = create<ProductStore>((set) => ({
    products: [
        {
            id: '1',
            title: 'iPhone 16',
            description: 'The latest iPhone model .',
            image: 'https://twigo.ru/center/iblock/a55/h46wq23zfpn166ovwecjs5noymglfo13/zelenyy-16-plyus.png',
            liked: false
        },
        {
            id: '2',
            title: 'Samsung Galaxy S25 ',
            description: 'Flagship Android phone with great performance.',
            image: 'https://best-magazin.com/image/cache/catalog/Samsung/GalaxyS/S25Ultra/White/txry7sh45-800x800.png',
            liked: false
        },
        {
            id: '3',
            title: 'Google Pixel 9 pro',
            description: 'Pure Android experience with amazing camera.',
            image: 'https://ibrat.ru/upload/iblock/078/ipraa6f8bfv0qh9j6am2ajwigkng588u.png',
            liked: false
        },
        {
            id: '4',
            title: 'MacBook Pro 13',
            description: 'it`s best laptop in store',
            image:'https://iceapple.ru/image/catalog/MacPro/b1a2dafa8763be4084c54c6f58b211e6.jpeg',
            liked: false
        }
    ],
    addProduct: (product) => set((state) => ({
        products: [...state.products, product],
    })),
    removeProduct: (id) => set((state) => ({
        products: state.products.filter(product => product.id !== id),
    })),
    toggleLike: (id) => set((state) => ({
        products: state.products.map(product =>
            product.id === id ? { ...product, liked: !product.liked } : product
        ),
    })),
    updateProduct: (updatedProduct) => set((state) => ({
        products: state.products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        ),
    })),
}));

export default useProductStore;