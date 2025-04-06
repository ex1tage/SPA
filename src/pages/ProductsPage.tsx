import React from 'react';
import ProductCard from '../components/ProductCard';
import useProductStore from '../store/productStore';
import '../styles/ProductList.css';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const { products } = useProductStore();
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Products</h1>
            <button className="primary" onClick={() => navigate('/create-product')}>Create Product</button>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
