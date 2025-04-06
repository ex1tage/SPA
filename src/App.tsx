import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CreateProductPage from './pages/CreateProductPage';
import EditProductPage from './pages/EditProductPage';

const App = () => {
        return (
            <Routes>
                    <Route path="/" element={<ProductsPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                    <Route path="/products/:id/edit" element={<EditProductPage />} />
                    <Route path="/create-product" element={<CreateProductPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        );
};

export default App;
