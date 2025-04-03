import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    const { toggleLike, deleteProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    return (
        <div className={styles.card} onClick={() => navigate(`/products/${product.id}`)}>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description.slice(0, 50)}...</p>
            </div>
            <div className={styles.actions}>
                <button className={`${styles.button} ${product.liked ? styles.like : ""}`}
                        onClick={(e) => { e.stopPropagation(); toggleLike(product.id); }}>
                    ❤️
                </button>
                <button className={`${styles.button} ${styles.delete}`}
                        onClick={(e) => { e.stopPropagation(); deleteProduct(product.id); }}>
                    ❌
                </button>
                <button className={`${styles.button} ${styles.edit}`}
                        onClick={(e) => { e.stopPropagation(); navigate(`/edit-product/${product.id}`); }}>
                    ✏️
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
