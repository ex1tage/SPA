import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const CreateProductPage = () => {
    const { addProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.name || !product.description || !product.image) {
            alert("Заполните все поля!");
            return;
        }
        addProduct(product);
        navigate("/products");
    };

    return (
        <div>
            <h2>Добавить продукт</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Название" value={product.name} onChange={handleChange} />
                <input type="text" name="description" placeholder="Описание" value={product.description} onChange={handleChange} />
                <input type="text" name="image" placeholder="Ссылка на изображение" value={product.image} onChange={handleChange} />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
};

export default CreateProductPage;
