import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProductStore from '../store/productStore';

const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products, updateProduct  } = useProductStore();
    const product = products.find(p => p.id === id);

    const [title, setTitle] = useState(product?.title || '');
    const [description, setDescription] = useState(product?.description || '');
    const [image, setImage] = useState(product?.image || '');

    if (!product) return <h2>Product not found</h2>;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateProduct({
            ...product,
            title,
            description,
            image,
        });
        navigate('/products');
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h1>Edit Product</h1>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
            <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <button className="primary" type="submit">Save</button>
        </form>
    );
};

export default EditProductPage;
