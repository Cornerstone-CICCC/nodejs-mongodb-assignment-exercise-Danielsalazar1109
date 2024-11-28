import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes';

dotenv.config();


const app = express();

// Middleware
app.use(express.json());


app.use('/api', productRoutes);  


const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('Failed to connect to MongoDB', err));
