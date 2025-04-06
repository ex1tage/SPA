import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CreateProductPage from './pages/CreateProductPage';

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/create-product" element={<CreateProductPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
);

export default App;
