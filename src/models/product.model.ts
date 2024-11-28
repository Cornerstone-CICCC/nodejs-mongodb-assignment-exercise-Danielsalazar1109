// src/models/product.model.ts

import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
    productName: string;
    productPrice: number;
}

const productSchema = new Schema<IProduct>({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
});

export const Product = mongoose.model<IProduct>('Product', productSchema);
