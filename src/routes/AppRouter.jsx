import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/ProductPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CreateProductPage from "../pages/CreateProductPage";
import EditProductPage from "../pages/EditProductPage"; // ✅ Добавлен импорт

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/create-product" element={<CreateProductPage />} />
            <Route path="/edit-product/:id" element={<EditProductPage />} /> {/* ✅ Добавлен маршрут */}
        </Routes>
    </Router>
);

export default AppRouter;
