// const express = require('express');
// const router = express.Router();
// const Product = require('../models/products.js'); // Assuming a Product model is defined

// // Create a new product
// router.post('/products', async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         await product.save();
//         res.status(201).send(product);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Read all products
// router.get('/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).send(products);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // Update a product
// router.put('/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//         if (!product) return res.status(404).send();
//         res.send(product);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Delete a product
// router.delete('/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id);
//         if (!product) return res.status(404).send();
//         res.send(product);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// module.exports = router;



// const Product = require('../models/product.model');

// // Get All Products
// const getAllProducts = async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// // Get Product by ID
// const getProductById = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// // Create a New Product
// const createProduct = async (req, res) => {
//     try {
//         const newProduct = new Product(req.body);
//         await newProduct.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid data', error });
//     }
// };

// // Update a Product
// const updateProduct = async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true,
//         });
//         if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid data', error });
//     }
// };

// // Delete a Product
// const deleteProduct = async (req, res) => {
//     try {
//         const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//         if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// module.exports = {
//     getAllProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct,
// };




// import express from 'express';
// import Product from '../models/product.model.js';
// import express from 'express';
// import Product from './models/product.model.js';

// const router = express.Router();

// // Get All Products
// router.get('/', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.status(200).json(products);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// });

// // Get Product by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         if (!product) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// });

// // Create a New Product
// router.post('/', async (req, res) => {
//     try {
//         const { name, price, image } = req.body;
//         const newProduct = new Product({ name, price, image });
//         await newProduct.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid data', error });
//     }
// });

// // Update a Product
// router.put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, price, image } = req.body;
//         const updatedProduct = await Product.findByIdAndUpdate(
//             id,
//             { name, price, image },
//             { new: true, runValidators: true }
//         );
//         if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid data', error });
//     }
// });

// // Delete a Product
// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedProduct = await Product.findByIdAndDelete(id);
//         if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// });

// export default router;



import Product from '../models/product.model.js';

// Get All Products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get Product by ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Create a New Product
// export const createProduct = async (req, res) => {
//     try {
//         const { name, price, category, description, image, rating } = req.body;
//         const newProduct = new Product({ name, price, category, description, image, rating });
//         console.log(newProduct);
//         await newProduct.save();
        
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid data', error });
//     }
// };



export const createProduct = async (req, res) => {
    try {
        const { name, price, category, description, image, rating } = req.body;

        // Create a new product instance
        const newProduct = new Product({ name, price, category, description, image, rating });

        // Log the product instance before saving
        console.log('Product to be created:', newProduct);

        // Save to the database
        const savedProduct = await newProduct.save();

        // Log the response after saving
        console.log('Product created successfully:', savedProduct);

        // Send the response back to the client
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(400).json({ message: 'Invalid data', error });
    }
};



// Update a Product
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, category, description, image, rating } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, category, description, image, rating },
            { new: true, runValidators: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Invalid data', error });
    }
};

// Delete a Product
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
