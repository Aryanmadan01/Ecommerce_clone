// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductManager = () => {
//     const [products, setProducts] = useState([]);
//     const [formData, setFormData] = useState({ name: '', price: '' });

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         const response = await axios.get('/api/products');
//         setProducts(response.data);
//     };

//     const createProduct = async () => {
//         await axios.post('/api/products', formData);
//         fetchProducts();
//         setFormData({ name: '', price: '' });
//     };

//     const deleteProduct = async (id) => {
//         await axios.delete(`/api/products/${id}`);
//         fetchProducts();
//     };

//     return (
//         <div>
//             <h1>Product Manager</h1>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Price"
//                     value={formData.price}
//                     onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//                 />
//                 <button onClick={createProduct}>Add Product</button>
//             </div>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product._id}>
//                         {product.name} - ${product.price}
//                         <button onClick={() => deleteProduct(product._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ProductManager;




// import React, { useState, useEffect } from 'react';

// const Admin = () => {
//     const [products, setProducts] = useState([]);
//     const [formData, setFormData] = useState({ name: '', price: '' });

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             const response = await fetch('/api/products');
//             const data = await response.json();
//             setProducts(data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     const createProduct = async () => {
//         try {
//             await fetch('/api/products', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             fetchProducts();
//             setFormData({ name: '', price: '' });
//         } catch (error) {
//             console.error('Error creating product:', error);
//         }
//     };

//     const deleteProduct = async (id) => {
//         try {
//             await fetch(`/api/products/${id}`, {
//                 method: 'DELETE',
//             });
//             fetchProducts();
//         } catch (error) {
//             console.error('Error deleting product:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Admin - Product Manager</h1>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Price"
//                     value={formData.price}
//                     onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//                 />
//                 <button onClick={createProduct}>Add Product</button>
//             </div>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product._id}>
//                         {product.name} - ${product.price}
//                         <button onClick={() => deleteProduct(product._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Admin;




import React, { useState, useEffect } from 'react';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [formData, setFormData] = useState({ name: '', price: '', image: '' });
    const [editingProductId, setEditingProductId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    // Fetch all products
    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Handle input change in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission for creating or updating products
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.price) {
            alert('Name and price are required!');
            return;
        }

        try {
            if (isEditMode) {
                // Update product
                await fetch(`http://localhost:5000/api/products/${editingProductId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                fetchProducts();
            } else {
                // Create new product
                await fetch('http://localhost:5000/api/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                fetchProducts();
            }

            // Reset form
            setFormData({ name: '', price: '', image: '' });
            setIsEditMode(false);
            setEditingProductId(null);
        } catch (error) {
            console.error('Error handling form submission:', error);
        }
    };

    // Initialize form for editing a product
    const handleEdit = (product) => {
        setIsEditMode(true);
        setEditingProductId(product._id);
        setFormData({ name: product.name, price: product.price, image: product.image || '' });
    };

    // Handle product deletion
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await fetch(`/api/products/${id}`, {
                    method: 'DELETE',
                });
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Admin - Product Manager</h1>

            {/* Form for creating or editing a product */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6 max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">
                    {isEditMode ? 'Edit Product' : 'Add New Product'}
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full border rounded p-2"
                    />
                </div>
                <div className="flex space-x-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        {isEditMode ? 'Update Product' : 'Add Product'}
                    </button>
                    {isEditMode && (
                        <button
                            type="button"
                            onClick={() => {
                                setIsEditMode(false);
                                setFormData({ name: '', price: '', image: '' });
                                setEditingProductId(null);
                            }}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>

            {/* Product list */}
            <ul className="bg-white shadow rounded p-4">
                {products.map((product) => (
                    <li key={product._id} className="flex items-center justify-between border-b py-2">
                        <span>{product.name} - ${product.price}</span>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleEdit(product)}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(product._id)}
                                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
