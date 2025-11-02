import app from './app.js';
import { connectDB } from './config/database.js';
import env from './config/env.js';

const startServer = async () => {
  console.log('------ Iniciando Servidor -------');
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(`Server conectado en el puerto ${env.PORT}`);
    });
  } catch (error) {
    console.error(
      'Error al encender el servidor o al conectarse a la base de datos',
      error
    );
  }
};

startServer();
