import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaTrash, FaEdit } from "react-icons/fa";

const ProductsPage = () => {
    const { products, toggleLike, deleteProduct } = useContext(ProductContext);
    const navigate = useNavigate();

    return (
        <div>
            <h2>Список продуктов</h2>
            <Link to="/create-product">
                <button>Добавить продукт</button>
            </Link>

            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description.substring(0, 50)}...</p>

                        <div className="icons">
                            <FaHeart
                                className={`heart ${product.liked ? "liked" : ""}`}
                                onClick={() => toggleLike(product.id)}
                            />
                            <FaEdit className="edit" onClick={() => navigate(`/edit/${product.id}`)} />
                            <FaTrash className="trash" onClick={() => deleteProduct(product.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
