import express from 'express';
import productRoutes from './modules/Productos/index.js';

const app = express();

app.use(express.json());
app.use('/productos', productRoutes);

export default app;
