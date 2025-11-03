import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
//
import * as User from './auth.repository.js';
import env from '../../config/env.js';

const generateTokens = (user) => {
  const accessToken = jwt.sign({ id: user._id }, env.JWT_SECRET, {
    expiresIn: '15m',
  });

  const refreshToken = jwt.sign({ id: user._id }, env.JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });

  return { accessToken, refreshToken };
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const register = async (req, res) => {
  try {
    const { email, password, ...data } = req.body;
    const existUser = await User.getUserByEmail(email);

    if (existUser)
      return res
        .status(400)
        .send({ message: 'El email ya se encuentra en uso' });

    const hashedPassword = await bcrypt.hash(password, env.SALT_ROUNDS);

    const dataUsuario = {
      _id: String(new ObjectId()),
      email,
      ...data,
      password: hashedPassword,
      createdAt: new Date(),
    };

    const result = await User.createUser(dataUsuario);

    return res.send({
      code: 200,
      message: 'Se registro el usuario exitosamente',
      data: result,
    });
  } catch (error) {
    return res.send({
      code: 400,
      message: 'Error al registrar al usuario',
      msgError: error,
    });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.getUserByEmail(email);

    if (!existUser)
      return res.status(400).send({ message: 'Credenciales erroneas' });

    const isPasswCorrect = await bcrypt.compare(password, existUser.password);

    if (!isPasswCorrect)
      return res.status(400).send({ message: 'Credenciales erroneas' });

    // Logueado
    await User.registerUserLastLogin(existUser._id);

    const { accessToken, refreshToken } = generateTokens(existUser);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production', // Solo en produccion
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    });

    // Preparamos el objeto de usuario para enviarlo, sin el password
    const { password: _, ...user } = existUser;

    return res.send({
      code: 200,
      message: `Usuario logueado exitosamente`,
      accessToken,
      user,
    });
  } catch (error) {
    return res.send({
      code: 400,
      message: 'Error al iniciar sesion',
      msgError: error,
    });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const refreshToken = (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken)
    return res.status(400).send({
      message: 'Refresh token invalido',
    });

  jwt.verify(refreshToken, env.JWT_REFRESH_SECRET, async (err, user) => {
    if (err) return res.status(401).send({ message: 'Refresh Token invalido' });
    const { password: _, ...usuario } = await User.getUserById(user.id);
    const { accessToken } = generateTokens(usuario);
    console.log({ user });

    res.send({ accessToken, user: usuario });
  });
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const logout = (req, res) => {
  res.cookie('refreshToken', '', {
    httpOnly: true,
    secure: env.NODE_ENV === 'production', // Solo en produccion
    sameSite: 'lax',
    expires: new Date(0),
  });

  return res.status(200).send({ message: 'Cookie invalidada' });
};
