import React from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import useProductStore from '../store/productStore';
import '../styles/ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { removeProduct, toggleLike } = useProductStore();
    const navigate = useNavigate();

    return (
        <div className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 50)}...</p>
            <div className="icons">
                <FaHeart className={product.liked ? 'heart liked' : 'heart'} onClick={(e) => { e.stopPropagation(); toggleLike(product.id); }} />
                <FaTrash className="trash" onClick={(e) => { e.stopPropagation(); removeProduct(product.id); }} />
            </div>
        </div>
    );
};

export default ProductCard;
