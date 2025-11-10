import express from 'express';
import productRoutes from './modules/Productos/index.js';
import authRoutes from './modules/auth/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import citasRoutes from './modules/Citas/index.js';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);

app.use('/productos', productRoutes);
app.use('/citas', citasRoutes);

export default app;
