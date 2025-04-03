import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../components/Form.module.css";

const EditProductPage = () => {
    const { products, editProduct } = useContext(ProductContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === Number(id));
    const [name, setName] = useState(product ? product.name : "");
    const [description, setDescription] = useState(product ? product.description : "");

    if (!product) return <h2>Продукт не найден</h2>;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3 || description.length < 5) return;
        editProduct(product.id, { name, description });
        navigate("/products");
    };

    return (
        <div>
            <h1>Редактирование продукта</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <textarea className={styles.textarea} value={description} onChange={(e) => setDescription(e.target.value)} required />
                <button className={styles.button} type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default EditProductPage;
