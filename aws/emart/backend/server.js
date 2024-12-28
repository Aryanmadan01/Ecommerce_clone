// const express = require('express');
// const mongoose = require('mongoose');
// const productController = require('./controller/productController');

// const app = express();
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/ecommerce', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// });

// app.use('/api', productController);

// app.listen(5000, () => console.log('Server running on http://localhost:5000'));



// const express = require('express');
// const mongoose = require('mongoose');
// const productRoutes = require('./routes/product.routes');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Database Connection
// mongoose
//     .connect('mongodb+srv://aryan0298be21:dDYgeOSUbKqXfTkK@products.jgttn.mongodb.net/?retryWrites=true&w=majority&appName=products', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected'))
//     .catch((err) => console.log(err));

// // Routes
// app.use('/api/products', productRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });
// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
    .connect('mongodb+srv://aryan0298be21:dDYgeOSUbKqXfTkK@products.jgttn.mongodb.net/?retryWrites=true&w=majority&appName=products',
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error(err));

// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
