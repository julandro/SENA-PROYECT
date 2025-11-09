import { ObjectId } from 'mongodb';
import Citas from './citas.repository.js';

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getCitasByUser = async (req, res) => {
  try {
    const result = await Citas.getCitasByUser(req.body.userId);
    res.status(200).send({
      result,
    });
  } catch (error) {
    return res.status(400).send({
      code: 400,
      message: 'Error al obtener las citas del usuario',
    });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const crearCita = async (req, res) => {
  try {
    const result = await Citas.createCita({
      _id: String(new ObjectId()),
      ...req.body,
    });
    res.status(200).send({ result });
  } catch (error) {
    return res
      .status(400)
      .send({ code: 400, message: 'Error al crear la cita' });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const editarCita = async (req, res) => {
  try {
    const {
      userId,
      cita: { _id, ...restCita },
    } = req.body;
    const result = await Citas.editarCita({
      idCita: _id,
      userId,
      citaData: restCita,
    });
    res.status(200).send({ result });
  } catch (error) {
    return res
      .status(400)
      .send({ code: 400, message: 'Error al editar la cita' });
  }
};

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const eliminarCita = async (req, res) => {
  try {
    const result = await Citas.eliminarCita(req.body.citaId);
    res.status(200).send({ result });
  } catch (error) {
    return res
      .status(400)
      .send({ code: 400, message: 'Error al eliminar la cita' });
  }
};
