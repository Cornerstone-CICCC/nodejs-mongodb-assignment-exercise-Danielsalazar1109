"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_model_1 = require("../models/product.model");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.find();
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err });
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        }
        else {
            res.status(200).json(product);
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching product', error: err });
    }
});
exports.getProductById = getProductById;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = new product_model_1.Product(req.body);
        yield newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (err) {
        res.status(400).json({ message: 'Error adding product', error: err });
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield product_model_1.Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            res.status(404).json({ message: 'Product not found' });
        }
        else {
            res.status(200).json(updatedProduct);
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating product', error: err });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield product_model_1.Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            res.status(404).json({ message: 'Product not found' });
        }
        else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting product', error: err });
    }
});
exports.deleteProduct = deleteProduct;
