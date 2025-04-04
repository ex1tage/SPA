import { create } from 'zustand';


const initialProducts = [
    {
        id: 1,
        title: "Apple MacBook Pro",
        description: "Powerful laptop with M1 chip.",
        image: "https://via.placeholder.com/150",
        liked: false,
    },
    {
        id: 2,
        title: "Samsung Galaxy S21",
        description: "Latest smartphone with stunning display.",
        image: "https://via.placeholder.com/150",
        liked: false,
    },
    {
        id: 3,
        title: "Sony WH-1000XM4",
        description: "Noise-cancelling wireless headphones.",
        image: "https://via.placeholder.com/150",
        liked: false,
    },
    {
        id: 4,
        title: "Nintendo Switch",
        description: "Portable gaming console for fun anywhere.",
        image: "https://via.placeholder.com/150",
        liked: false,
    }
];

const useProductStore = create((set) => ({
    products: initialProducts,
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (id) => set((state) => ({ products: state.products.filter(p => p.id !== id) })),
    toggleLike: (id) => set((state) => ({
        products: state.products.map(p => p.id === id ? { ...p, liked: !p.liked } : p)
    }))
}));

export default useProductStore;
