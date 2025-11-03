import express from 'express';
import productRoutes from './modules/Productos/index.js';
import authRoutes from './modules/auth/index.js';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

app.use('/productos', productRoutes);

export default app;
