import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === Number(id));

    if (!product) return <h2>Продукт не найден</h2>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <button onClick={() => navigate("/products")}>Назад</button>
        </div>
    );
};

export default ProductDetailPage;
