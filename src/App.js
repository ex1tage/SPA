import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
    return (
        <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/create-product" element={<CreateProductPage />} />
            <Route path="/edit/:id" element={<EditProductPage />} />

            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="*" element={<h2>Страница не найдена</h2>} />
        </Routes>
    );
}

export default App;
