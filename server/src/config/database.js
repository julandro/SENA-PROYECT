import { MongoClient } from 'mongodb';
import env from './env.js';

const client = new MongoClient(env.MONGO_URI);
let db;

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Base de datos conectada...');
    db = client.db(env.DBNAME);
    return db;
  } catch (error) {
    console.error('Error al conectarse a la base de datos');
    throw error;
  }
};

export { connectDB, db };
