import React, { useState } from 'react';
import useProductStore from '../store/productStore';
import { useNavigate } from 'react-router-dom';

const CreateProductPage = () => {
    const { addProduct } = useProductStore();
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: '', description: '', image: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ ...form, id: Date.now(), liked: false });
        navigate('/products');
    };

    return (
        <div className="container">
            <h1>Create Product</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" required onChange={(e) => setForm({ ...form, title: e.target.value })} />
                <textarea placeholder="Description" required onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
                <input type="text" placeholder="Image URL" required onChange={(e) => setForm({ ...form, image: e.target.value })} />
                <button className="primary" type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProductPage;
