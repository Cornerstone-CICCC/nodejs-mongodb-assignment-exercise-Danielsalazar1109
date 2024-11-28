import { Request, Response } from 'express';
import { Product } from '../models/product.model';
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err });
    }
};

export const getProductById = async (req: Request <{ id: string }>, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching product', error: err });
    }
};

export const addProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: 'Error adding product', error: err });
    }
};


export const updateProduct =async (req: Request <{ id: string }>, res: Response) => {
   try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(updatedProduct);
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating product', error: err });
    }
};


export const deleteProduct = async (req: Request <{ id: string }>, res: Response) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product deleted successfully' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting product', error: err });
    }
};
