import { db } from '../../config/database.js';

class Citas {
  /**
   * @type {import('mongodb').Collection}
   */
  static collection;

  static async getCollection() {
    if (!this.collection) {
      Citas.collection = await db.collection('citas');
    }
    return this.collection;
  }

  static async getCitasByUser(userId) {
    await this.getCollection();

    const result = await Citas.collection.find({ userId }).toArray();
    return result;
  }

  static async createCita(citaData) {
    await this.getCollection();

    const result = await Citas.collection.insertOne(citaData);
    return result;
  }

  static async editarCita({ idCita, userId, citaData }) {
    await this.getCollection();

    const result = await Citas.collection.updateOne(
      { _id: idCita, userId },
      { $set: citaData }
    );
  }

  static async eliminarCita(citaId) {
    await this.getCollection();

    const result = await Citas.collection.deleteOne({ _id: citaId });
    return result;
  }
}

export default Citas;
