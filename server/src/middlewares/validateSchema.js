/**
 * Middleware de validación de esquemas.
 *
 * Recibe un esquema (por ejemplo, de Zod o Joi) y valida el cuerpo (`req.body`),
 * los parámetros (`req.params`) o los query params (`req.query`) de la petición.
 * Si la validación falla, lanza un error o responde con un mensaje adecuado.
 *
 * @param {import('zod').ZodSchema} schema - Esquema de validación a aplicar.
 * @returns {(req: import('express').Request, res: import('express').Response, next: import('express').NextFunction) => void}
 *
 * @example
 * // Ejemplo de uso con Zod:
 * import { z } from "zod";
 *
 * const userSchema = z.object({
 *   name: z.string().min(2),
 *   email: z.string().email(),
 * });
 *
 * app.post("/users", validateSchema(userSchema), (req, res) => {
 *   res.send("Usuario válido");
 * });
 */
const validateSchema = (schema) => (req, res, next) => {
  try {
    const parsed = schema.parse(req.body);
    req.body = parsed;
    console.log(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Datos inválidos', errors: error.errors });
  }
};

export default validateSchema;
