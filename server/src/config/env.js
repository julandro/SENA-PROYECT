import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  DBNAME: process.env.DBNAME,
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  ENV: process.env.ENVIRONMENT,
};
