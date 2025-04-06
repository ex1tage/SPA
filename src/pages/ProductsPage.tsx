import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useProductStore from '../store/productStore';
import '../styles/ProductList.css';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
    const { products } = useProductStore();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Products</h1>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button className="primary" onClick={() => navigate('/create-product')}>Create Product</button>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;