import { db } from '../../config/database.js';

export const createUser = (user) => db.collection('usuarios').insertOne(user);

export const getUserByEmail = (email) =>
  db.collection('usuarios').findOne({ email });

export const getUserById = (id) =>
  db.collection('usuarios').findOne({ _id: id });

export const registerUserLastLogin = (id) =>
  db.collection('usuarios').updateOne(
    { _id: id },
    {
      $set: {
        lastLoginSession: new Date(),
      },
    }
  );
