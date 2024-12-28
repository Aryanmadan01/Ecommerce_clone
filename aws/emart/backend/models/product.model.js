// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//         min: 0,
//     },
//     category: {
//         type: String,
//         default: 'Uncategorized',
//     },
//     description: {
//         type: String,
//         trim: true,
//     },
//     image: {
//         type: String,
//         default: 'https://via.placeholder.com/400', // Placeholder image URL
//     },
//     rating: {
//         rate: { type: Number, default: 0 },
//         count: { type: Number, default: 0 },
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model('Product', productSchema);



import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        default: 'Uncategorized',
    },
    description: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/400', // Placeholder image URL
    },
    rating: {
        rate: { type: Number, default: 0 },
        count: { type: Number, default: 0 },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
