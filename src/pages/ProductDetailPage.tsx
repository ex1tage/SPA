import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductStore from '../store/productStore';

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useProductStore();
    const product = products.find(p => p.id === id);

    if (!product) return <h2>Product not found</h2>;

    return (
        <div className="container">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} style={{ width: '300px' }} />
            <p>{product.description}</p>
            <button className="primary" onClick={() => navigate('/products')}>Back</button>
        </div>
    );
};

export default ProductDetailPage;
