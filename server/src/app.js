import express from 'express';
import productRoutes from './modules/Productos/index.js';
import authRoutes from './modules/auth/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import citasRoutes from './modules/Citas/index.js';

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      // Lista de orígenes permitidos
      const allowedOrigins = [
        'http://localhost:5173', // Para desarrollo local
        'https://veterinaria-julandro.pages.dev',
      ];

      // Si el origen de la petición está en nuestra lista de permitidos, o si no hay origen (ej. Postman en desarrollo),
      // o si estamos en desarrollo y el origen es localhost, lo permitimos.
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        // Si el origen no está permitido, rechazamos la solicitud
        callback(new Error('No permitido por CORS'));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);

app.use('/productos', productRoutes);
app.use('/citas', citasRoutes);

export default app;
