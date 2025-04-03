import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const defaultProducts = [
    {
        id: 1,
        name: "Ноутбук",
        description: "Мощный и портативный ноутбук для работы и развлечений.",
        image: "",
        liked: false,
    },
    {
        id: 2,
        name: "Смартфон",
        description: "Современный смартфон с высококачественной камерой.",
        image: "",
        liked: false,
    },
    {
        id: 3,
        name: "Беспроводные наушники",
        description: "Наушники с отличным звуком и длительным временем работы.",
        image: "",
        liked: false,
    },
    {
        id: 4,
        name: "Умные часы",
        description: "Следите за своим здоровьем и получайте уведомления.",
        image: "",
        liked: false,
    },
    {
        id: 5,
        name: "Планшет",
        description: "Идеален для чтения, просмотра видео и веб-сёрфинга.",
        image: "",
        liked: false,
    },
];

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("products");
        return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
    });

    // Сохраняем в localStorage при изменении списка продуктов
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    // Добавление нового продукта
    const addProduct = (product) => {
        setProducts((prev) => [...prev, { ...product, id: Date.now(), liked: false }]);
    };

    // Редактирование продукта
    const editProduct = (updatedProduct) => {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === updatedProduct.id ? { ...updatedProduct } : product
            )
        );
    };

    // Удаление продукта
    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
    };

    // Добавление в избранное (лайк)
    const toggleLike = (id) => {
        setProducts((prev) =>
            prev.map((product) =>
                product.id === id ? { ...product, liked: !product.liked } : product
            )
        );
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, editProduct, deleteProduct, toggleLike }}>
            {children}
        </ProductContext.Provider>
    );
};
